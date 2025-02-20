"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ToggleTheme from "@/components/common/themeToggle";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email không đúng định dạng")
    .required("Email là bắt buộc"),
  password: Yup.string().required("Mật khẩu là bắt buộc"),
});

type Props = {};

const LoginForm = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // Show / hide password
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle submit form
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log("Form Data:", values);
  };
  return (
    <div className="w-full flex items-center justify-center mt-4 relative">
      <div className="bg-white p-8 border-[1px] rounded-lg sm:shadow-none shadow-lg w-full max-w-md">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-semibold"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="info@gmail.com"
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 font-semibold"
                  htmlFor="password"
                >
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 top-8 flex items-center text-gray-600"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-end mb-6">
                <a
                  href="/quen-mat-khau"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Quyên mật khẩu?
                </a>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Đăng nhập
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex lg:hidden absolute -bottom-1/3 right-8 w-14 h-14 items-center justify-center rounded-full bg-[#465fff] hover:bg-[#5851e6] cursor-pointer">
        <ToggleTheme size="24" color="#ecf0f1" />
      </div>
    </div>
  );
};

export default LoginForm;
