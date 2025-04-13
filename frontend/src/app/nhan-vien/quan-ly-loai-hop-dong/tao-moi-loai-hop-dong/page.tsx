import BreadCrumb from '@/components/common/breadcrumb';
import CreateContractInfo from '@/components/template/contract/createContract';
import { createContractItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Tạo mới loại hợp đồng",
    description: "Tạo mới loại hợp đồng",
};

const CreateContract = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={createContractItems} />
            <CreateContractInfo />
        </div>
    )
}

export default CreateContract