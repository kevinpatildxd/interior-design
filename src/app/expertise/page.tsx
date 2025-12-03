"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/UI/ServiceCard";
import ProcessStep from "@/components/UI/ProcessStep";
import MenuOverlay from "@/components/Navigation/MenuOverlay";
import Footer from "@/components/Footer";

export default function ExpertisePage() {
    const services = [
        {
            title: "Creative Advisory",
            description: "Interior design advice, concept creation, and spatial planning for those seeking guidance on their personal projects."
        },
        {
            title: "Interior Design",
            description: "Transform spaces with a holistic approach, balancing aesthetics and functionality to create bespoke environments."
        },
        {
            title: "Interior Architecture",
            description: "Space planning, lighting design, and architectural detailing to enhance the structural beauty of your property."
        },
        {
            title: "FF&E Design",
            description: "Furnishings, Fixtures and Equipment selection, ensuring every piece complements the overall design narrative."
        },
        {
            title: "Procurement",
            description: "Purchasing and delivery management, handling logistics to ensure a seamless installation process."
        },
        {
            title: "Turnkey Styling",
            description: "Final phase styling, curating accessories and art to add the finishing touches that make a house a home."
        }
    ];

    const processSteps = [
        { title: "Initial Brief", description: "Understanding your vision, needs, and lifestyle." },
        { title: "Concept Design", description: "Developing the look and feel through mood boards and layouts." },
        { title: "Design Development", description: "Refining details, selecting materials, and finalizing plans." },
        { title: "Procurement", description: "Sourcing and ordering all specified items." },
        { title: "Installation", description: "Coordinating the delivery and setup of all elements." },
        { title: "Handover & Styling", description: "The final reveal, styled to perfection." }
    ];

    return (
        <main className="bg-background min-h-screen">
            <MenuOverlay />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-display text-5xl md:text-7xl italic mb-6"
                >
                    Our services and design process
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-muted max-w-2xl font-light"
                >
                    As a London-based full-service design studio, we guide you through every step of creating your dream space.
                </motion.p>
            </section>

            {/* Areas of Expertise */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {["Residential", "Developments", "Hospitality"].map((area, index) => (
                        <div key={index} className="aspect-[4/5] bg-gray-100 flex items-center justify-center p-8 border border-accent/10">
                            <h3 className="font-display text-3xl italic text-center">{area}</h3>
                        </div>
                    ))}
                </div>

                {/* Detailed Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                {/* The Process */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="font-display text-4xl italic sticky top-32">The Process</h2>
                    </div>
                    <div className="md:col-span-8">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                show: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {processSteps.map((step, index) => (
                                <ProcessStep
                                    key={index}
                                    number={`0${index + 1}`}
                                    title={step.title}
                                    description={step.description}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
