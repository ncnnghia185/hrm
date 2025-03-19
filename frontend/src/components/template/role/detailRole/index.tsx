"use client"
import { useGetDetailRole } from '@/hooks/role/useGetDetailRole';
import { useParams } from 'next/navigation';
import React from 'react'
import { PropagateLoader } from 'react-spinners';

const DetailRole = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const { loading, roleInfor } = useGetDetailRole(id ? id : '')
    if (loading) {
        return <div className='w-full h-full flex items-center justify-center'>
            <PropagateLoader size={13} color='#2ed573' />
        </div>
    }
    return (
        <div className='flex-1 w-full h-full flex flex-col gap-1'>
            <div className='w-full flex-1 md:h-1/4 flex flex-col border border-color rounded-md px-2 py-1'>
                <div className="flex-1 flex flex-col">
                    <div className="w-full h-8 flex items-center">
                        <span className="text-sm md:text-base font-medium text-color">
                            Thông tin vai trò
                        </span>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Tên vai trò
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6]">
                                    {roleInfor?.name || "Chưa có dữ liệu"}
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Mô tả vai trò
                                </label>
                                <div className="mt-1 px-4 py-2 w-full lg:w-96 xl:flex-1 h-16 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6] placeholder:italic no-scrollbar">
                                    {roleInfor?.description || "Chưa có mô tả"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[2] flex flex-col border border-color rounded-md px-2 py-1 ">
                <div className="w-full h-8 flex items-center">
                    <span className="text-sm md:text-base font-medium text-color">Thông tin phân quyền</span>
                </div>

                <div className="flex-1 flex-col overflow-y-auto">
                    <div className="grid grid-cols-2 bg-gray-100 dark:bg-gray-600 py-3 px-4 font-medium text-color text-center border-b-2 rounded-t-md">
                        <div className='border-r-[1px]'>Tên quyền</div>
                        <div>Mô tả</div>
                    </div>

                    {roleInfor?.permissions && (
                        <div className="divide-y divide-gray-200">
                            {roleInfor.permissions.map((roleperm) => (
                                <div className="grid grid-cols-2 py-4 px-4 items-center hover:bg-gray-50 dark:hover:bg-gray-500 transition" key={roleperm.id}>
                                    <div className="text-center font-medium text-color">{roleperm.name}</div>
                                    <div className="text-center text-gray-600 dark:text-gray-300">{roleperm.description}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DetailRole