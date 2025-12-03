"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            className={`flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-20 items-center mb-24 md:mb-40`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Image Section */}
            <Link
                href={`/projects/${project.slug}`}
                className="w-full md:w-3/5 block overflow-hidden group relative"
            >
                <motion.div style={{ y }} className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
            </Link>

            {/* Text Section */}
            <div className={`w-full md:w-2/5 flex flex-col ${isEven ? "md:items-start text-left" : "md:items-end text-right"}`}>
                <Link href={`/projects/${project.slug}`} className="group">
                    <h2 className="text-3xl md:text-5xl font-display mb-4 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                    </h2>
                    <span className="text-lg uppercase tracking-widest border-b border-foreground/30 pb-1 group-hover:border-accent group-hover:text-accent transition-all duration-300 inline-block">
                        View Project
                    </span>
                </Link>
            </div>
        </motion.div>
    );
};

import MenuOverlay from "@/components/Navigation/MenuOverlay";

export default function ProjectsPage() {
    const activeProjects = projects.filter((p) => !p.isComingSoon);
    const comingSoonProjects = projects.filter((p) => p.isComingSoon);

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-12 lg:px-24">
            <MenuOverlay />
            {/* Hero Section */}
            <section className="mb-32 text-center max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display mb-8"
                >
                    Exquisite London interiors realised
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted font-light max-w-2xl mx-auto"
                >
                    Showcasing exceptional interior design projects across London... from
                    period townhouses to contemporary residences.
                </motion.p>
            </section>

            {/* Projects List */}
            <section className="max-w-7xl mx-auto">
                {activeProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </section>

            {/* Coming Soon Section */}
            {comingSoonProjects.length > 0 && (
                <section className="mt-40 border-t border-foreground/10 pt-20">
                    <h3 className="text-2xl font-display mb-12 text-center text-muted">Coming Soon</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {comingSoonProjects.map((project) => (
                            <div key={project.id} className="text-center group cursor-default">
                                <h4 className="text-3xl md:text-4xl font-display text-muted group-hover:text-foreground transition-colors duration-500">
                                    {project.title}
                                </h4>
                                <p className="mt-2 text-sm text-muted/60 uppercase tracking-widest">
                                    {project.location}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
