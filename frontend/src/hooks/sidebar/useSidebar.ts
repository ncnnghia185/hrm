import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { toggleCollapseSidebar } from "@/redux/global/globalSlice";

export const useSidebar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isCollapsed
    );

    const [isHovered, setIsHovered] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: number]: boolean }>(
        {}
    );

    // hover sidebar
    const handleMouseEnter = () => {
        if (isSidebarCollapsed) {
            setIsHovered(true);
            dispatch(toggleCollapseSidebar());
        }
    };

    // not hover sidebar
    const handleMouseLeave = () => {
        if (isHovered) {
            setIsHovered(false);
            dispatch(toggleCollapseSidebar());
        }
    };

    // toggle show children menus
    const toggleMenu = (index: number) => {
        setOpenSubMenus((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return {
        isSidebarCollapsed,
        isHovered,
        openSubMenus,
        handleMouseEnter,
        handleMouseLeave,
        toggleMenu,
    };
};
