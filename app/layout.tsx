import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IABCODES",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
