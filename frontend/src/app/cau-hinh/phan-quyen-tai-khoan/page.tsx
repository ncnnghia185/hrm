import BreadCrumb from "@/components/common/breadcrumb";
import CreateButton from "@/components/common/button/createButton";
import { listRoleItems } from "@/constant/breadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Phân quyền tài khoản",
  description: "Phân quyền tài khoản",
};

const AccountAuthorizarion = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={listRoleItems} />
      <div className="flex-1 flex flex-col border border-[#bdc3c7] rounded-md shadow-md mx-8 p-2 items-center">
        <div className="w-full h-[8%] md:h-[6%] flex items-center sm:gap-3 justify-between sm:pr-0 md:pr-8">
          <h2 className="text-sm sm:text-base font-bold text-color md:pl-2">
            Danh sách vai trò trong hệ thống
          </h2>
          <CreateButton
            path="/cau-hinh/phan-quyen-tai-khoan/tao-moi-vai-tro"
            label="Thêm vai trò"
          />
        </div>
        <div className="w-[90%] md:w-[95%] h-[1px] border-b mt-2"></div>
      </div>
    </div>
  );
};

export default AccountAuthorizarion;
