"use client";
import React from "react";
import { FaRegBell, FaCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { notificationMockup } from "@/mockup/notificationData";
import { useDropdown } from "@/hooks/shared/useToggleDropdown";
const NotificationComponent = () => {
  const { dropdownRef, isOpenDropdown, setIsOpenDropdown } = useDropdown();

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center border border-color relative hover:hover-bg-icon-color cursor-pointer"
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <FaRegBell className="text-xl icon-color" />
        <span className="absolute top-1 right-0 h-2 w-2 bg-orange-500 rounded-full"></span>
      </div>
      {isOpenDropdown && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-5 w-96 bg-color rounded-xl shadow-sm overflow-hidden z-10 border-[1px] border-color p-3"
        >
          <div className="p-3 border-b border-color flex items-center justify-between">
            <span className="font-semibold text-color text-lg">Thông báo</span>
            <IoMdClose
              className="w-6 h-6 text-color mr-3 cursor-pointer"
              onClick={() => setIsOpenDropdown(!isOpenDropdown)}
            />
          </div>
          <div className="px-2 flex">
            <ul className="max-h-96 overflow-y-auto custom-scrollbar">
              {notificationMockup.map((notif) => (
                <li
                  key={notif.id}
                  className="flex items-start p-4 hover:hover-component-color"
                >
                  <img
                    src={notif.avatar}
                    alt={notif.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-color">
                      <span className="font-semibold">{notif.name}</span>{" "}
                      {notif.action}
                      <span className="font-semibold text-[#2563eb]">
                        {" "}
                        Project - {notif.project}
                      </span>
                    </p>
                    <span className="text-xs text-[#6b7280] dark:text-[#bdc3c7]">
                      {notif.time}
                    </span>
                  </div>
                  <FaCircle
                    className={`w-3 h-3 ${
                      notif.status === "online"
                        ? "text-[#22c55e]"
                        : "text-[#e74c3c]"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="h-12 border-t border-color flex items-center justify-center">
            <button className="h-10 w-[90%]  py-2 hover-component-color border rounded-lg border-color">
              <h2 className="text-color text-sm font-semibold">
                Xem tất cả thông báo
              </h2>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationComponent;
