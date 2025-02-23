"use client";
import React from "react";
import AccountInfoForm from "./forms/accountForm";
import EmployeeInfoForm from "./forms/employeeForm";
import PositionInfoForm from "./forms/positionForm";
import PermissionInfoForm from "./forms/permissionForm";

type Props = {};

const PersonalInfoComponent = (props: Props) => {
  return (
    <div className="flex flex-col bg-color gap-2 mt-2">
      {/* Account info */}
      <div className="w-full flex flex-col gap-2 rounded-md border border-component-color shadow-sm px-3 py-2">
        <span className="text-sm xl:text-base text-color font-medium">
          Thông tin tài khoản
        </span>
        <div className="border-b border-component-color w-full h-[1px]"></div>
        <AccountInfoForm />
      </div>

      {/* Employee info */}
      <div className="w-full flex flex-col gap-2 rounded-md border border-component-color shadow-sm px-3 py-2">
        <span className="text-sm xl:text-base text-color font-medium">
          Thông tin nhân viên
        </span>
        <div className="border-b border-component-color w-full h-[1px]"></div>
        <EmployeeInfoForm />
      </div>

      {/* Position info */}
      <div className="w-full flex flex-col gap-2 rounded-md border border-component-color shadow-sm px-3 py-2">
        <span className="text-sm xl:text-base text-color font-medium">
          Thông tin chức vụ
        </span>
        <div className="border-b border-component-color w-full h-[1px]"></div>
        <PositionInfoForm />
      </div>
    </div>
  );
};

export default PersonalInfoComponent;
