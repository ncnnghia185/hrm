import UpdateButton from "@/components/common/button/updateButton";
import { useUpdatePermission } from "@/hooks/permission/useUpdatePermission";
import { Field, Form, Formik } from "formik";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { PropagateLoader } from "react-spinners";

type Props = {
  id: string;
};

const UpdateChildPermissionForm = ({ id }: Props) => {
  const {
    currentPermissionData,
    handleSubmitUpdateChildPermission,
    handleClickChildEditIcon,
    clickedChildPermissions,
    updatingChildPermission,
  } = useUpdatePermission(id);

  if (!currentPermissionData || !currentPermissionData.childPermissions) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <PropagateLoader size={13} color="#2ed573" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {currentPermissionData.childPermissions.map((permission) => (
        <Formik
          key={permission.id}
          initialValues={{
            name: permission.name,
            description: permission.description,
          }}
          onSubmit={(values) => handleSubmitUpdateChildPermission(permission.id, id, values)}
          enableReinitialize
        >
          {({ handleSubmit, dirty, isValid }) => {
            const isEditing = clickedChildPermissions[permission.id] || false;
            return (
              <Form className="w-full h-full flex flex-col">
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 lg:justify-between">
                  <div className="flex-1">
                    <label className="block text-sm xl:text-base text-color font-medium">
                      Tên nhóm quyền
                    </label>
                    <Field
                      disabled={!isEditing}
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
                      disabled={!isEditing}
                      className="mt-1 px-4 py-2 w-full lg:w-96 xl:flex-1 h-20 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color placeholder:italic no-scrollbar"
                    />
                  </div>
                </div>
                <div className="w-full h-10 md:h-8 flex items-end justify-end">
                  {isEditing ? (
                    <UpdateButton
                      disabled={!dirty || !isValid}
                      loading={updatingChildPermission}
                      onClick={handleSubmit}
                      width="32"
                      height="8"
                    />
                  ) : (
                    <div
                      className="w-7 h-7 border border-color rounded-md flex items-center justify-center bg-color hover:border-[#0984e3] dark:hover:border-[#74b9ff]"
                      onClick={() => handleClickChildEditIcon(permission.id)}
                    >
                      <CiEdit className="w-6 h-6 text-[#0984e3] dark:text-[#74b9ff] text-base font-bold cursor-pointer" />
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      ))}
    </div>
  );
};

export default UpdateChildPermissionForm;
