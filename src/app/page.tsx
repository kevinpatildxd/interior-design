import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ProjectItem from "@/components/ProjectItem";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";

// Mock Data
const projects = [
  { id: 1, title: "Bryanston Square Pied-à-Terre", location: "London", image: "" },
  { id: 2, title: "Notting Hill Residence", location: "London", image: "" },
  { id: 3, title: "Kensington Townhouse", location: "London", image: "" },
];

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
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
    </SmoothScroll>
  );
}
