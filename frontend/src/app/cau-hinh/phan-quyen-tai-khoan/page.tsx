import BreadCrumb from "@/components/common/breadcrumb";
import { accountAuthorizationItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Phân quyền tài khoản",
  description: "Phân quyền tài khoản",
};

const AccountAuthorizarion = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={accountAuthorizationItems} />
    </div>
  );
};

export default AccountAuthorizarion;
