"use client"
import { getDetailRole, removePermissionFromRole, updateRole } from '@/services/role';
import { GetDetailRoleResponse, DetailRoleInfo, ChangeRoleResponse } from '@/types/apiResponse/role';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import { PermissionInfo } from '@/types/apiResponse/permission';

export const useUpdateRole = (id: string, currentRoleData: DetailRoleInfo) => {
    const [loadingUpdate, setLoadingUpdate] = useState<boolean>(false)
    const [clicked, setClicked] = useState<boolean>(false)
    const [loadingRemovePermission, setLoadingRemovePermission] = useState<boolean>(false)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [currentData, setCurrentData] = useState<DetailRoleInfo>(currentRoleData)
    const [selectedPermission, setSelectedPermission] = useState<PermissionInfo>({
        id: '',
        name: '',
        description: ''
    })
    const accessToken = Cookies.get('accessToken')
    const handleClickEditIcon = () => {
        setClicked(true)
    }

    const handleOpenModal = (permission: PermissionInfo) => {
        setSelectedPermission(permission)
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setCurrentData(currentRoleData)
        setSelectedPermission({
            id: '',
            name: '',
            description: ''
        });
    };

    const handleSubmitUpdateRole = async (values: any) => {
        setLoadingUpdate(true)
        try {
            const response: ChangeRoleResponse = await updateRole(id, values, accessToken)
            if (response.success) {
                toast.success("Cập nhật vai trò thành công")
                const updatedResponse: GetDetailRoleResponse = await getDetailRole(id)
                if (updatedResponse.success) {
                    setClicked(false)
                    setCurrentData(updatedResponse.data)
                }
            } else {
                toast.error("Cập nhật vai trò thất bại")
            }
        } catch (error) {
            console.error(error);
            toast.error("Cập nhật vai trò thất bại")
        } finally {
            setLoadingUpdate(false)
        }
    }

    const handleRemovePermission = async () => {
        setLoadingRemovePermission(true)
        try {
            const response: ChangeRoleResponse = await removePermissionFromRole(id, selectedPermission.id, accessToken)
            if (response.success) {
                toast.success("Gỡ quyền khỏi vai trò thành công")
                setIsOpenModal(false)
                const updatedResponse: GetDetailRoleResponse = await getDetailRole(id)
                if (updatedResponse.success) {
                    setSelectedPermission({
                        id: '',
                        name: '',
                        description: ''
                    })
                    setCurrentData(updatedResponse.data)
                }
            }
        } catch (error) {
            console.error(error);
            toast.error("Gỡ quyền khỏi vai trò thất bại")
        } finally {
            setLoadingRemovePermission(false)
        }
    }

    return {
        loadingUpdate,
        handleClickEditIcon,
        handleSubmitUpdateRole,
        clicked,
        setClicked,
        loadingRemovePermission,
        handleRemovePermission,
        isOpenModal,
        handleOpenModal,
        handleCloseModal,
        selectedPermission,
        currentData
    }
}