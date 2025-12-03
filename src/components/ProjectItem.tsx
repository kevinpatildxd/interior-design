"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedLine from "./AnimatedLine";

interface Project {
    id: number;
    title: string;
    image: string;
    location: string;
}

export default function ProjectItem({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`flex w-full mb-32 ${isEven ? "justify-start" : "justify-end"}`}
        >
            <Link href={`/projects/${project.id}`} className="block w-full md:w-[70%] group">
                <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-gray-100">
                    <motion.div style={{ y }} className="w-full h-[120%] relative -top-[10%]">
                        <div className="w-full h-full relative">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="pb-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-3xl font-display">{project.title}</h3>
                        <span className="font-nav text-sm text-muted uppercase tracking-widest">{project.location}</span>
                    </div>
                    <AnimatedLine className="mt-4 border-accent/30" />
                </div>
            </Link>
        </div>
    );
}
