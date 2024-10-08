import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pallavi Bobde",
  description: "Website designer and developer, App developer, helping businesses build amazing websites and apps",
};



export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
