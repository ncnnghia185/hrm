import BreadCrumb from "@/components/common/breadcrumb";
import CreateRoleInfor from "@/components/template/role/createRole";
import { createRoleItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tạo mới vai trò",
  description: "Tạo mới vai trò trong hệ thống",
};

const CreateRolePage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={createRoleItems} />
      <CreateRoleInfor />
    </div>
  );
};

export default CreateRolePage;
