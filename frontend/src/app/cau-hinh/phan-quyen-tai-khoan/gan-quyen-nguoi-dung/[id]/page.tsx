import BreadCrumb from '@/components/common/breadcrumb';
import AssignUserRole from '@/components/template/role/assignUserRole';
import { assignUserRoleItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Gán quyền người dùng",
    description: "Gán quyền người dùng",
};


const AssignUserRolePage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={assignUserRoleItems} />
            <div className="flex-1">
                <AssignUserRole />
            </div>
        </div>
    )
}

export default AssignUserRolePage