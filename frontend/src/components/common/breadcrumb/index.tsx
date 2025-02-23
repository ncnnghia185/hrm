"use client";
import { BreadItemType } from "@/types/common/breadcrumb";
import React from "react";
import Link from "next/link";
type Props = {
  breadItems: BreadItemType[];
};

const BreadCrumb = ({ breadItems }: Props) => {
  return (
    <nav className="text-color flex items-center space-x-2 h-3">
      {breadItems.map((item, index) => (
        <React.Fragment key={index}>
          {item.path ? (
            <Link
              href={item.path}
              className="text-color font-medium text-sm cursor-pointer hover:underline"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-color font-medium text-sm cursor-default">
              {item.name}
            </span>
          )}
          {index < breadItems.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadCrumb;
