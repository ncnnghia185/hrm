"use client";
import Link from "next/link";
import React from "react";

const AccessDeniedPage = () => {
  return (
    <div className="h-full w-full bg-color flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-8">
          <svg
            className="mx-auto w-64 h-64 text-[#F87171]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl font-bold text-[#B91C1C]">403</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#1E293B] dark:text-[#CBD5E1] mb-4">
          Chúng tôi xin lỗi...
        </h1>
        <p className="text-lg text-[#6B7280] mb-6">
          Trang bạn đang cố gắng truy cập có quyền truy cập hạn chế. Tài khoản
          của bạn cần được cấp các quyền để truy cập trang này !
        </p>
        <Link href="/trang-chu">
          <p className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Trang chủ
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AccessDeniedPage;
