"use client";

import { motion } from "framer-motion";

interface ProcessStepProps {
    number: string;
    title: string;
    description?: string;
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            className="flex gap-8 items-start py-8 border-b border-accent/20 last:border-0"
        >
            <span className="font-display text-3xl italic text-accent">{number}</span>
            <div>
                <h3 className="font-nav text-lg uppercase tracking-wider mb-2">{title}</h3>
                {description && <p className="text-muted font-display text-xl">{description}</p>}
            </div>
        </motion.div>
    );
}
