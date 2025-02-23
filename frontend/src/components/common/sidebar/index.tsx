"use client";
import React from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import sidebarItems from "@/constant/sidebar/items";
import { useSidebar } from "@/hooks/sidebar/useSidebar";

const SidebarComponent = () => {
  const {
    isSidebarCollapsed,
    openSubMenus,
    handleMouseEnter,
    handleMouseLeave,
    toggleMenu,
  } = useSidebar();

  return (
    <div
      className={`h-screen bg-color border-r-[1px] border-color transition-none duration-300 overflow-y-auto no-scrollbar 
      ${isSidebarCollapsed ? "w-20" : "w-64"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sticky top-0 z-50 flex items-center justify-center py-4 bg-color h-18 border-b border-color">
        {isSidebarCollapsed ? (
          <div>
            <span className="text-2xl">🌀</span>
          </div>
        ) : (
          <div className="text-xl font-bold transition-opacity duration-300 text-color">
            NCNAdmin
          </div>
        )}
      </div>
      <div className="flex flex-col mt-2 bg-color px-3">
        <nav className="mb-6">
          <div className="flex flex-col gap-3">
            {sidebarItems.map((item, index) => (
              <div key={index} className="relative bg-color">
                <div
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-300 rounded-lg
              ${
                openSubMenus[index]
                  ? "bg-color text-color"
                  : "hover:hover-component-color"
              }`}
                  onClick={() => toggleMenu(index)}
                >
                  <div>
                    <Link
                      href={item.path ? item.path : ""}
                      className="flex items-center"
                    >
                      <span className="text-color">
                        <item.icon size={22} />
                      </span>
                      {!isSidebarCollapsed && (
                        <span className="ml-3 text-sm font-medium transition-opacity duration-300 text-color">
                          {item.name}
                        </span>
                      )}
                    </Link>
                  </div>
                  {item.children && !isSidebarCollapsed && (
                    <span className="text-sm">
                      {openSubMenus[index] ? (
                        <FaChevronUp className="text-color" />
                      ) : (
                        <FaChevronDown className="text-color" />
                      )}
                    </span>
                  )}
                </div>

                {/* show submenu when click parent item */}
                {item.children &&
                  openSubMenus[index] &&
                  !isSidebarCollapsed && (
                    <div className="ml-6 bg-color overflow-hidden transition-all duration-300">
                      {item.children.map((child, idx) => (
                        <ul className="mt-2 space-y-1" key={idx}>
                          <Link
                            href={child.path}
                            className="flex px-4 py-2 hover:hover-component-color transition-all duration-300 rounded-md"
                          >
                            <span className="text-color">{child.name}</span>
                          </Link>
                        </ul>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SidebarComponent;
