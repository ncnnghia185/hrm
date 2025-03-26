"use client"
import { getAllPositions } from '@/services/position';
import { GetAllPositionsResponse, PositionInfor } from '@/types/apiResponse/position';
import { Pagination } from '@/types/common/pagination';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetAllPositions = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [allPositionsInfor, setAllPositionsInfor] = useState<PositionInfor[]>([])
    const [paginations, setPaginations] = useState<Pagination>()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize, setPageSize] = useState<number>(10);
    useEffect(() => {
        setLoading(true)
        const fetchAllPositions = async () => {
            try {
                const response: GetAllPositionsResponse = await getAllPositions(currentPage, pageSize)
                if (response.success === true && response.errCode === 0) {
                    setAllPositionsInfor(response.data.positions)
                    setPaginations(response.data.pagination)
                }
            } catch (error) {
                toast.error("Lấy các phòng ban thất bại")
            } finally {
                setLoading(false)
            }
        }
        fetchAllPositions()
    }, [currentPage, pageSize])

    return {
        loading,
        allPositionsInfor,
        paginations,
        setCurrentPage,
        setPageSize
    }
}