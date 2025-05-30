"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUpdatePermission } from "@/hooks/permission/useUpdatePermission";
import UpdateButton from "@/components/common/button/updateButton";
import { CiEdit } from "react-icons/ci";
type Props = {
  id: string,
};

const UpdateMainPermissionForm = ({ id }: Props) => {
  const { currentPermissionData, handleSubmitUpdatePermission, handleClickEditIcon, clicked, updatingMainPermission } = useUpdatePermission(id)
  return (
    <Formik
      initialValues={{
        name: currentPermissionData?.mainPermission?.name || '',
        description: currentPermissionData?.mainPermission?.description || ''
      }}
      onSubmit={handleSubmitUpdatePermission}
      enableReinitialize
    >
      {({ handleSubmit, dirty, isValid }) => (
        <Form className="w-full h-full flex flex-col">
          <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
            <div className="flex-1">
              <label className="block text-sm xl:text-base text-color font-medium">
                Tên nhóm quyền
              </label>
              <Field
                disabled={!clicked}
                // values={currentPermissionData?.mainPermission.name}
                type="text"
                name="name"
                className="mt-1 px-4 py-2 w-full h-9 lg:w-96 xl:flex-1 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm xl:text-base text-color font-medium">
                Mô tả nhóm quyền
              </label>
              <Field
                as="textarea"
                name="description"
                disabled={!clicked}
                // values={currentPermissionData?.mainPermission.description}
                className="mt-1 px-4 py-2 w-full lg:w-96 xl:flex-1 h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
              />
            </div>
          </div>
          <div className="w-full h-10 md:h-8 flex items-end justify-end">
            {clicked ?
              (<div>
                <UpdateButton disabled={!dirty || !isValid} loading={updatingMainPermission} onClick={handleSubmit} width="32" height="8" />
              </div>) :
              (<div className="w-7 h-7 border border-color rounded-md flex items-center justify-center bg-color hover:border-[#0984e3] dark:hover:border-[#74b9ff]" onClick={handleClickEditIcon}>
                <CiEdit className="w-6 h-6 text-[#0984e3] dark:text-[#74b9ff] text-base font-bold cursor-pointer" />
              </div>)}
          </div>
        </Form>)}

    </Formik>
  )
};

export default UpdateMainPermissionForm;
