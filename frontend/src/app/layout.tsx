"use client";
import BaseLayout from "@/components/common/layout";
import "./globals.css";
import { ThemeProviders } from "./provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#ffffff] dark:bg-[#101828]">
        <Provider store={store}>
          <ThemeProviders>
            <BaseLayout>{children}</BaseLayout>
          </ThemeProviders>
        </Provider>
      </body>
    </html>
  );
}
