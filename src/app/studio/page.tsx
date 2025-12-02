import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Studio() {
    return (
        <SmoothScroll>
            <Header />
            <main className="bg-background min-h-screen pt-32">
                {/* Hero */}
                <section className="px-8 py-32 max-w-screen-xl mx-auto">
                    <h1 className="font-display text-5xl md:text-8xl leading-tight max-w-4xl">
                        Telling stories through exquisite interiors.
                    </h1>
                </section>

                {/* Philosophy Grid */}
                <section className="px-8 py-32 max-w-screen-xl mx-auto">
                    <h2 className="font-display text-3xl mb-12">Principles of Poetry</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-accent">
                        {["Intangible", "Emotion", "Rhythm", "Economy"].map((item) => (
                            <div
                                key={item}
                                className="border-r border-b border-accent p-12 md:p-24 flex items-center justify-center"
                            >
                                <span className="font-display text-3xl md:text-4xl">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bio Section */}
                <section className="px-8 py-32 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2 aspect-[3/4] bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-muted">
                            Founder Image
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="font-display text-4xl mb-8">Amalia Boier</h3>
                        <p className="font-body text-lg leading-relaxed mb-8 text-muted">
                            With a background in fine arts and architecture, Amalia approaches every project as a unique narrative waiting to be told. Her work is defined by a rigorous attention to detail and a deep appreciation for the emotional resonance of space.
                        </p>
                        <button className="border-b border-foreground pb-1 font-nav uppercase tracking-widest text-sm hover:text-muted hover:border-muted transition-colors">
                            Read More
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </SmoothScroll>
    );
}
