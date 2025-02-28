"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
  placeholder: string;
  onSearch: (query: string) => void;
  searchResults?: any[]; // Made optional with a default value
  isLoading: boolean;
};

const SearchBar = ({
  placeholder,
  onSearch,
  searchResults = [], // Default to empty array if undefined
  isLoading,
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  // Handle search
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      onSearch(inputValue);
    }
  };

  return (
    <div className="relative w-72 md:w-96 max-w-md">
      {/* Search Input Container */}
      <div
        className={`relative flex items-center h-10 rounded-lg border border-gray-300 bg-white p-2 focus-within:shadow-sm focus-within:shadow-blue-100 focus-within:ring-1 focus-within:ring-blue-300 ${
          searchResults.length > 0 && inputValue ? "rounded-b-none" : ""
        }`}
      >
        <input
          type="text"
          className="w-full border-none bg-transparent outline-none text-gray-900 placeholder-[#9CA3AF] pl-4"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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

      {/* Search Results Dropdown */}
      {inputValue && (
        <div
          className={`absolute top-10 left-0 right-0 max-h-96 overflow-y-auto border border-t-0 border-gray-300 bg-white rounded-b-lg shadow-lg z-10 transition-all duration-200 ${
            searchResults.length > 0 || isLoading
              ? "opacity-100"
              : "opacity-0 h-0"
          }`}
        >
          {isLoading && (
            <div className="p-4 text-center text-gray-500">
              <span className="animate-pulse">Searching...</span>
            </div>
          )}
          {!isLoading && searchResults.length === 0 && inputValue && (
            <div className="p-4 text-center text-gray-500">
              No results found
            </div>
          )}
          {!isLoading && searchResults.length > 0 && (
            <ul className="divide-y divide-gray-200">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  onClick={() => {
                    console.log("Selected:", result);
                  }}
                >
                  <span className="text-gray-900">
                    {result.title || result.name || JSON.stringify(result)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
