"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
});
const EmployeeInfoForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {}}
    >
      {({ values }) => {
        // Update form values
        // useEffect(() => {
        //   handlePersonalDataChange(values);
        // }, [values]);

        return (
          <Form className="flex flex-col gap-2 pl-2">
            {/* Account Id */}
            {/* <div>
                <label className="block text-sm xl:text-base text-color font-medium">
                  Id Tài khoản <span className="text-red-500">*</span>
                </label>
                <div>
                  <Field
                    type="text"
                    value={accountCode}
                    disabled
                    name="id"
                    className="mt-1 px-4 py-2 w-full h-9 xl:w-64 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-[#95a5a6] bg-color"
                  />
                </div>
              </div> */}
            <div className="xl:flex xl:flex-row xl:items-center xl:justify-between">
              {/* Email */}
              <div>
                <label className="block text-sm xl:text-base text-color font-medium">
                  Địa chỉ Email <span className="text-red-500">*</span>
                </label>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Nhập email ..."
                    className="mt-1 px-4 py-2 w-full h-9 xl:w-64 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                  />
                </div>

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1 pb-1"
                />
              </div>

              {/* Password */}
              <div className="mt-1 xl:mt-0">
                <label className="block text-sm xl:text-base text-color font-medium">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <div>
                  <Field
                    type="text"
                    name="password"
                    placeholder="Nhập mật khẩu..."
                    className="mt-1 px-4 py-2 w-full h-9 xl:w-64 border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                  />
                </div>

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EmployeeInfoForm;
