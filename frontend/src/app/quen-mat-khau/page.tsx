import React from "react";
import ToggleTheme from "@/components/common/themeToggle";
import { Metadata } from "next";
import ForgotPasswordFlow from "@/components/template/forgotPassword/forgotPasswordFlow";
export const metadata: Metadata = {
  title: "Quên mật khẩu",
  description: "Quên mật khẩu",
};

const ForgotPassword = () => {
  return (
    <div className="h-full max-h-full w-full flex">
      <div className="flex-1 flex flex-col items-center justify-center bg-[#ffffff] dark:bg-[#101828]">
        <h1 className="text-2xl font-bold text-color">Quên mật khẩu ?</h1>
        <ForgotPasswordFlow />
      </div>

      <div className="hidden lg:flex lg:flex-1 bg-[#161950] dark:bg-[#1c2433]">
        <div className="flex absolute bottom-6 right-8 w-14 h-14 items-center justify-center rounded-full bg-[#465fff] dark:bg-[#465fff] hover:bg-[#3f51b5] cursor-pointer">
          <ToggleTheme size="24" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
