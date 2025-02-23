"use client";
import BaseLayout from "@/components/common/layout";
import "./globals.css";
import { ThemeProviders } from "./provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NextTopLoader from "nextjs-toploader";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["vietnamese"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} bg-[#ffffff] dark:bg-[#101828]`}>
        <Provider store={store}>
          <ThemeProviders>
            <BaseLayout>
              <NextTopLoader
                color="#2ecc71"
                initialPosition={0.08}
                height={3}
                speed={1000}
                template='<div class="bar" role="bar">
                <div class="peg"></div>
                </div> 
              '
                zIndex={1600}
                showAtBottom={false}
              />
              {children}
            </BaseLayout>
          </ThemeProviders>
        </Provider>
      </body>
    </html>
  );
}
