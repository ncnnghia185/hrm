"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ToggleTheme from "@/components/common/themeToggle";
import { useLogin } from "../../../hooks/auth/login/useLogin";
import { generateId } from "@/utils/generateUUID";
const LoginForm = () => {
  const refreshTokenId = generateId("RTI");
  const { showPassword, togglePassword, LoginSchema, handleSubmit, loading } =
    useLogin(refreshTokenId);
  return (
    <div className="w-full flex items-center justify-center mt-4 relative">
      <div className="bg-color p-8 border-[1px] border-color rounded-lg sm:shadow-none shadow-lg w-full max-w-md">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form>
              <div className="mb-4">
                <label
                  className="block text-color font-semibold"
                  htmlFor="email"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="info@gmail.com"
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-4 relative">
                <label
                  className="block text-color font-semibold"
                  htmlFor="password"
                >
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                />
                <button
                  type="button"
                  className={`absolute inset-y-0 right-3 flex items-center text-color ${errors.password ? "top-2" : errors.email ? "top-7" : "top-8"
                    }`}
                  onClick={togglePassword}
                >
                  {showPassword ? (
                    <FaRegEye className="text-color" />
                  ) : (
                    <FaRegEyeSlash className="text-color" />
                  )}
                </button>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex items-center justify-end mb-6">
                <a href="/quen-mat-khau" className="text-blue-500 text-sm">
                  Quên mật khẩu?
                </a>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-1/2 bg-[#465fff] text-white py-2 rounded-md hover:bg-[#3b54f5] transition duration-300"
                >
                  Đăng nhập
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex lg:hidden absolute -bottom-1/3 right-8 w-14 h-14 items-center justify-center rounded-full border bg-color hover:hover-bg-icon-color cursor-pointer">
        <ToggleTheme size="24" />
      </div>
    </div>
  );
};

export default LoginForm;
