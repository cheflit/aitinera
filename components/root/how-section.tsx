import React from "react";
import {MapPin, Calendar, Bot, SlidersHorizontalIcon} from "lucide-react";

const steps = [
    {
        icon: MapPin,
        title: "Choose Your Destination",
        description: "Tell us where you want to go, or let our AI suggest exciting destinations based on your interests.",
    },
    {
        icon: Calendar,
        title: "Set Your Dates",
        description: "Choose your travel dates, and we'll optimize your itinerary to make the most of your time.",
    },
    {
        icon: SlidersHorizontalIcon,
        title: "Set The Vibe",
        description: "Choose your budget, travel style, and companions to tailor your perfect trip.",
    },
    {
        icon: Bot,
        title: "AI Creates Your Itinerary",
        description: "Our AI analyzes thousands of options to create a personalized itinerary tailored to your preferences.",
    },
];

export default function HowSection(){
    return (
        <section className="py-40 bg-gray-50 px-8">
            <div className="container mx-auto">
                <h2 className="font-bold text-4xl md:text-5xl text-center mb-20">
                    How It Works
                </h2>
                <div className="grid gap-10 mb-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 p-4">
                            <step.icon className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 text-center max-w-[350px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
