"use client";

import Link from "next/link"
import {User} from 'lucide-react'
import React from "react";
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className="top-0 z-50 px-20 py-8 flex bg-gray-50 border-b">
            <div className="container flex mx-auto justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">
                        <span className="text-primary">ai</span>/tinera
                    </span>
                </Link>

                <Link href="/">
                    <Button variant="ghost" size="icon" className="rounded-full size-8">
                        <User />
                    </Button>
                </Link>
            </div>
        </header>
    )
}
