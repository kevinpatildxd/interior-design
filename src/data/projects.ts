export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    size: string;
    description: string;
    concept: string;
    mainImage: string;
    gallery: string[];
    isComingSoon?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "bryanston-square-pied-a-terre",
        title: "Bryanston Square Pied-à-Terre",
        location: "London, W1",
        size: "1,850 sq ft",
        description: "A masterful restoration of a Grade II listed apartment, blending period grandeur with contemporary comfort.",
        concept: "The design concept revolves around preserving the historical integrity of the space while introducing modern elements that enhance livability. We focused on a neutral palette with rich textures to create a sense of timeless elegance.",
        mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        ],
    },
    {
        id: "2",
        slug: "notting-hill-pied-a-terre",
        title: "Notting Hill Pied-à-Terre",
        location: "London, W11",
        size: "1,442 sq ft",
        description: "An eclectic and vibrant home in the heart of Notting Hill, designed for a young creative couple.",
        concept: "Inspired by the bohemian spirit of the neighborhood, this project embraces bold colors and patterns. We mixed vintage finds with bespoke joinery to create a space that feels both curated and lived-in.",
        mainImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000&auto=format&fit=crop",
        ],
    },
    {
        id: "3",
        slug: "marylebone-residence",
        title: "Marylebone Residence",
        location: "London, W1",
        size: "2,200 sq ft",
        description: "A sophisticated dining space designed for entertaining, featuring bespoke joinery and statement lighting.",
        concept: "We aimed to create a serene yet impressive atmosphere using a palette of soft greys and natural stone. The focus is on clean lines and high-quality materials that speak for themselves.",
        mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618221639263-d656d6457343?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        ],
    },
    {
        id: "4",
        slug: "chelsea-townhouse",
        title: "Chelsea Townhouse",
        location: "London, SW3",
        size: "3,500 sq ft",
        description: "A grand master suite that serves as a private sanctuary, overlooking the garden square.",
        concept: "The design draws inspiration from the building's Victorian heritage, reinterpreted for modern luxury. Plush velvets, dark woods, and brass accents create a warm and inviting retreat.",
        mainImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2000&auto=format&fit=crop",
        ],
    },
];
