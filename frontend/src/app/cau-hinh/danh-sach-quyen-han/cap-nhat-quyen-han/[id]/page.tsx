import BreadCrumb from "@/components/common/breadcrumb";
import { updatePermissionItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Cập nhật quyền",
  description: "Cập nhật quyền",
};

const UpdatePermissionPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={updatePermissionItems} />
    </div>
  );
};

export default UpdatePermissionPage;
