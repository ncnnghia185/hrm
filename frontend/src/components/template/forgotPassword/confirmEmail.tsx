"use client";
import { useConfirmAccountEmail } from "../../../hooks/forgotPassword/useConfirmEmail";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Props = {
  onSuccess: (data: { email: string }) => void;
};

const ConfirmAccountEmail = ({ onSuccess }: Props) => {
  const { handleSendForgotPasswordEmail, validationSchema, loadingSendEmail } =
    useConfirmAccountEmail(onSuccess);
  return (
    <div className="w-full max-w-md">
      <h5 className="text-[#95a5a6] dark:text-[#c4c9c8] text-center text-sm md:text-base max-w-md mx-auto px-4 py-2 whitespace-normal">
        Nhập email được liên kết với tài khoản của bạn và chúng tôi sẽ gửi cho
        bạn mã OTP để đặt lại mật khẩu.
      </h5>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSendForgotPasswordEmail}
      >
        {({ isSubmitting }) => (
          <Form className="mt-4 flex flex-col items-center justify-center">
            <div className="mb-4 w-96">
              <label htmlFor="email" className="block text-color font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="info@gmail.com"
                className="mt-1 px-4 py-2 w-full border border-[#D1D5DB] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400 text-color bg-color"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={loadingSendEmail}
              className="w-[50%] bg-[#465fff] text-white py-2 rounded-md hover:bg-[#3b54f5] transition duration-300"
            >
              {loadingSendEmail ? "Đang gửi..." : "Gửi mã OTP"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConfirmAccountEmail;
