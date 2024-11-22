import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col pt-8">
            <header className="py-4">
                <div className="container mx-auto px-8">
                    <h1 className="text-2xl font-semibold">
                        <span className="text-primary">pr</span>/ivacy policy
                    </h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="md:w-1/4">
                        <TableOfContents />
                    </aside>
                    <div className="md:w-3/4">
                        <ScrollArea className="h-[calc(100vh-12rem)]">
                            <PrivacyContent />
                        </ScrollArea>
                    </div>
                </div>
            </main>
        </div>
    )
}

function TableOfContents() {
    const sections = [
        "Introduction",
        "Information We Collect",
        "How We Use Your Information",
        "Data Storage and Security",
        "Sharing Your Information",
        "Your Rights and Choices",
        "Children's Privacy",
        "Changes to This Policy",
        "Contact Us"
    ]

    return (
        <nav className="sticky top-4">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
                {sections.map((section, index) => (
                    <li key={index}>
                        <a href={`#${section.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:underline">
                            {section}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

function PrivacyContent() {
    return (
        <div className="space-y-8">
            <Section id="introduction" title="Introduction">
                <p>
                    Welcome to ai/tinera. We are committed to protecting your personal information and your right to privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                    AI-powered itinerary planning service.
                </p>
            </Section>

            <Section id="information-we-collect" title="Information We Collect">
                <p>We collect several types of information from and about users of our service, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Personal identifiers (e.g., name, email address)</li>
                    <li>Account credentials</li>
                    <li>Travel preferences and history</li>
                    <li>Location data (with your consent)</li>
                    <li>Device and usage information</li>
                    <li>User-generated content (e.g., reviews, comments)</li>
                </ul>
            </Section>

            <Section id="how-we-use-your-information" title="How We Use Your Information">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Providing and improving our AI itinerary planning service</li>
                    <li>Personalizing your experience</li>
                    <li>Communicating with you about our service</li>
                    <li>Analyzing usage patterns to enhance our AI algorithms</li>
                    <li>Protecting against fraudulent or unauthorized activity</li>
                    <li>Complying with legal obligations</li>
                </ul>
            </Section>

            <Section id="data-storage-and-security" title="Data Storage and Security">
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information.
                    However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot
                    guarantee absolute security of your data.
                </p>
                <p className="mt-2">
                    Your data is stored on secure servers located in the western region of the US. We retain your information
                    for as long as your account is active or as needed to provide you services, comply with legal obligations,
                    resolve disputes, and enforce our agreements.
                </p>
            </Section>

            <Section id="sharing-your-information" title="Sharing Your Information">
                <p>We may share your information in the following situations:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>With service providers who help us operate our business</li>
                    <li>With your consent or at your direction</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights, privacy, safety, or property</li>
                    <li>In connection with a business transfer or merger</li>
                </ul>
            </Section>

            <Section id="your-rights-and-choices" title="Your Rights and Choices">
                <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Accessing and obtaining a copy of your data</li>
                    <li>Rectifying inaccurate information</li>
                    <li>Requesting deletion of your data</li>
                    <li>Restricting or objecting to processing</li>
                    <li>Data portability</li>
                    <li>Withdrawing consent (where applicable)</li>
                </ul>
                <p className="mt-2">
                    To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
                </p>
            </Section>

            <Section id="childrens-privacy" title="Children's Privacy">
                <p>
                    ai/tinera is not intended for children under 13 years of age. We do not knowingly collect personal
                    information from children under 13. If you are a parent or guardian and believe we may have collected
                    information about a child, please contact us immediately.
                </p>
            </Section>

            <Section id="changes-to-this-policy" title="Changes to This Policy">
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                    Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy
                    Policy periodically for any changes.
                </p>
            </Section>

            <Section id="contact-us" title="Contact Us">
                <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-2">
                    <a href="mailto:support@aitiniera.com" className="hover:underline">
                        support@aitiniera.com
                    </a>
                </p>
            </Section>
        </div>
    )
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
    return (
        <section id={id} className="scroll-mt-16">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            {children}
            <Separator className="mt-8" />
        </section>
    )
}
