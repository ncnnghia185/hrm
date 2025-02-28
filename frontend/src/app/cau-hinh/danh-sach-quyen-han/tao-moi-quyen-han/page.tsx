import BreadCrumb from "@/components/common/breadcrumb";
import CreateChildPermission from "@/components/template/permission/createChildPermission";
import CreateMainPermission from "@/components/template/permission/createPermission";
import { createPermissionItems } from "@/constant/breadCrumb";
import { generateId } from "@/utils/generateUUID";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tạo mới quyền",
  description: "Tạo mới quyền cho nhân viên",
};

const CreateNewPermissions = () => {
  const parentPermissionId = generateId("MNQ");
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={createPermissionItems} />
      <div className="flex-1 flex flex-col gap-2">
        {/* Main Permission */}
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="w-full h-1/4 sm:h-1/5 lg:w-1/3 lg:h-ful px-3 flex flex-col mt-3">
            <span className="text-base lg:text-lg font-medium text-color">
              Tạo mới nhóm quyền
            </span>
            <span className="text-sm lg:text-base text-[#95a5a6] dark:text-[#ecf0f1]">
              Thông tin tổng quan của nhóm quyền để phục vụ phân chia các quyền
              chi tiết hơn trong hệ thống.
            </span>
          </div>
          <div className="flex-1 flex flex-col px-3 border border-color shadow-sm py-1 gap-1 rounded-sm bg-[#F9FAFB] dark:bg-[#111827]">
            <div className="flex-1 mt-2">
              <CreateMainPermission main_id={parentPermissionId} />
            </div>
          </div>
        </div>

        {/* Child Permission */}
        <div className="flex-1 lg:flex-[2] flex flex-col lg:flex-row mt-2">
          <div className="w-full h-1/4 sm:h-1/5 lg:w-1/3 lg:h-ful px-3 flex flex-col mt-3">
            <span className="text-base lg:text-lg font-medium text-color">
              Chi tiết nhóm quyền
            </span>
            <span className="text-sm lg:text-base text-[#95a5a6] dark:text-[#ecf0f1]">
              Thông tin chi tiết các quyền hạn của nhóm quyền chính trên trong
              hệ thống.
            </span>
          </div>

          <div className="flex-1 flex px-3 pt-3 border border-color shadow-sm rounded-sm bg-[#F9FAFB] dark:bg-[#111827] ">
            <CreateChildPermission parent_id={parentPermissionId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPermissions;
