"use client";

import { motion } from "framer-motion";
import MenuOverlay from "@/components/Navigation/MenuOverlay";
import Footer from "@/components/Footer";
import JournalCard from "@/components/UI/JournalCard";

export default function JournalPage() {
    const articles = [
        {
            date: "31st October 2024",
            title: "Luxury Home Decor: Enhancing Property Value",
            imageSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
            slug: "luxury-home-decor"
        },
        {
            date: "15th October 2024",
            title: "The Art of Lighting in Modern Interiors",
            imageSrc: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2000&auto=format&fit=crop",
            slug: "art-of-lighting"
        },
        {
            date: "28th September 2024",
            title: "Sustainable Materials in High-End Design",
            imageSrc: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=2000&auto=format&fit=crop",
            slug: "sustainable-materials"
        },
        {
            date: "10th September 2024",
            title: "Creating Timeless Spaces with Textures",
            imageSrc: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop",
            slug: "timeless-textures"
        },
        {
            date: "22nd August 2024",
            title: "Color Psychology in Residential Design",
            imageSrc: "https://images.unsplash.com/photo-1615876234838-52b989a9e639?q=80&w=2000&auto=format&fit=crop",
            slug: "color-psychology"
        },
        {
            date: "5th August 2024",
            title: "Maximizing Small Spaces with Smart Layouts",
            imageSrc: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2000&auto=format&fit=crop",
            slug: "maximizing-small-spaces"
        }
    ];

    return (
        <main className="bg-background min-h-screen">
            <MenuOverlay />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-accent/20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-6xl md:text-8xl italic mb-4"
                >
                    Journal
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg font-nav uppercase tracking-widest text-muted"
                >
                    Interior Design Journal • Inspiration & Insights
                </motion.p>
            </section>

            {/* Article Grid */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {articles.map((article, index) => (
                        <JournalCard key={index} {...article} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
