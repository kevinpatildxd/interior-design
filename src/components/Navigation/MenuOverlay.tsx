"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Expertise", href: "/expertise" },
    { name: "Studio", href: "/studio" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-2 text-foreground mix-blend-difference hover:opacity-70 transition-opacity"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background"
          >
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-center"
            >
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="font-display text-5xl md:text-7xl italic hover:text-accent transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
