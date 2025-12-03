"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface JournalCardProps {
    date: string;
    title: string;
    imageSrc: string;
    slug: string;
}

export default function JournalCard({ date, title, imageSrc, slug }: JournalCardProps) {
    return (
        <Link href={`/journal/${slug}`} className="group block">
            <div className="overflow-hidden mb-4 aspect-[4/3] relative bg-gray-100">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
            <div className="space-y-2">
                <span className="text-xs font-nav uppercase tracking-widest text-muted">{date}</span>
                <h3 className="font-display text-2xl group-hover:text-accent transition-colors duration-300">
                    {title}
                </h3>
                <span className="inline-block text-sm font-nav uppercase tracking-wider border-b border-foreground/20 pb-0.5 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                    Read More
                </span>
            </div>
        </Link>
    );
}
