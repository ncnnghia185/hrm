"use client"
import { getAllContracts } from '@/services/contract';
import { GetAllContractsResponse, AllContractsInfor } from '@/types/apiResponse/contract';
import { Pagination } from '@/types/common/pagination';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetAllContracts = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allContractsInfor, setAllContractsInfor] = useState<AllContractsInfor[]>([])
    const [paginations, setPaginations] = useState<Pagination>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    useEffect(() => {
        setLoading(true)
        const fetchAllContracts = async () => {
            try {
                const response: GetAllContractsResponse = await getAllContracts(currentPage, pageSize)
                if (response.success === true && response.errCode === 0) {
                    setAllContractsInfor(response.data.contracts)
                    setPaginations(response.data.pagination)
                }
            } catch (error) {
                toast.error("Lấy các loại hợp đồng thất bại")
            } finally {
                setLoading(false)
            }
        }
        fetchAllContracts()
    }, [currentPage, pageSize])

    return {
        loading,
        allContractsInfor,
        paginations,
        setCurrentPage,
        setPageSize
    }
}