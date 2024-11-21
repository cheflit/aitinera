"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {

    const tripIdeas = [
        {
            title: "Weekend Getaway to Vegas",
            href: "/",
        },
        {
            title: "5 Day Trip to the Bahamas",
            href: "/",
        },
        {
            title: "2 Week Adventure in Europe",
            href: "/",
        },
        {
            title: "3 Day Excursion to the Grand Canyon",
            href: "/",
        },
    ];

    const resources = [
        {
            title: "Terms of Service",
            href: "/",
        },
        {
            title: "Privacy",
            href: "/",
        },
        {
            title: "Contact Us",
            href: "/",
        },
        {
            title: "TikTok",
            href: "/",
        },
    ];

    return (
        <footer className="py-10 px-6 md:px-8 bottom-0 border-t">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-items-center">
                <div className="space-y-2">
                    <span className="font-semibold">Need Inspiration?</span>
                    <ul>
                        {tripIdeas.map((trip, index) => (
                            <li key={index}>
                                <Link href={trip.href} className="hover:underline underline-offset-2 text-gray-500">
                                    {trip.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-2">
                    <span className="font-semibold">Resources</span>
                    <ul>
                        {resources.map((resource, index) => (
                            <li key={index}>
                                <Link href={resource.href} className="hover:underline underline-offset-2 text-gray-500">
                                    {resource.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-8 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} ai/tinera. All rights reserved. A product of tm/eight.</p>
            </div>
        </footer>
    )
}