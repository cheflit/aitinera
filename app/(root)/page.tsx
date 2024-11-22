import Hero from "@/components/root/hero";
import HowSection from "@/components/root/how-section";
import React from "react";

export default function Landing() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
        <Hero />
        <HowSection />
    </div>
  );
}
