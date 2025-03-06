"use client";
import React from "react";
import {
  IoChevronDown,
  IoChevronUp,
  IoHelpCircleOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useDropdown } from "@/hooks/shared/useToggleDropdown";
const UserMenuDropdown = () => {
  const router = useRouter();
  const { dropdownRef, isOpenDropdown, setIsOpenDropdown } = useDropdown();

  // navigate dropdown menu
  const navigateDropdown = (path: string) => {
    setIsOpenDropdown(false);
    router.push(path);
  };

  return (
    <div className="relative ml-5">
      <button
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        className="flex items-center"
      >
        <img
          src="https://nextjs-demo.tailadmin.com/_next/image?url=%2Fimages%2Fuser%2Fowner.jpg&w=96&q=75"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="font-medium mr-1 block text-color">
          Nguyễn Chí Nghĩa
        </span>
        {isOpenDropdown ? (
          <IoChevronUp size={16} className="text-color" />
        ) : (
          <IoChevronDown size={16} className="text-color" />
        )}
      </button>

      {isOpenDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-5 w-60 bg-color rounded-xl shadow-sm overflow-hidden z-10 border-[1px] border-color p-3"
        >
          <div className="p-2 border-b border-color">
            <p className="font-medium text-color">Nguyễn Chí Nghĩa</p>
            <p className="text-sm text-color">ncn180501@gmail.com</p>
          </div>

          <ul className="py-2">
            <li
              className="flex items-center gap-2 px-4 py-2 hover:hover-component-color hover:rounded-lg cursor-pointer"
              onClick={() => navigateDropdown("/thong-tin-tai-khoan")}
            >
              <FaRegCircleUser size={18} className="text-color" />
              <span className="text-color font-medium">Thông tin</span>
            </li>
            <li
              className="flex items-center gap-2 px-4 py-2 hover:hover-component-color hover:rounded-lg cursor-pointer"
              onClick={() => navigateDropdown("/doi-mat-khau")}
            >
              <RiLockPasswordLine size={18} className="text-color" />
              <span className="text-color font-medium">Đổi mật khẩu</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:hover-component-color hover:rounded-lg cursor-pointer">
              <IoHelpCircleOutline size={20} className="text-color" />
              <span className="text-color font-medium">Liên hệ hỗ trợ</span>
            </li>
          </ul>

          <div className="border-t border-color">
            <button className="w-full text-left px-4 py-2 mt-2 flex items-center gap-2 hover:hover-component-color hover:rounded-lg cursor-pointer">
              <IoLogOutOutline size={21} className="text-color" />
              <span className="text-color font-medium">Đăng xuất</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenuDropdown;
