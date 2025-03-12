"use client"
import { useUpdatePermission } from "@/hooks/permission/useUpdatePermission";
import { useParams } from "next/navigation";
import React from "react";

const DetailPermission = () => {
    const params = useParams();
    const id = Array.isArray(params.id) ? params.id[0] : params.id;
    const { currentPermissionData } = useUpdatePermission(id || "");

    return (
        <div className="flex-1 w-full h-full flex flex-col gap-1">
            <div className="w-full flex-1 md:h-1/4 flex flex-col border border-color rounded-md px-2 py-1">
                <div className="flex-1 flex flex-col">
                    <div className="w-full h-8 flex items-center">
                        <span className="text-sm md:text-base font-medium text-color">
                            Thông tin nhóm quyền
                        </span>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Tên nhóm quyền
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6]">
                                    {currentPermissionData?.mainPermission.name || "Chưa có dữ liệu"}
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Mô tả nhóm quyền
                                </label>
                                <div className="mt-1 px-4 py-2 w-full lg:w-96 xl:flex-1 h-20 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6] placeholder:italic no-scrollbar">
                                    {currentPermissionData?.mainPermission.description || "Chưa có mô tả"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-[2] flex flex-col border border-color rounded-md px-2 py-1 ">
                <div className="w-full h-8 flex items-center">
                    <span className="text-sm md:text-base font-medium text-color">Thông tin phân quyền</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {currentPermissionData && currentPermissionData.childPermissions.map((child) => (
                        <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between border border-[#D1D5DB] rounded-md px-2 py-1 mt-2" key={child.id}>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Tên quyền
                                </label>
                                <div className="mt-1 px-4 py-1 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6]">
                                    {child.name || "Không có dữ liệu"}
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm xl:text-base text-color font-medium">
                                    Mô tả quyền
                                </label>
                                <div className="mt-1 px-4 py-2 w-full lg:w-96 xl:flex-1 h-12 border border-[#D1D5DB] rounded-md bg-color text-[#95a5a6] placeholder:italic no-scrollbar">
                                    {child.description || "Chưa có mô tả"}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailPermission;
