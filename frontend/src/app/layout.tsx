"use client";
import BaseLayout from "@/components/common/layout";
import "./globals.css";
import { ThemeProviders } from "./provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NextTopLoader from "nextjs-toploader";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the Roboto font
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
                height={2}
                speed={1000}
                template='<div class="bar" role="bar">
                    <div class="peg"></div>
                  </div>'
                zIndex={1600}
                showAtBottom={false}
              />
              {children}

              <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="w-[350px] md:w-[250px] sm:w-[200px] text-base sm:text-sm"
              />
            </BaseLayout>
          </ThemeProviders>
        </Provider>
      </body>
    </html>
  );
}
