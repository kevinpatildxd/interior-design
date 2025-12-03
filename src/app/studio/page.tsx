"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MenuOverlay from "@/components/Navigation/MenuOverlay";
import Footer from "@/components/Footer";

export default function StudioPage() {
    return (
        <main className="bg-background min-h-screen">
            <MenuOverlay />

            {/* Hero Section */}
            <section className="h-[70vh] flex items-center justify-center px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="font-display text-5xl md:text-8xl italic max-w-5xl leading-tight"
                >
                    Telling stories through exquisite interiors.
                </motion.h1>
            </section>

            {/* Philosophy Grid */}
            <section className="border-y border-accent/30">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-accent/30">
                    {["Intangible", "Emotion", "Rhythm", "Economy"].map((word, index) => (
                        <div key={index} className="h-64 md:h-96 flex items-center justify-center p-12 border-b border-accent/30 last:border-b-0 md:last:border-b md:[&:nth-child(3)]:border-b-0">
                            <span className="font-display text-3xl md:text-4xl italic text-muted">{word}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
                            alt="Amalia Portrait"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <h2 className="font-display text-4xl md:text-5xl italic">Amalia's Story</h2>
                        <div className="space-y-6 text-lg text-muted font-light leading-relaxed">
                            <p>
                                Founded on the principles of timeless elegance and modern functionality, our studio approaches every project as a unique narrative waiting to be told.
                            </p>
                            <p>
                                With a background in fine arts and architectural history, Amalia brings a depth of knowledge and a refined eye to every detail, ensuring that each space is not just beautiful, but deeply personal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition */}
            <section className="py-20 border-t border-accent/20 bg-background">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <p className="text-center font-nav uppercase tracking-widest text-sm text-muted mb-12">Featured In</p>
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
                        {/* Placeholders for logos */}
                        {["House & Garden", "Design et al", "Vogue Living", "Elle Decor"].map((logo, i) => (
                            <span key={i} className="font-display text-xl md:text-2xl italic">{logo}</span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
