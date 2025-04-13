"use client"
import { CONTRACT_TEMPLATES_STATUS_OPTIONS } from '@/constant/enum_constant';
import { getDetailContract } from '@/services/contract';
import { GetDetailContractResponse, DetailContractInfor } from '@/types/apiResponse/contract';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
export const useGetDetailContract = (id: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [contractInfor, setContractInfor] = useState<DetailContractInfor>()
    useEffect(() => {
        setLoading(true)
        const fetchDetailRoles = async () => {
            try {
                const response: GetDetailContractResponse = await getDetailContract(id)
                if (response.success === true && response.errCode === 0) {
                    setContractInfor(response.data)
                }
            } catch (error) {
                toast.error("Lấy chi tiết hợp đồng thất bại.")
            } finally {
                setLoading(false)
            }
        }
        fetchDetailRoles()
    }, [id])
    const CONTRACT_TEMPLATES_STATUS_VALUE_TO_LABEL = Object.values(CONTRACT_TEMPLATES_STATUS_OPTIONS)
        .reduce((acc, item) => {
            acc[item.value] = item.label;
            return acc;
        }, {} as Record<number, string>);
    const getContractStatusLabel = (status: number): string => {
        return CONTRACT_TEMPLATES_STATUS_VALUE_TO_LABEL[status] || ""
    }
    return {
        loading,
        contractInfor,
        getContractStatusLabel
    }
}