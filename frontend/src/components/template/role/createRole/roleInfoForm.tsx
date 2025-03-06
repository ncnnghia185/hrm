"use client";
import { Field, ErrorMessage } from "formik";
import React from "react";

const RoleInfoForm = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div>
        <label className="block text-sm xl:text-base text-color font-medium">
          Tên vai trò<span className="text-red-500">*</span>
        </label>
        <Field
          type="text"
          name="name"
          placeholder="Nhập tên vai trò..."
          className="mt-1 px-4 py-2 w-full h-9 lg:w-72 xl:w-80 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm xl:text-base text-color font-medium">
          Mô tả vai trò
        </label>
        <Field
          as="textarea"
          name="description"
          placeholder="Nhập mô tả vai trò..."
          className="mt-1 px-4 py-2 w-full h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
        />
        <ErrorMessage
          name="description"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>
    </div>
  );
};

export default RoleInfoForm;
