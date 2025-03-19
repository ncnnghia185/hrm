"use client"
import { motion } from "framer-motion";
import React, { useState } from 'react'

type Props = {
    text: string;
    position?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
}

const Tooltip = ({ text, position = "top", children }: Props) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const positionClasses: Record<string, string> = {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    };
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-lg ${positionClasses[position]}`}
                >
                    {text}
                </motion.div>
            )}
        </div>
    );
}

export default Tooltip