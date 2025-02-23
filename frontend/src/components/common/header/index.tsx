"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import SearchBar from "../search";
import { useAppDispatch } from "@/redux/store";
import { toggleCollapseSidebar } from "@/redux/global/globalSlice";
import ToggleTheme from "../themeToggle";
import NotificationComponent from "@/components/common/notification";
import UserMenuDropdown from "../userMenu";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const toggleSidebar = () => {
    dispatch(toggleCollapseSidebar());
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-color shadow-md h-20 border-b-[1px] border-theme">
      {/* Left Side */}
      <div className="flex items-center gap-4 pl-3">
        <div
          className="w-10 h-10 rounded-lg border border-color bg-color hover:hover-bg-icon-color flex items-center justify-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt1 className="text-xl text-color" />
        </div>

        <div className="hidden lg:flex items-center">
          <SearchBar placeholder="Nhập thông tin tìm kiếm ..." />
        </div>
      </div>

      {/* <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-blue-600">NCN Company</span>
      </div> */}

      {/* Right Side */}
      <div className="flex items-center gap-4 pr-5">
        <div className="w-10 h-10 rounded-full flex items-center justify-center border border-color hover:hover-bg-icon-color">
          <ToggleTheme size="20" />
        </div>

        <NotificationComponent />

        <UserMenuDropdown />
      </div>
    </header>
  );
};

export default HeaderComponent;
