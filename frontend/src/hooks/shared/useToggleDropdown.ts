import { useState, useRef, useEffect } from "react";

export const useDropdown = () => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpenDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return { dropdownRef, isOpenDropdown, setIsOpenDropdown };
};
