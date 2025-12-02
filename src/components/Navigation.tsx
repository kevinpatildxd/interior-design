"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "Expertise", href: "/expertise" },
    { name: "Studio", href: "/studio" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
];

export default function Navigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
                >
                    <button onClick={onClose} className="absolute top-8 right-8 p-2">
                        <X className="w-8 h-8 text-foreground" />
                    </button>
                    <nav className="flex flex-col items-center gap-8">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-4xl md:text-6xl font-display text-foreground hover:text-muted transition-colors"
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
