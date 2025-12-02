"use client";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
        }
    },
};

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="font-display text-6xl md:text-9xl leading-[1.1]"
            >
                <motion.div variants={item}>Poetry</motion.div>
                <motion.div variants={item}>in</motion.div>
                <motion.div variants={item}>Design</motion.div>
            </motion.div>
        </section>
    );
}
