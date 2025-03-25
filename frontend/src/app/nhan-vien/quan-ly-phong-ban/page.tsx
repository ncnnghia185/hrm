import BreadCrumb from '@/components/common/breadcrumb';
import CreateButton from '@/components/common/button/createButton';
import ListAllDepartments from '@/components/template/department/listAllDepartment';
import { departmentManageItems } from '@/constant/breadCrumb';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Quản lý phòng ban",
    description: "Quản lý phòng ban",
};
const DepartmentManage = () => {
    return (
        <div className="w-full h-full flex flex-col gap-3">
            <BreadCrumb breadItems={departmentManageItems} />
            <div className="flex-1 flex flex-col border border-[#bdc3c7] rounded-md shadow-md mx-8 p-2 items-center gap-1">
                <div className="w-full h-[8%] md:h-[6%] flex items-center sm:gap-3 justify-between sm:pr-0 md:pr-8">
                    <h2 className="text-base sm:text-base font-bold text-color md:pl-2">
                        Quản lý phòng ban
                    </h2>
                    <CreateButton
                        path="/nhan-vien/quan-ly-phong-ban/tao-moi-phong-ban"
                        label="Thêm mới"
                    />
                </div>
                <div className="w-[90%] md:w-[95%] h-[1px] border-b"></div>
                <div className="flex-1 max-h-full h-full">
                    <ListAllDepartments />
                </div>
            </div>
        </div>
    )
}

export default DepartmentManage