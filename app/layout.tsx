import type { Metadata } from "next";
import { Inter, Manrope, Open_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { ReactQueryProvider } from "@/context/react-query-provider";
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TraceIt App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Sidebar />
          <Container>
            <Navbar />
            <div className="mt-10">
              {children}
            </div>
            <Toaster />
          </Container>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
