"use client";

import Link from "next/link"
import {User} from 'lucide-react'
import React from "react";
import {Button} from "@/components/ui/button";

export default function Header() {
    return (
        <header className="top-0 z-50 px-20 py-5 flex w-full items-center">
            <div className="container flex mx-auto justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-xl font-semibold">
                        ai/tinera
                    </span>
                </Link>

                <div className="ml-auto flex gap-5">
                    <Link href="/">
                        <Button variant="default" size="icon" className="rounded-full size-8">
                            <User />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
