"use client";

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ContactUs() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted')
    }

    return (
        <Card className="max-w-xl shadow-none border-0">
            <CardHeader>
                <CardTitle className="text-5xl text-center">Contact Us</CardTitle>
                <CardDescription className="text-center">
                    We&apos;d love to hear from you. Please fill out this form and we&apos;ll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input className="shadow-none" id="first-name" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input className="shadow-none" id="last-name" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input className="shadow-none" id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reason">Reason</Label>
                        <Select required>
                            <SelectTrigger className="shadow-none" id="reason">
                                <SelectValue placeholder="Select a reason" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="billing">Billing Question</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea className="shadow-none" id="message" placeholder="Your message here..." required />
                    </div>
                    <Button type="submit" className="w-full shadow-none">Send Message</Button>
                </form>
            </CardContent>
        </Card>
    )
}
