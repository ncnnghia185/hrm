"use client";
import React from "react";

type PaginationProps = {
  selectItemPerPage: number[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  selectItemPerPage,
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const renderPageNumbers = () => {
    let pages: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(currentPage - i) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && onPageChange(page)}
        className={`w-6 h-6 md:w-8 md:h-8 border rounded-lg bg-color text-color ${currentPage === page
            ? "bg-blue-500 dark:bg-blue-700 text-white"
            : "hover:bg-[#64748B]"
          }`}
        disabled={typeof page !== "number"}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-start gap-1 md:gap-3 xl:gap-6">
        {/* Hiển thị số kết quả */}
        <p className="text-component-color font-medium text-xs md:text-base">
          Hiển thị từ {Math.min((currentPage - 1) * pageSize + 1, totalItems)} -{" "}
          {Math.min(currentPage * pageSize, totalItems)} trong tổng {totalItems}{" "}
          kết quả
        </p>

        {/* Chọn số phần tử hiển thị trên trang */}
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-component-color w-16 h-8 rounded-md bg-color text-color"
        >
          {selectItemPerPage.map((size) => (
            <option key={size} value={size}>
              {size} dòng/trang
            </option>
          ))}
        </select>
      </div>
      {/* Nút điều hướng */}
      <div className="w-1/2 flex items-center justify-end space-x-2 pl-2 ml-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-6 h-6 md:w-8 md:h-8 border rounded-lg text-color disabled:text-[#9CA3AF] disabled:cursor-not-allowed"
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-6 h-6 md:w-8 md:h-8 border rounded-lg text-color disabled:text-[#9CA3AF]"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
