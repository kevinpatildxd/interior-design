"use client";

import { motion } from "framer-motion";
import MenuOverlay from "@/components/Navigation/MenuOverlay";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen flex flex-col">
            <MenuOverlay />

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 md:px-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-7xl italic"
                >
                    The poetry of partnership
                </motion.h1>
            </section>

            {/* Split Screen Layout */}
            <div className="flex-grow flex flex-col md:flex-row border-t border-accent/20">
                {/* Left: General Enquiries */}
                <div className="w-full md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-accent/20 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h2 className="font-display text-3xl italic mb-8">General enquiries</h2>
                    <div className="space-y-4 text-lg text-muted font-light">
                        <p>
                            <a href="tel:+4402034050242" className="hover:text-foreground transition-colors">
                                +44 (0)20 3405 0242
                            </a>
                        </p>
                        <p>
                            <a href="mailto:info@amaliaboier.com" className="hover:text-foreground transition-colors">
                                info@amaliaboier.com
                            </a>
                        </p>
                        <address className="not-italic mt-8">
                            Summit House,<br />
                            12 Red Lion Square,<br />
                            London
                        </address>
                    </div>
                </div>

                {/* Right: Project Enquiries */}
                <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-center text-center bg-accent/5">
                    <h2 className="font-display text-3xl italic mb-6">Project enquiries</h2>
                    <p className="text-muted text-lg mb-12 max-w-md">
                        If you are at the exciting conceptual stage of a project, we would love to hear from you.
                    </p>
                    <a
                        href="mailto:projects@amaliaboier.com"
                        className="inline-block px-12 py-4 border border-foreground text-lg font-nav uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                        Talk to us
                    </a>
                </div>
            </div>

            <Footer />
        </main>
    );
}
