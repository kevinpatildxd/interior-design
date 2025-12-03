import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background text-foreground py-20 px-6 md:px-12 border-t border-accent/20">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                <h2 className="font-display text-4xl md:text-6xl italic">
                    Tell us about your dream project
                </h2>

                <Link
                    href="/contact"
                    className="inline-block px-8 py-3 border border-foreground text-lg font-nav uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                    Say Hello
                </Link>

                <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm font-nav text-muted mt-12 pt-12 border-t border-accent/10">
                    <p>&copy; Amalia Boier 2025</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Site Credits</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
