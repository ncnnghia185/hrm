"use client";
import React from "react";
import SidebarComponent from "../sidebar";
import { usePathname } from "next/navigation";
import HeaderComponent from "../header";
import { useAppSelector } from "@/redux/store";
const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isCollapsed
  );
  const pathname = usePathname();

  // Không áp dụng layout với trang login
  if (pathname === "/dang-nhap") return <>{children}</>;
  return (
    <div className="flex h-screen">
      <div className={`hidden lg:flex`}>
        <SidebarComponent />
      </div>

      <div className="flex flex-col flex-1">
        <HeaderComponent />
        <main className="p-4 bg-color">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
