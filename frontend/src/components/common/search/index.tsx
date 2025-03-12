"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
  onSearch: (query: string) => void;
  searchResults?: any[];
  isLoading: boolean;
  searchValue: string;
  setSearchValue: (input: any) => void;
};

const SearchBar = ({
  placeholder,
  onSearch,
  searchResults = [],
  isLoading,
  searchValue,
  setSearchValue,
}: Props) => {
  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  // Handle search
  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      onSearch(searchValue);
    }
  };

  return (
    <div className="w-72 md:w-96 max-w-md">
      {/* Search Input Container */}
      <div
        className={`flex items-center h-10 rounded-lg border border-gray-300 bg-white p-2 focus-within:shadow-sm focus-within:shadow-blue-100 focus-within:ring-1 focus-within:ring-blue-300 `}
      >
        <input
          type="text"
          className="w-full border-none bg-transparent outline-none text-gray-900 placeholder-[#9CA3AF] pl-4"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-1 text-[#95a5a6] hover:text-[#34495e] disabled:text-gray-400"
          disabled={isLoading}
        >
          <CiSearch className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
