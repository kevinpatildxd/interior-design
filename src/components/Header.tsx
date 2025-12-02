"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none">
                <div className="pointer-events-auto">
                    <Link href="/" className="font-nav uppercase tracking-widest text-sm md:text-base font-bold">
                        Amalia Boier
                    </Link>
                </div>
                <div className="pointer-events-auto">
                    <button
                        onClick={() => setIsNavOpen(true)}
                        className="font-nav uppercase tracking-widest text-sm md:text-base font-bold hover:opacity-70 transition-opacity"
                    >
                        Menu
                    </button>
                </div>
            </header>
            <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        </>
    );
}
