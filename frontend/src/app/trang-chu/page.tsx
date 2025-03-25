import React from "react";
import { Metadata } from "next";
import TiptapComponent from "@/components/common/tiptap";
export const metadata: Metadata = {
  title: "Trang chủ",
  description: "Trang chủ hệ thống",
};
const HomePage = () => {
  return <div className="w-full h-full">HomePage
    <TiptapComponent />
  </div>;
};

export default HomePage;
