"use client"
import React from 'react'

type Props = {
    title: string;
    message: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    type: "warning" | "delete" | "info";
}

const Modal = ({ title, message, isOpen, onClose, onConfirm, type }: Props) => {
    if (!isOpen) return null;
    const colors = {
        warning: {
            icon: "text-yellow-500",
            bg: "border-yellow-300 bg-yellow-100",
            text: "text-yellow-700",
            btnCancel: "border-yellow-500 text-yellow-700",
            btnConfirm: "bg-yellow-500 text-white",
        },
        delete: {
            icon: "text-red-500",
            bg: "bg-white",
            text: "text-red-500",
            btnCancel: "border-red-500 text-red-500",
            btnConfirm: "bg-red-500 text-white",
        },
        info: {
            icon: "text-blue-500",
            bg: "border-blue-300 bg-blue-100",
            text: "text-blue-700",
            btnCancel: "border-blue-500 text-blue-700",
            btnConfirm: "bg-blue-500 text-white",
        },
    };
    const selectedColor = colors[type];
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
            <div className={`p-6 rounded-lg shadow-lg border ${selectedColor.bg} w-96`}>
                <div className="flex items-center">
                    <span className={`text-2xl ${selectedColor.icon}`}>⚠</span>
                    <h2 className={`text-lg font-semibold ml-2 ${selectedColor.text}`}>
                        {title}
                    </h2>
                </div>

                <p className={`mt-2 ${selectedColor.text}`}>{message}</p>

                <div className="mt-4 flex justify-end space-x-3">
                    <button
                        className={`px-4 py-2 border rounded-md ${selectedColor.btnCancel} w-24 h-9 flex items-center justify-center`}
                        onClick={onClose}
                    >
                        Hủy
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${selectedColor.btnConfirm} w-30 h-9 flex items-center justify-center`}
                        onClick={onConfirm}
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal