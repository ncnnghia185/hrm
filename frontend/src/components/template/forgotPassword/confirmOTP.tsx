"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useConfirmOTP } from "./hook/useConfirmOTP";

const ConfirmOTP = ({
  email,
  onSuccess,
}: {
  email: string;
  onSuccess: (data: { otp: string }) => void;
}) => {
  const { validationSchema, isSubmitted, handleSubmit } =
    useConfirmOTP(onSuccess);
  return (
    <div className="w-full max-w-md">
      <h5 className="text-[#95a5a6] dark:text-[#c4c9c8] text-center text-sm md:text-base max-w-md mx-auto px-4 py-2 whitespace-normal">
        Nhập mã OTP đã được gửi đến{" "}
        <span className="font-medium text-color">{email}</span>
      </h5>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4 flex flex-col items-center justify-center">
            <div className="mb-4 w-96">
              <label htmlFor="otp" className="block text-color font-semibold">
                Mã OTP <span className="text-red-500">*</span>
              </label>
              <Field
                type="text"
                name="otp"
                id="otp"
                placeholder="Nhập mã OTP..."
                className="mt-1 px-4 py-2 w-full border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
              />
              <ErrorMessage
                name="otp"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[40%] bg-[#465fff] text-white py-2 rounded-md hover:bg-[#3b54f5] transition duration-300"
            >
              {isSubmitting ? "Đang xác minh..." : "Xác minh OTP"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmOTP;
