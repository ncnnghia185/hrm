"use client";
import { useCreateChildPermission } from "@/hooks/permission/useCreateChildPermission";
import SaveButton from "@/components/common/button/saveButton";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";

type Props = {
  parent_id: string;
};

const CreateChildPermission = ({ parent_id }: Props) => {
  const { loading, ChildPermissionSchema, handleSubmitChildPermission } =
    useCreateChildPermission("");
  return (
    <Formik
      initialValues={{
        parent_id: parent_id,
        permissions: [{ id: uuidv4(), name: "", description: "" }],
      }}
      validationSchema={ChildPermissionSchema}
      onSubmit={handleSubmitChildPermission}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ values, handleSubmit }) => (
        <Form className="w-full h-full flex flex-col gap-4">
          <FieldArray name="permissions">
            {({ push, remove }) => (
              <div className="flex flex-col gap-4">
                {values.permissions.map((_, index) => (
                  <div
                    key={index}
                    className="border p-3 rounded-md flex flex-col gap-2"
                  >
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-2 lg:gap-4 xl:gap-16">
                      {/* Name */}
                      <div className="flex flex-col w-full">
                        <label className="block text-sm xl:text-base text-color font-medium">
                          Tên quyền<span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="text"
                          name={`permissions[${index}].name`}
                          placeholder="Nhập tên quyền..."
                          className="mt-1 px-4 py-2 w-full h-9 lg:flex-1 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color placeholder:italic"
                        />
                        <ErrorMessage
                          name={`permissions[${index}].name`}
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Description */}
                      <div className="flex flex-col w-full">
                        <label className="block text-sm xl:text-base text-color font-medium">
                          Mô Tả
                        </label>
                        <Field
                          as="textarea"
                          name={`permissions[${index}].description`}
                          placeholder="Nhập mô tả của quyền..."
                          className="mt-1 px-4 py-2 w-full lg:flex-1 h-16 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color placeholder:italic no-scrollbar"
                        />
                        <ErrorMessage
                          name={`permissions[${index}].description`}
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    {/* Nút xóa */}
                    <div className="w-full flex items-center justify-end">
                      {values.permissions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="text-red-500"
                        >
                          <BsTrash className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}

                {/* Nút thêm quyền */}
                <button
                  type="button"
                  onClick={() =>
                    push({ id: uuidv4(), name: "", description: "" })
                  }
                  className="text-green-500 text-sm underline"
                >
                  + Thêm
                </button>
              </div>
            )}
          </FieldArray>

          {/* Nút Submit */}
          <div className="w-full flex items-center justify-end xl:pr-5">
            <SaveButton loading={loading} onClick={handleSubmit} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateChildPermission;
