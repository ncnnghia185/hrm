import BreadCrumb from "@/components/common/breadcrumb";
import CreateButton from "@/components/common/button/createButton";
import FilterAndSort from "@/components/template/employee/filterAndSort/smallScreen";
import ListAllPermission from "@/components/template/permission/listAllPermission";
import SearchPermission from "@/components/template/permission/searchPermission";
import { listPermissionItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Danh sách quyền",
  description: "Danh sách quyền",
};

const PermissionsList = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={listPermissionItems} />
      <div className="flex-1 flex flex-col border border-[#bdc3c7] rounded-md shadow-md mx-8 p-2 items-center">
        <div className="w-full h-[8%] md:h-[6%]] flex items-center sm:gap-3 justify-between sm:pr-0 md:pr-8">
          <h2 className="text-base sm:text-base font-bold text-color md:pl-2">
            Danh sách quyền hạn
          </h2>
          <CreateButton
            path="/cau-hinh/danh-sach-quyen-han/tao-moi-quyen-han"
            label="Thêm quyền"
          />
        </div>
        <div className="w-[90%] md:w-[95%] h-[1px] border-b mt-2"></div>
        <div className="flex-1 h-full w-full flex flex-col mt-2">
          <div className="w-full h-[10%] md:h-[10%] relative">
            <SearchPermission />
          </div>
          <div className="flex-1 max-h-full h-full">
            <ListAllPermission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionsList;
