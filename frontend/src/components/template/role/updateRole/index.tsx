"use client"
import { useGetDetailRole } from '@/hooks/role/useGetDetailRole';
import { useUpdateRole } from '@/hooks/role/useUpdateRole';
import { useParams } from 'next/navigation';
import React from 'react'
import { PropagateLoader } from 'react-spinners';
import UpdateRoleForm from './updateRoleForm';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import Modal from '@/components/common/modal';

const UpdateRole = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const { loading, roleInfor } = useGetDetailRole(id ? id : '')
    if (loading || !roleInfor) {
        return <div className='w-full h-full flex items-center justify-center'>
            <PropagateLoader size={13} color='#2ed573' />
        </div>
    }
    const {
        handleOpenModal, selectedPermission, isOpenModal, handleCloseModal, handleRemovePermission, currentData
    } = useUpdateRole(id ? id : '', roleInfor)
    return (
        <div className='flex-1 w-full h-full flex flex-col gap-1'>
            <div className='w-full flex-1 md:h-1/2 flex flex-col border border-color rounded-md px-2 py-1'>
                <div className="flex-1 flex flex-col">
                    <div className="w-full h-8 flex items-center">
                        <span className="text-sm md:text-base font-medium text-color">
                            Thông tin vai trò
                        </span>
                    </div>
                    <div className="flex-1">
                        <UpdateRoleForm id={id ? id : ''} />
                    </div>
                </div>
            </div>
            <div className="flex-[2] flex flex-col border border-color rounded-md px-2 py-1 ">
                <div className="w-full h-8 flex items-center">
                    <span className="text-sm md:text-base font-medium text-color">Thông tin phân quyền</span>
                </div>

                <div className="flex-1 flex-col overflow-y-auto">
                    <div className="grid grid-cols-[3fr_4fr_1fr] bg-gray-100 dark:bg-gray-600 py-3 px-2 md:px-4 font-medium text-color text-center border-b-2 rounded-t-md">
                        <div className='border-r-[1px] flex justify-center items-center'>Tên quyền</div>
                        <div className='border-r-[1px] flex justify-center items-center'>Mô tả</div>
                        <div className='flex justify-center items-center text-sm md:text-base'>Gỡ quyền</div>
                    </div>

                    {roleInfor?.permissions && (
                        <div className="divide-y divide-gray-200">
                            {roleInfor.permissions.map((roleperm) => (
                                <div className="grid grid-cols-[3fr_4fr_1fr] py-4 px-2 md:px-4 items-center hover:bg-gray-50 dark:hover:bg-gray-500 transition" key={roleperm.id}>
                                    <div className="text-center font-medium text-color">{roleperm.name}</div>
                                    <div className="text-center text-gray-600 dark:text-gray-300">{roleperm.description}</div>
                                    <div className='flex justify-center items-center'>
                                        <IoIosRemoveCircleOutline className="w-5 h-5 text-[#e74c3c] cursor-pointer" onClick={() => handleOpenModal(roleperm)} />
                                    </div>
                                </div>

                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Modal
                title="Xác nhận gỡ quyền"
                message={`Bạn có chắc chắn muốn gỡ quyền "${selectedPermission?.name}" không?`}
                isOpen={isOpenModal}
                onClose={handleCloseModal}
                onConfirm={handleRemovePermission}
                type="delete"
            />
        </div>
    )
}

export default UpdateRole