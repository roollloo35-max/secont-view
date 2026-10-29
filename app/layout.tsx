import type { Metadata } from "next";
import {literat, manrope} from "@/app/components/fonts"
import "./globals.css";


export const metadata: Metadata = {
  title: "Концепция проекта втрое мнение",

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${literat.variable} ${manrope.variable} h-full antialiased scroll-smooth scroll-p-[145px]`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
