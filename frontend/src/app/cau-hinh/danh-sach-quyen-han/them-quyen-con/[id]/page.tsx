import BreadCrumb from "@/components/common/breadcrumb";
import CreateChildrenPermission from "@/components/template/permission/addChildPermission";
import { createChildPermissionItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tạo phân quyền",
  description: "Tạo phân quyền",
};

const AddChildPermissions = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={createChildPermissionItems} />
      <div className="flex-1">
        <CreateChildrenPermission />
      </div>
    </div>
  );
};

export default AddChildPermissions;
