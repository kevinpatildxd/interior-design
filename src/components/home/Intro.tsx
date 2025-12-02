"use client";
import { motion } from "framer-motion";

export default function Intro() {
    return (
        <section className="py-32 px-8 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-2xl text-center"
            >
                <p className="font-display text-3xl md:text-4xl leading-relaxed text-foreground">
                    Timeless couture interior creations that embody silence, space, and sophistication.
                </p>
            </motion.div>
        </section>
    );
}
