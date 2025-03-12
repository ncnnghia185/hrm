import { getMainPermissionInfo, updateMainPermission, updateChildPermission } from "@/services/permission";
import { GetMainPermissionInfoResponse, PermissionInfo, UpdatePermissionResponse } from "@/types/apiResponse/permission";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const useUpdatePermission = (permission_id: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [currentPermissionData, setCurrentPermissionData] = useState<{ mainPermission: PermissionInfo, childPermissions: PermissionInfo[] }>()
    const [clicked, setClicked] = useState<boolean>(false)
    const [clickedChildPermissions, setClickedChildPermissions] = useState<{ [key: string]: boolean }>({});
    const [updatingMainPermission, setUpdatingMainPermission] = useState<boolean>(false)
    const [updatingChildPermission, setUpdatingChildPermission] = useState<boolean>(false)
    useEffect(() => {
        const getCurrentPermissionInfo = async () => {
            setLoading(true)
            try {
                const response: GetMainPermissionInfoResponse = await getMainPermissionInfo(permission_id)
                if (response.success !== true) {
                    toast.error("Lấy thông tin nhóm quyền thất bại")
                } else {
                    setCurrentPermissionData(response.data)
                }
            } catch (error) {
                toast.error("Đã có lỗi xảy ra. Vui lòng thử lại")
            } finally {
                setLoading(false)
            }
        }
        if (permission_id !== " ") {
            getCurrentPermissionInfo()
        }
    }, [permission_id])
    const handleClickEditIcon = () => {
        setClicked(true)
    }
    const handleClickChildEditIcon = (childPermissionId: string) => {
        setClickedChildPermissions(prevState => ({
            ...prevState,
            [childPermissionId]: !prevState[childPermissionId],
        }));
    };
    const handleSubmitUpdatePermission = async (values: any) => {
        setUpdatingMainPermission(true)
        try {
            const response: UpdatePermissionResponse = await updateMainPermission(permission_id, values)
            if (response.errCode === 0) {
                toast.success("Cập nhật nhóm quyền thành công")
                const updatedResponse: GetMainPermissionInfoResponse = await getMainPermissionInfo(permission_id)
                if (updatedResponse.success) {
                    setCurrentPermissionData(updatedResponse.data);
                }
                setClicked(false)
            } else {
                toast.error("Cập nhật nhóm quyền thất bại")
            }
        } catch (error) {
            toast.error("Cập nhật nhóm quyền thất bại")
        } finally {
            setUpdatingMainPermission(false)
        }
    }
    const handleSubmitUpdateChildPermission = async (childPermissionId: string, parent_id: string, values: any) => {
        setUpdatingChildPermission(true)
        try {
            const response: UpdatePermissionResponse = await updateChildPermission(childPermissionId, parent_id, values)
            if (response.errCode === 0) {
                toast.success("Cập nhật phân quyền thành công")
                const updatedResponse: GetMainPermissionInfoResponse = await getMainPermissionInfo(permission_id);
                if (updatedResponse.success) {
                    setCurrentPermissionData(updatedResponse.data);
                }
                setClickedChildPermissions(prevState => ({
                    ...prevState,
                    [childPermissionId]: false,
                }));
            } else {
                toast.error("Cập nhật phân quyền thất bại")
            }

        } catch (error) {
            toast.error("Cập nhật phân quyền thất bại")
        } finally {
            setUpdatingChildPermission(false)
        }
    }
    return {
        loading,
        currentPermissionData,
        clicked,
        handleClickEditIcon,
        handleSubmitUpdatePermission,
        updatingMainPermission,
        handleSubmitUpdateChildPermission,
        updatingChildPermission,
        handleClickChildEditIcon,
        clickedChildPermissions
    }
}