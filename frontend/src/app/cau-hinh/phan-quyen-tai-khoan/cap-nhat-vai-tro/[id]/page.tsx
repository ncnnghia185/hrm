import BreadCrumb from '@/components/common/breadcrumb';
import UpdateRole from '@/components/template/role/updateRole';
import { updateRoleItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Chi tiết vai trò",
    description: "Chi tiết vai trò",
};

const UpdateRolePage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={updateRoleItems} />
            <div className="flex-1">
                <UpdateRole />
            </div>
        </div>
    )
}

export default UpdateRolePage