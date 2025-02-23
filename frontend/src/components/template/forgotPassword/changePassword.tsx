"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useConfirmNewPassword } from "../../../hooks/forgotPassword/useConfirmNewPassword";
type Props = {
  email: string;
  otp: string;
  onSuccess: (data: { password: string }) => void;
};

const ConfirmNewPassword = ({ email, otp, onSuccess }: Props) => {
  const {
    isSubmitted,
    handleSubmit,
    setShowConfirmPassword,
    setShowPassword,
    showConfirmPassword,
    showPassword,
    validationSchema,
  } = useConfirmNewPassword(onSuccess);
  return (
    <div className="w-full max-w-md">
      <h5 className="text-[#95a5a6] dark:text-[#c4c9c8] text-center text-sm md:text-base max-w-md mx-auto px-4 py-2 whitespace-normal">
        Đặt mật khẩu mới cho tài khoản của{" "}
        <span className="text-color font-semibold">{email}</span>
      </h5>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4 flex flex-col items-center justify-center">
            <div className="mb-4 w-96 relative">
              <label
                htmlFor="password"
                className="block text-color font-semibold"
              >
                Mật khẩu mới <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Nhập mật khẩu mới"
                  className="mt-1 px-4 py-2 w-full border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 top-1 right-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={18} />
                  )}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* Confirm password */}
            <div className="mb-4 w-96 relative">
              <label
                htmlFor="confirmPassword"
                className="block text-color font-semibold"
              >
                Xác nhận mật khẩu <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Xác nhận mật khẩu"
                  className="mt-1 px-4 py-2 w-full border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 top-1 right-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaRegEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={18} />
                  )}
                </button>
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[50%] bg-[#465fff] text-white py-2 rounded-md hover:bg-[#3b54f5] transition duration-300"
            >
              {isSubmitting ? "Đang cập nhật..." : "Cập nhật mật khẩu"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmNewPassword;
