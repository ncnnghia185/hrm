"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
type Props = {
  size: string;
};

const ToggleTheme = ({ size }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        size={size}
        onClick={() => setTheme("light")}
        className="cursor-pointer icon-color"
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <FiMoon
        size={size}
        onClick={() => setTheme("dark")}
        className="cursor-pointer icon-color"
      />
    );
  }
};

export default ToggleTheme;
