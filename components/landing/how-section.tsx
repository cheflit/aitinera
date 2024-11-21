import React from "react";
import { MapPin, Calendar, Bot } from "lucide-react";

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
        icon: Bot,
        title: "AI Creates Your Itinerary",
        description: "Our AI analyzes thousands of options to create a personalized itinerary tailored to your preferences.",
    },
];

export default function HowSection(){
    return (
        <section className="w-full py-12 md:py-24 lg:py-24 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-20">How It Works</h2>
                <div className="grid gap-10 mb-8 sm:grid-cols-1 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                            <step.icon className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
