"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  // handle search
  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      console.log("Tìm kiếm:", searchValue);
    }
  };
  return (
    <div
      className={`relative flex items-center w-72 md:w-96 h-10 max-w-md rounded-lg border border-component-color bg-color p-2 focus-within:shadow-sm focus-within:shadow-blue-100 focus-within:ring-1 focus-within:ring-blue-300`}
    >
      {/* Input search */}
      <input
        type="text"
        className="w-full border-none bg-transparent outline-none text-color placeholder-[#9CA3AF] pl-4"
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      {/* Icon tìm kiếm bên phải có sự kiện click */}
      <button
        onClick={handleSearch}
        className="ml-2 p-1 text-[#95a5a6] hover:text-[#34495e]"
      >
        <CiSearch className="h-6 w-6" />
      </button>
    </div>
  );
};

export default SearchBar;
