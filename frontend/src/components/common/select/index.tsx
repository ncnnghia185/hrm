import { ItemSelectType } from "@/types/common/select";
import React from "react";
import { IoCloseOutline, IoChevronDown } from "react-icons/io5";
type Props = {
  label: React.ReactElement;
  items: ItemSelectType[];
  selectedItems: ItemSelectType[];
  toggleDropdown: () => void;
  isOpen: boolean;
  selectItem: (item: ItemSelectType) => void;
  clearSelection: () => void;
  multiple: boolean;
};

const SelectComponent = ({
  label,
  items,
  selectedItems,
  toggleDropdown,
  isOpen,
  selectItem,
  clearSelection,
  multiple,
}: Props) => {
  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div
        className="flex items-center justify-between p-2 border border-component-color rounded-lg cursor-pointer bg-color"
        onClick={toggleDropdown}
      >
        <span className={selectedItems.length ? "text-color" : "text-gray-400"}>
          {selectedItems.length
            ? selectedItems.map((item) => item.name).join(", ")
            : "Chọn một mục"}
        </span>
        {selectedItems.length ? (
          <IoCloseOutline
            className="w-5 h-5 text-color hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              clearSelection();
            }}
          />
        ) : (
          <IoChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-color border border-component-color rounded-lg shadow-lg max-h-44 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`p-2 mx-2 hover:hover-component-color cursor-pointer mt-2 mb-2 rounded-md  ${
                selectedItems.some((i) => i.id === item.id)
                  ? "bg-[#95a5a6]"
                  : ""
              }`}
              onClick={() => {
                selectItem(item);
              }}
            >
              <span className="text-color">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectComponent;
