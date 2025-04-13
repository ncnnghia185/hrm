"use client"
import Tooltip from '@/components/common/tooltip';
import { useGetAllContracts } from '@/hooks/contract/useGetAllContracts';
import Link from 'next/link';
import React from 'react'
import { BsTrash } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { FiEdit, FiUserPlus } from 'react-icons/fi';

const AllContractsComponent = () => {
    const { allContractsInfor } = useGetAllContracts()
    return (
        <div className="w-full md:w-[680px] lg:w-[850px] xl:w-[920px] 2xl:w-[1100px] border border-gray-300 rounded-lg">
            <div className="grid grid-cols-4 md:grid-cols-5 bg-gray-100 dark:bg-gray-600 py-3 px-1 md:px-4 font-medium text-color text-center rounded-t-lg">
                <div className="border-r-[1px]">Hợp đồng</div>
                <div className="border-r-[1px]">Thời hạn</div>
                <div className="border-r-[1px]">Mô tả</div>
                <div className="hidden md:block border-r-[1px]">Trạng thái</div>
                <div>Thao tác</div>
            </div>
            {allContractsInfor && (
                <div className="divide-y divide-gray-200">
                    {allContractsInfor.map((contract) => (
                        <div className="grid grid-cols-4 md:grid-cols-5 py-4 pl-1 md:px-4 items-center hover:bg-gray-50 transition dark:hover:bg-gray-600"
                            key={contract.id}>
                            <div className="text-center text-color">{contract.contract_type_name}</div>
                            <div className="text-center text-color">{contract.duration} tháng</div>
                            <div className="text-center text-gray-600 dark:text-gray-300">{contract.description}</div>
                            <div className="hidden md:block text-center text-gray-600 dark:text-gray-300">{contract.status}</div>
                            <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 ml-2 pr-1"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Tooltip text='Xem chi tiết'>
                                    <Link href={`/nhan-vien/quan-ly-loai-hop-dong/chi-tiet-loai-hop-dong/${contract.id}`} onClick={(e) => e.stopPropagation()}>
                                        <FaRegEye className="w-5 h-5 text-color cursor-pointer" />
                                    </Link>
                                </Tooltip>
                                <Tooltip text='Chỉnh sửa'>
                                    <Link href={`/nhan-vien/quan-ly-loai-hop-dong/cap-nhat-loai-hop-dong/${contract.id}`} onClick={(e) => e.stopPropagation()}>
                                        <FiEdit className="w-5 h-5 text-blue-500 cursor-pointer" />
                                    </Link>
                                </Tooltip>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllContractsComponent