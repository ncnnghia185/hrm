import { ItemSelectType } from "@/types/common/select";
import { useEffect, useRef, useState } from "react";

const useSelect = (multiple = false) => {
    const [selectedItems, setSelectedItems] = useState<ItemSelectType[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const toggleDropdown = () => setIsOpen((prev) => !prev);
    useEffect(() => {
        if (isOpen && dropdownRef.current) {
            setTimeout(() => {
                dropdownRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 100);
        }
    }, [isOpen]);
    const selectItem = (item: ItemSelectType) => {
        if (multiple) {
            setSelectedItems((prev) =>
                prev.some((i) => i.id === item.id)
                    ? prev.filter((i) => i.id !== item.id)
                    : [...prev, item]
            );
        } else {
            setSelectedItems([item]);
            setIsOpen(false);
        }
    };

    const clearSelection = () => {
        setSelectedItems([]);
    };

    return {
        selectedItems,
        isOpen,
        toggleDropdown,
        selectItem,
        clearSelection,
        dropdownRef
    };
};

export default useSelect;
