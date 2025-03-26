import BreadCrumb from '@/components/common/breadcrumb';
import CreatePositionInfo from '@/components/template/position/createPosition';
import { createPositionItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Tạo mới chức vụ",
    description: "Tạo mới chức vụ trong hệ thống",
};

const CreateDepartment = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={createPositionItems} />
            <CreatePositionInfo />
        </div>
    )
}

export default CreateDepartment