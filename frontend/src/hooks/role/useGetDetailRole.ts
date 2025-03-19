"use client"
import { getDetailRole } from '@/services/role';
import { GetDetailRoleResponse, DetailRoleInfo } from '@/types/apiResponse/role';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetDetailRole = (id: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [roleInfor, setRolesInfor] = useState<DetailRoleInfo>()
    useEffect(() => {
        setLoading(true)
        const fetchDetailRoles = async () => {
            try {
                const response: GetDetailRoleResponse = await getDetailRole(id)
                if (response.success === true && response.errCode === 0) {
                    setRolesInfor(response.data)
                }
            } catch (error) {
                toast.error("Lấy các vai trò thất bại")
            } finally {
                setLoading(false)
            }
        }
        fetchDetailRoles()
    }, [id])

    return {
        loading,
        roleInfor
    }
}