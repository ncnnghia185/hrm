"use client";
import "./globals.css";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#ffffff] dark:bg-[#101828]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
