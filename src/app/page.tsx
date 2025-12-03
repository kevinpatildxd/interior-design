import Header from "@/components/Header";
import MenuOverlay from "@/components/Navigation/MenuOverlay";
import Footer from "@/components/Footer";
import ProjectItem from "@/components/ProjectItem";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";

// Mock Data
const projects = [
  { id: 1, title: "Bryanston Square Pied-à-Terre", location: "London", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "Notting Hill Residence", location: "London", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "Kensington Townhouse", location: "London", image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2000&auto=format&fit=crop" },
];

export default function Home() {
  return (
    <>
      <MenuOverlay />
      <main className="bg-background min-h-screen">
        <Hero />
        <Intro />
        <section className="px-8 py-32 max-w-screen-xl mx-auto">
          {projects.map((p, i) => (
            <ProjectItem key={p.id} project={p} index={i} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
