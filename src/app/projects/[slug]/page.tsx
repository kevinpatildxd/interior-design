"use client";

import { projects } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const projectIndex = projects.findIndex((p) => p.slug === slug);
    const project = projects[projectIndex];

    if (!project) {
        notFound();
    }

    const nextProjectIndex = (projectIndex + 1) % projects.filter(p => !p.isComingSoon).length;
    const nextProject = projects.filter(p => !p.isComingSoon)[nextProjectIndex];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <main className="bg-background min-h-screen" ref={containerRef}>
            {/* Header */}
            <header className="pt-32 pb-12 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display mb-6"
                >
                    {project.title}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center gap-8 text-muted uppercase tracking-widest text-sm"
                >
                    <span>{project.location}</span>
                    <span>|</span>
                    <span>{project.size}</span>
                </motion.div>
            </header>

            {/* Hero Image */}
            <motion.div
                className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mb-24"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div style={{ y: heroY }} className="relative w-full h-[120%] -top-[10%]">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* Concept Block */}
            <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-32">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-4xl font-display mb-4">Concept</h2>
                            <div className="h-1 w-12 bg-accent" />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-muted/90">
                            {project.concept}
                        </p>
                        <div className="mt-12 text-lg text-muted leading-relaxed">
                            {project.description}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    {project.gallery.map((image, index) => {
                        // Logic for alternating layout: 
                        // Pattern: Full (2 cols), Half (1 col), Half (1 col), Full (2 cols)...
                        // 0 -> Full
                        // 1, 2 -> Half
                        // 3 -> Full
                        // 4, 5 -> Half

                        // Simple check: if index % 3 === 0, it's full width.
                        const isFullWidth = index % 3 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative ${isFullWidth ? "md:col-span-2 aspect-[16/9]" : "md:col-span-1 aspect-[3/4]"} overflow-hidden`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Image
                                    src={image}
                                    alt={`Detail ${index + 1}`}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Next Project */}
            <section className="bg-foreground text-background py-32 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-muted/60 uppercase tracking-widest mb-8">Next Project</p>
                    <Link
                        href={`/projects/${nextProject.slug}`}
                        className="group inline-flex flex-col items-center"
                    >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display mb-8 group-hover:text-accent transition-colors duration-300">
                            {nextProject.title}
                        </h2>
                        <div className="flex items-center gap-4 text-xl uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-300">
                            <span>View Case Study</span>
                            <ArrowRight className="w-6 h-6" />
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
