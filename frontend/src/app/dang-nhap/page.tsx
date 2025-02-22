import ToggleTheme from "@/components/common/themeToggle";
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
      <div className="flex-1 flex flex-col items-center justify-center bg-[#ffffff] dark:bg-[#101828]">
        <h1 className="text-2xl font-semibold text-color">
          Đăng nhập tài khoản
        </h1>
        <h3 className="text-base md:text-xl text-[#95a5a6] dark:text-[#c4c9c8]">
          Nhập email và mật khẩu của bạn để đăng nhập
        </h3>
        <LoginForm />
      </div>

      <div className="hidden lg:flex lg:flex-1 bg-[#161950] dark:bg-[#1c2433]">
        <div className="flex absolute bottom-6 right-8 w-14 h-14 items-center justify-center rounded-full border bg-color hover:hover-bg-icon-color cursor-pointer">
          <ToggleTheme size="24" />
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
