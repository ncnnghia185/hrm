import React from "react";
import { Metadata } from "next";
import TiptapComponent from "@/components/common/tiptap";
import CustomTag from "@/components/common/tag";
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ hệ thống",
};
const HomePage = () => {
  return <div className="w-full h-full">HomePage
    <TiptapComponent />
    <CustomTag text="không sử dụng" color="outline" />
  </div>;
};

export default HomePage;
