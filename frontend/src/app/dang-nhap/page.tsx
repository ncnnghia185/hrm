import LoginForm from "@/components/template/loginForm";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Đăng nhập",
  description: "Đăng nhập hệ thống",
};

const LoginAccount = () => {
  return (
    <div className="h-full max-h-full w-full flex">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold text-[#121212] dark:text-[#e8e8ea]">
          Đăng nhập tài khoản
        </h1>
        <h3 className="text-base md:text-xl text-[#95a5a6] dark:text-[#c4c9c8]">
          Nhập email và mật khẩu của bạn để đăng nhập
        </h3>
        <LoginForm />
      </div>
      <div className="hidden sm:block lg:flex-1"></div>
    </div>
  );
};

export default LoginAccount;
