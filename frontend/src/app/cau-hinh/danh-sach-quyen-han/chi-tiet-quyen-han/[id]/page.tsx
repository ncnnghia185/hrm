import BreadCrumb from '@/components/common/breadcrumb';
import DetailPermission from '@/components/template/permission/detailPermission';
import { detailPermissionItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Chi tiết nhóm quyền",
    description: "Chi tiết nhóm quyền",
};

const DetailPermissionPage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={detailPermissionItems} />
            <div className="flex-1">
                <DetailPermission />
            </div>
        </div>
    )
}

export default DetailPermissionPage