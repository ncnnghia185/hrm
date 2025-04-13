import React from 'react'
import clsx from "clsx";
type Props = {
    text: string;
    color?: "default" | "green" | "blue" | "pink" | "outline";
    icon?: React.ReactNode;
}

const colorClasses: Record<string, string> = {
    default: "border border-gray-300 text-gray-700",
    green: "bg-green-100 text-green-600 border border-green-200",
    blue: "bg-blue-100 text-blue-600 border border-blue-200",
    pink: "bg-pink-100 text-pink-500 border border-pink-300",
    outline: "text-blue-600 border border-dashed border-blue-400",
};

const CustomTag = ({ text, color = "default", icon }: Props) => {
    return (
        <div
            className={clsx(
                "inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium",
                colorClasses[color]
            )}
        >
            <span>{text}</span>
            {icon && <span>{icon}</span>}
        </div>
    )
}

export default CustomTag