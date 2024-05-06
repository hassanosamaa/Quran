import { Inter } from "next/font/google";
import "./globals.css";
import "../../public/style.css"
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "القران الكريم",
  description: "القران الكريم",
  icons:{
    icon:"/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-blue-200`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
