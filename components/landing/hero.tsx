"use client";

import React, {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {PlaneTakeoff} from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const images = [
        "/hero-images/bora-bora.jpg",
        "/hero-images/cairo.jpg",
        // "/hero-images/chichen-itza.jpg",
        "/hero-images/egypt-temple.jpg",
        "/hero-images/las-vegas.webp",
        // "/hero-images/northern-lights.jpg",
        "/hero-images/sunrise-coast.jpg",
        "/hero-images/swiss-alps.jpg",
        // "/hero-images/petra.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="w-full hero-section">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`hero image ${index}`}
                    className={`object-cover w-full h-full absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    layout="fill"
                    priority={true}
                    quality={100}
                />
            ))}

            <div className="container py-52 md:py-64 lg:py-68 xl:py-72 mx-auto px-4 md:px-6 content">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl font-bold text-white tracking-tighter md:text-6xl lg:text-7xl/none">
                            Plan Your Perfect Trip.
                            <br/>No Strings Attached!
                        </h1>
                        <p className="mx-auto text-sm max-w-[800px] text-white sm:text-l md:text-xl">
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