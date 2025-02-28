"use client";
import SearchBar from "@/components/common/search";
import { useSearch } from "@/hooks/shared/useSearch";
import { searchPermission } from "@/services/permission";
import React from "react";

type Props = {};

const SearchPermission = (props: Props) => {
  const { searchValue, setSearchValue, searchResults, isLoading, search } =
    useSearch({ searchFunction: searchPermission });
  return (
    <div className="w-full h-full flex items-center justify-start pl-5">
      <SearchBar
        placeholder="Tìm quyền hạn ..."
        onSearch={search}
        searchResults={searchResults}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SearchPermission;
