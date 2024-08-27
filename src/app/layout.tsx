import { Inter } from "next/font/google";
import { Header } from "./components/shared/Header";
import "./globals.css";
import { Footer } from "./components/shared/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
