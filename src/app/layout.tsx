import { Roboto } from "next/font/google";
import { Hero } from "./components/home/Hero";
import { Description } from "./components/home/Description";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import "./globals.css";

const roboto = Roboto({ 
  weight:["100","300","500","700"],
  subsets:["latin"],
   });
const tailwindClasses = "m-0 p-0 bg-primary text-text-color";

export default function RootLayout({ //Root Global que es el graper de toda la aplicación
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${tailwindClasses}`}>
        <Header />
        <Hero />
        <Description />
        {children}
        <Footer />
      </body>
    </html>
  );
}
