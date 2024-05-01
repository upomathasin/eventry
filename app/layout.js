import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { dbConnection } from "@/services/mongo";
import AuthProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry-Home Page",
  description: "A platform to connect all events",
};

export default async function RootLayout({ children }) {
  await dbConnection();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {" "}
          <Navbar></Navbar>
          <main class="py-8">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
