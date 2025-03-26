"use client"
import Tooltip from '@/components/common/tooltip';
import { useGetAllPositions } from '@/hooks/position/useGetAllPositions';
import Link from 'next/link';
import React from 'react'
import { BsTrash } from 'react-icons/bs';
import { FaRegEye } from 'react-icons/fa';
import { FiEdit, FiUserPlus } from 'react-icons/fi';

const AllPositionsComponent = () => {
    const { allPositionsInfor } = useGetAllPositions()
    return (
        <div className="w-full md:w-[680px] lg:w-[850px] xl:w-[920px] 2xl:w-[1100px] border border-gray-300 rounded-lg">
            <div className="grid grid-cols-4 bg-gray-100 dark:bg-gray-600 py-3 px-4 font-medium text-color text-center rounded-t-lg">
                <div className="border-r-[1px]">Chức vụ</div>
                <div className="border-r-[1px]">Phòng ban</div>
                <div className="border-r-[1px]">Mô tả</div>
                <div>Thao tác</div>
            </div>
            {allPositionsInfor && (
                <div className="divide-y divide-gray-200">
                    {allPositionsInfor.map((position) => (
                        <div className="grid grid-cols-4 py-4 pl-4 md:px-4 items-center hover:bg-gray-50 transition dark:hover:bg-gray-600"
                            key={position.id}>
                            <div className="text-center text-color">{position.name}</div>
                            <div className="text-center text-color">{position.department.name}</div>
                            <div className="text-center text-gray-600 dark:text-gray-300">{position.description}</div>
                            <div className="flex justify-center gap-1 md:gap-2 lg:gap-3 ml-2 pr-1"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Tooltip text='Xem chi tiết'>
                                    <Link href={`/cau-hinh/phan-quyen-tai-khoan/chi-tiet-vai-tro/${position.id}`} onClick={(e) => e.stopPropagation()}>
                                        <FaRegEye className="w-5 h-5 text-color cursor-pointer" />
                                    </Link>
                                </Tooltip>
                                <Tooltip text='Thêm nhân sự'>
                                    <Link href={`/cau-hinh/phan-quyen-tai-khoan/gan-quyen-nguoi-dung/${position.id}`} onClick={(e) => e.stopPropagation()}>
                                        <FiUserPlus className="w-5 h-5 text-green-600 cursor-pointer" />
                                    </Link>
                                </Tooltip>
                                <Tooltip text='Chỉnh sửa'>
                                    <Link href={`/cau-hinh/phan-quyen-tai-khoan/cap-nhat-vai-tro/${position.id}`} onClick={(e) => e.stopPropagation()}>
                                        <FiEdit className="w-5 h-5 text-blue-500 cursor-pointer" />
                                    </Link>
                                </Tooltip>

                                <BsTrash className="w-5 h-5 text-red-500 cursor-pointer" onClick={(e) => e.stopPropagation()} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default AllPositionsComponent