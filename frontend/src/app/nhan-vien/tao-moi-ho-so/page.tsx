import BreadCrumb from "@/components/common/breadcrumb";
import CancelButton from "@/components/common/button/cancelButton";
import SaveButton from "@/components/common/button/saveButton";
import ContractInfoComponent from "@/components/template/employee/createEmployee/contractInfo";
import PersonalInfoComponent from "@/components/template/employee/createEmployee/personalInfo";
import { createEmployeeItems } from "@/constant/breadCrumb";
import React from "react";

const CreateEmployeeBrief = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={createEmployeeItems} />
      <div className="flex-1">
        <div className="flex-1 w-full flex flex-col xl:flex-row gap-2">
          {/* Thông tin cá nhân */}
          <div className="w-full xl:flex-1 flex flex-col border border-color rounded-lg p-2">
            <h1 className="text-lg font-bold text-color">Thông tin cá nhân</h1>
            <div className="border-b border-component-color w-full h-[1px]"></div>
            <div className="xl:overflow-y-auto xl:max-h-[500px] xl:custom-scrollbar">
              <PersonalInfoComponent />
            </div>
          </div>

          {/* Thông tin hợp đồng */}
          <div className="w-full xl:flex-1 flex flex-col border border-component-color rounded-lg p-2 bg-blue-600">
            <h1 className="text-lg font-bold text-color">Thông tin hợp đồng</h1>
            <div className="border-b border-component-color w-full h-[1px]"></div>
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              <ContractInfoComponent />
            </div>
          </div>
        </div>
      </div>

      {/* Nút Save / Cancel */}
      <div className="w-full flex items-center justify-center gap-3 xl:gap-7">
        <SaveButton loading={true} />
        <CancelButton />
      </div>
    </div>
  );
};

export default CreateEmployeeBrief;
