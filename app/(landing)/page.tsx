import Hero from "@/components/landing/hero";
import Footer from "@/components/landing/footer";
import HowSection from "@/components/landing/how-section";
import Header from "@/components/landing/header";
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
