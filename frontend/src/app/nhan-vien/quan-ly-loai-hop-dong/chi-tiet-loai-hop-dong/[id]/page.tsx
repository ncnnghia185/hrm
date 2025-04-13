import BreadCrumb from '@/components/common/breadcrumb';
import DetailContract from '@/components/template/contract/detailContract';
import { detailContractItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Chi tiết loại hợp đồng",
    description: "Chi tiết loại hợp đồng",
};

const DetailPermissionPage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={detailContractItems} />
            <div className="flex-1">
                <DetailContract />
            </div>
        </div>
    )
}

export default DetailPermissionPage