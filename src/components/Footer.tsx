import Link from "next/link";
import AnimatedLine from "./AnimatedLine";

export default function Footer() {
    return (
        <footer className="pt-32 pb-12 px-8 bg-background text-foreground">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-5xl md:text-7xl font-display mb-12">
                    Tell us about your dream project.
                </h2>
                <Link
                    href="/contact"
                    className="inline-block border border-accent text-foreground px-8 py-4 font-nav uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-300 mb-32"
                >
                    Say Hello
                </Link>

                <div className="w-full">
                    <AnimatedLine className="mb-8 border-accent/30" />
                    <div className="flex flex-col md:flex-row justify-between items-center text-muted text-sm font-nav uppercase tracking-wider">
                        <p>© 2025 Amalia Boier</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/credits">Credits</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
