"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useCreateMainPermission } from "@/hooks/permission/useCreatePermission";
import SaveButton from "@/components/common/button/saveButton";

type Props = {
  main_id: string;
};
const CreateMainPermission = ({ main_id }: Props) => {
  const { MainPermissionSchema, handleSubmitPermission, loading } =
    useCreateMainPermission();

  return (
    <Formik
      initialValues={{
        id: main_id,
        name: "",
        description: "",
      }}
      validationSchema={MainPermissionSchema}
      onSubmit={handleSubmitPermission}
    >
      {({ handleSubmit }) => (
        <Form className="w-full h-full flex flex-col gap-2 py-1">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
            <div>
              <label className="block text-sm xl:text-base text-color font-medium">
                ID Nhóm quyền
              </label>
              <Field
                disabled
                values={main_id}
                type="text"
                name="id"
                className="mt-1 px-4 py-2 w-full h-9 lg:w-72 xl:w-96 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
              />
              <ErrorMessage
                name="id"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm xl:text-base text-color font-medium">
                Tên nhóm quyền<span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Nhập tên nhóm quyền..."
                className="mt-1 px-4 py-2 w-full h-9 lg:w-72 xl:w-96 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm xl:text-base text-color font-medium">
              Mô tả nhóm quyền
            </label>
            <Field
              as="textarea"
              name="description"
              placeholder="Nhập mô tả nhóm quyền..."
              className="mt-1 px-4 py-2 w-full h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="w-full flex items-center justify-end xl:pr-5">
            <SaveButton loading={loading} onClick={handleSubmit} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateMainPermission;
