import Hero from "@/components/root/hero";
import Footer from "@/components/root/footer";
import HowSection from "@/components/root/how-section";
import Header from "@/components/root/header";
import React from "react";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <Header />
        <Hero />
        <HowSection />
        <Footer />
    </div>
  );
}
