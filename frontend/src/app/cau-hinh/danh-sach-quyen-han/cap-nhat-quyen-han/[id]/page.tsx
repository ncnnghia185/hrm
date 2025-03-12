import BreadCrumb from "@/components/common/breadcrumb";
import UpdatePermission from "@/components/template/permission/updatePermission";
import { updatePermissionItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cập nhật nhóm quyền",
  description: "Cập nhật nhóm quyền",
};

const UpdatePermissionPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={updatePermissionItems} />
      <div className="flex-1">
        <UpdatePermission />
      </div>
    </div>
  );
};

export default UpdatePermissionPage;
