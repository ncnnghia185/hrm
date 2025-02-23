"use client";
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) => {
  const renderPageNumbers = () => {
    let pages: (number | string)[] = []; // Chỉ lưu số hoặc "..."

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
        className={`px-3 py-2 border rounded ${
          currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-200"
        }`}
        disabled={typeof page !== "number"}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex flex-col items-center space-y-2 mt-4">
      {/* Nút điều hướng */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 border rounded disabled:text-gray-400"
        >
          &lt;
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border rounded disabled:text-gray-400"
        >
          &gt;
        </button>
      </div>

      {/* Hiển thị số kết quả */}
      <p className="text-gray-600">
        Results {Math.min((currentPage - 1) * pageSize + 1, totalItems)} -{" "}
        {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
      </p>

      {/* Chọn số phần tử hiển thị trên trang */}
      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        className="border px-3 py-2 rounded"
      >
        {[10, 20, 50, 100].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
