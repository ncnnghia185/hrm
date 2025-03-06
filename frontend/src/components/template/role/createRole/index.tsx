"use client";
import React from "react";
import { useCreateRole } from "@/hooks/role/useCreateRole";
import { generateId } from "@/utils/generateUUID";
import RoleInfoForm from "./roleInfoForm";
import PermissionForm from "./permissionForm";
import { Formik, Form } from "formik";
import SaveButton from "@/components/common/button/saveButton";

type Props = {};

const CreateRoleInfor = ({}: Props) => {
  const roleId = generateId("MVT");
  const { roleInforSchema, permissionInforSchema, handleCreateRole, loading } =
    useCreateRole();

  // validation schemas
  const combinedSchema = roleInforSchema.concat(permissionInforSchema);

  return (
    <Formik
      initialValues={{
        id: roleId,
        name: "",
        description: "",
        permissions: [],
      }}
      validationSchema={combinedSchema}
      onSubmit={(values) => {
        handleCreateRole({
          formA: {
            id: values.id,
            name: values.name,
            description: values.description || null,
          },
          formB: {
            permissions: values.permissions,
          },
        });
      }}
    >
      {({ handleSubmit }) => (
        <Form className="flex-1 flex flex-col gap-2">
          {/* Role Information */}
          <div className="flex-1 flex flex-col lg:flex-row">
            <div className="w-full h-1/4 sm:h-1/5 lg:w-1/3 lg:h-full px-3 flex flex-col mt-3">
              <span className="text-base lg:text-lg font-medium text-color">
                Chi tiết vai trò
              </span>
              <span className="text-sm lg:text-base text-[#95a5a6] dark:text-[#ecf0f1]">
                Thông tin chi tiết của vai trò để phục vụ cho việc quản lý trong
                hệ thống.
              </span>
            </div>
            <div className="flex-1 flex flex-col px-3 border border-color shadow-sm py-1 gap-1 rounded-sm bg-[#F9FAFB] dark:bg-[#111827]">
              <div className="flex-1 mt-2">
                <RoleInfoForm />
              </div>
            </div>
          </div>

          {/* Role Permissions */}
          <div className="flex-[2] lg:flex-[3] flex flex-col lg:flex-row mt-2">
            <div className="w-full h-1/4 sm:h-1/5 lg:w-1/3 lg:h-full px-3 flex flex-col mt-3">
              <span className="text-base lg:text-lg font-medium text-color">
                Phân quyền chi tiết
              </span>
              <span className="text-sm lg:text-base text-[#95a5a6] dark:text-[#ecf0f1]">
                Giới hạn các quyền của vai trò trong hệ thống.
              </span>
            </div>
            <div className="flex-1 flex px-3 pt-3 border border-color shadow-sm rounded-sm bg-[#F9FAFB] dark:bg-[#111827]">
              <PermissionForm />
            </div>
          </div>

          {/* Submit Button */}
          <div className="w-full flex items-center justify-end xl:pr-5">
            <SaveButton loading={loading} onClick={handleSubmit} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateRoleInfor;
