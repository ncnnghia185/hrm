"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
type Props = {
  size: string;
  color: string;
};

const ToggleTheme = ({ size, color }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <FiSun size={size} color={color} onClick={() => setTheme("light")} />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <FiMoon size={size} color={color} onClick={() => setTheme("dark")} />
    );
  }
};

export default ToggleTheme;
