"use client";
import SearchBar from "@/components/common/search";
import { useSearch } from "@/hooks/shared/useSearch";
import { searchPermission } from "@/services/permission";
import React from "react";

type Props = {};

const SearchPermission = (props: Props) => {
  const {
    searchValue,
    searchResults,
    isLoading,
    search,
    setSearchValue,
    hasSearched,
  } = useSearch({
    searchFunction: searchPermission,
  });

  return (
    <div className="w-full h-full flex items-center justify-start pl-5 ">
      <SearchBar
        placeholder="Tìm quyền hạn ..."
        onSearch={search}
        searchResults={searchResults}
        isLoading={isLoading}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {searchValue.trim() !== "" && hasSearched && (
        <div className="absolute top-12 md:top-[50px] left-5 pr-5 py-2 px-2 text-sm bg-color border border-color rounded-md w-72 md:w-96 max-w-md flex">
          {searchResults.length === 0 ? (
            <div className="w-full h-14 text-center py-2">
              <p className="text-color italic text-base">
                Không tìm thấy kết quả
              </p>
            </div>
          ) : (
            <div>{searchResults.length}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchPermission;
