import React from "react";
import Navbar from "@/components/root/navbar";
import Footer from "@/components/root/footer";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <main className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        {children}
        <Footer />
      </main>
  )
}