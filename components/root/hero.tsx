"use client";

import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {PlaneTakeoff} from "lucide-react";

export default function Hero() {
    const images = [
        "/hero-images/bora-bora.jpg",
        "/hero-images/cairo.jpg",
        "/hero-images/chichen-itza.jpg",
        "/hero-images/egypt-temple.jpg",
        "/hero-images/las-vegas.webp",
        "/hero-images/northern-lights.jpg",
        "/hero-images/sunrise-coast.jpg",
        "/hero-images/swiss-alps.jpg",
        "/hero-images/petra.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section
            className="w-full py-24 md:py-32 lg:py-64 xl:py-72 hero-section"
            style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 1s ease-in-out",
            }}
        >
            <div className="container mx-auto px-4 md:px-6 content">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-white tracking-tighter md:text-5xl lg:text-6xl/none">
                            Plan Your Perfect Trip.
                            <br/>No Strings Attached!
                        </h1>
                        <p className="mx-auto pt-2 text-sm max-w-[800px] text-white sm:text-l md:text-xl">
                            We create personalized itineraries based on your preferences.
                            <br/> Best of all, no affiliate deals or strings attached. Meaning, you get the best recommendations for your trip!
                        </p>
                    </div>

                    <Link href="/">
                        <Button size="lg">
                            Start Planning That Trip!<PlaneTakeoff />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}