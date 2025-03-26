import BreadCrumb from '@/components/common/breadcrumb';
import CreateButton from '@/components/common/button/createButton';
import ListAllPositions from '@/components/template/position/listAllPositions';
import { positionManageItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Quản lý chức vụ",
    description: "Quản lý chức vụ",
};
const DepartmentManage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={positionManageItems} />
            <div className="flex-1 flex flex-col border border-[#bdc3c7] rounded-md shadow-md mx-8 p-2 items-center gap-1">
                <div className="w-full h-[8%] md:h-[6%] flex items-center sm:gap-3 justify-between sm:pr-0 md:pr-8">
                    <h2 className="text-base sm:text-base font-bold text-color md:pl-2">
                        Quản lý chức vụ
                    </h2>
                    <CreateButton
                        path="/nhan-vien/quan-ly-chuc-vu/tao-moi-chuc-vu"
                        label="Thêm mới"
                    />
                </div>
                <div className="w-[90%] md:w-[95%] h-[1px] border-b"></div>
                <div className="flex-1 max-h-full h-full w-full">
                    <ListAllPositions />
                </div>
            </div>
        </div>
    )
}

export default DepartmentManage