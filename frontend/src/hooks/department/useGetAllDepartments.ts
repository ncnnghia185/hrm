"use client"
import { getAllDepartments } from '@/services/department';
import { GetAllDepartmentsResponse, DepartmentInfor } from '@/types/apiResponse/department';
import { Pagination } from '@/types/common/pagination';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetAllDepartments = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allDepartmentsInfor, setAllDepartmentsInfor] = useState<DepartmentInfor[]>([])
    const [paginations, setPaginations] = useState<Pagination>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    useEffect(() => {
        setLoading(true)
        const fetchAllDepartments = async () => {
            try {
                const response: GetAllDepartmentsResponse = await getAllDepartments(currentPage, pageSize)
                if (response.success === true && response.errCode === 0) {
                    setAllDepartmentsInfor(response.data.departments)
                    setPaginations(response.data.pagination)
                }
            } catch (error) {
                toast.error("Lấy các phòng ban thất bại")
            } finally {
                setLoading(false)
            }
        }
        fetchAllDepartments()
    }, [currentPage, pageSize])

    return {
        loading,
        allDepartmentsInfor,
        paginations,
        setCurrentPage,
        setPageSize
    }
}