import React from "react";

const NoDataComponent = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full h-full bg-gray-100 rounded-lg p-6">
            <div className="relative">
                <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-12 h-12 text-gray-400"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-1.22l-.791 13.425A3 3 0 0 1 12 21a3 3 0 0 1-2.99-2.575L8.22 5H7a1 1 0 1 1 0-2h3V2zM10 4v14a1 1 0 0 0 2 0V4h-2z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                {/* Dấu hỏi chấm trên tệp tin */}
                <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-blue-200 w-10 h-14 rounded-md flex items-center justify-center shadow-md">
                    <span className="text-2xl text-white font-bold">?</span>
                </div>
            </div>

            {/* Icon máy bay giấy */}
            <div className="relative mt-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-blue-500 animate-float"
                >
                    <path
                        fillRule="evenodd"
                        d="M22 2L11 13l-1.5 6L12 19l-1.5 1.5 6-1.5L22 2z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>

            {/* Text thông báo */}
            <h2 className="text-lg font-semibold text-gray-700 mt-4"> Không tìm thấy dữ liệu</h2>
            <p className="text-gray-500 text-sm text-center mt-2">
                Hiện tại không có dữ liệu nào. Vui lòng kiểm tra lại sau!
            </p>
        </div>
    );
};

export default NoDataComponent;
