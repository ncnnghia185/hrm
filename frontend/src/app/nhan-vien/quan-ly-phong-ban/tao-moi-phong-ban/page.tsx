import BreadCrumb from '@/components/common/breadcrumb';
import CreateDepartmentInfo from '@/components/template/department/createDepartment';
import { createDepartmentItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Tạo mới vai trò",
    description: "Tạo mới vai trò trong hệ thống",
};

const CreateDepartment = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={createDepartmentItems} />
            <CreateDepartmentInfo />
        </div>
    )
}

export default CreateDepartment