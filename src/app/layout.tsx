"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ //Root Global que es el graper de toda la aplicación
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Hola Layout")
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
