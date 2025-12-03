interface ServiceCardProps {
    title: string;
    description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
    return (
        <div className="p-8 border border-accent/20 hover:border-accent transition-colors duration-300 bg-white/50">
            <h3 className="font-display text-2xl italic mb-4">{title}</h3>
            <p className="text-muted leading-relaxed">{description}</p>
        </div>
    );
}
