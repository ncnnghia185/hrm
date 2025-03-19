import BreadCrumb from '@/components/common/breadcrumb';
import DetailRole from '@/components/template/role/detailRole';
import { detailRoleItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Chi tiết vai trò",
    description: "Chi tiết vai trò",
};

const DetailRolePage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={detailRoleItems} />
            <div className="flex-1">
                <DetailRole />
            </div>
        </div>
    )
}

export default DetailRolePage