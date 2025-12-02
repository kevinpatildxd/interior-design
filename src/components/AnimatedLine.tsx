"use client";
import { motion } from "framer-motion";

export default function AnimatedLine({ className = "" }: { className?: string }) {
    return (
        <motion.hr
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
            className={`border-t border-accent ${className}`}
        />
    );
}
