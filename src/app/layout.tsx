import { Inter } from "next/font/google";
import { Header } from "./components/shared/Header";
import "./globals.css";
import { Footer } from "./components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });
const tailwindClasses = "m-0 p-0 bg-primary text-text-color";

export default function RootLayout({ //Root Global que es el graper de toda la aplicación
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${tailwindClasses}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
