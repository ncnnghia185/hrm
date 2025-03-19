"use client"
import { getAllRoles } from '@/services/role';
import { GetListRoleResponse, RoleInfor } from '@/types/apiResponse/role';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetAllRoles = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allRolesInfor, setAllRolesInfor] = useState<RoleInfor[]>([])
    const [paginations, setPaginations] = useState<{
        total: number,
        totalPages: number,
        currentPage: number,
        pageSize: number
    }>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    useEffect(() => {
        setLoading(true)
        const fetchAllRoles = async () => {
            try {
                const response: GetListRoleResponse = await getAllRoles(currentPage, pageSize)
                if (response.success === true && response.errCode === 0) {
                    setAllRolesInfor(response.data.roles)
                    setPaginations(response.data.pagination)
                }
            } catch (error) {
                toast.error("Lấy các vai trò thất bại")
            } finally {
                setLoading(false)
            }
        }
        fetchAllRoles()
    }, [currentPage, pageSize])

    return {
        loading,
        allRolesInfor,
        paginations,
        setCurrentPage,
        setPageSize
    }
}