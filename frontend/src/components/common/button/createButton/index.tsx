"use client";
import React from "react";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";
type Props = {
  path: string;
  label: string;
};

const CreateButton = ({ path, label }: Props) => {
  return (
    <Link
      href={path}
      className="w-36 h-8 md:h-9 md:w-40 flex items-center gap-2 px-3 py-2 rounded-lg border border-component-color hover-component-color transition duration-300"
    >
      <BsPlus className="w-5 h-5 text-gray-400" />
      <span className="text-sm md:text-base text-color font-medium">
        {label}
      </span>
    </Link>
  );
};

export default CreateButton;
