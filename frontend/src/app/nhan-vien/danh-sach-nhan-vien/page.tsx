"use client";
import BreadCrumb from "@/components/common/breadcrumb";
import CreateButton from "@/components/common/button/createButton";
import SearchBar from "@/components/common/search";
import FilterAndSort from "@/components/template/employee/filterAndSort/smallScreen";
import { listEmployeeItems } from "@/constant/breadCrumb";
import React from "react";

const ListEmployees = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <BreadCrumb breadItems={listEmployeeItems} />
      <div className="flex-1 flex flex-col border border-[#bdc3c7] rounded-md shadow-md mx-8 p-2 items-center">
        <div className="w-full h-[8%] md:h-[6%]] flex items-center sm:gap-3 justify-between sm:pr-0 md:pr-8">
          <h2 className="text-base sm:text-base font-bold text-color md:pl-2">
            Danh sách nhân viên
          </h2>
          <CreateButton path="/nhan-vien/tao-moi-ho-so" label="Thêm nhân sự" />
        </div>
        <div className="w-[90%] md:w-[95%] h-[1px] border-b"></div>
        <div className="h-full w-full flex flex-col mt-1">
          <div className="w-full h-[16%] md:h-[10%] flex flex-col md:flex-row items-center md:justify-between gap-2">
            <div className="w-72 lg:w-96 flex sm:pl-2">
              <SearchBar placeholder="Tìm thành viên ..." />
            </div>

            <div className="flex-1 w-full flex lg:hidden pl-7 ">
              <FilterAndSort />
            </div>
            <div className="flex-1 h-full hidden xl:flex bg-blue-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEmployees;
