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
        // turkey hot air ballon
        // thailand lantern festival
        // sunset in santorini
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
        <section className="hero-section py-40 px-8">
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

            <div className="content text-center">
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4 mx-auto">
                        <h1 className="font-bold text-white tracking-tighter text-5xl md:text-6xl lg:text-7xl/none">
                            Plan Your <span className="text-primary">Perfect</span> Trip.
                            <br/>No Strings Attached!
                        </h1>
                        <p className="max-w-[800px] text-white text-sm md:text-md lg:text-xl">
                            We create personalized itineraries based on your preferences.
                            <br/> Best of all, no affiliate deals or strings attached. Meaning, you get the best recommendations for your trip!
                        </p>
                    </div>

                    <Link href="/">
                        <Button size="lg" className="shadow-2xl text-white">
                            Start Planning That Trip!<PlaneTakeoff />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}