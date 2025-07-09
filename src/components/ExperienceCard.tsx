import { Calendar, MapPin } from "lucide-react";

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
}

const ExperienceCard = ({ title, company, period, location, description, technologies }: ExperienceCardProps) => {
    return (
        <div className="relative pl-8 pb-12 last:pb-0">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="absolute left-2 top-4 w-0.5 bg-gray-600 h-full"></div>
            <div className="bg-gray-800 rounded-lg p-6 ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
                        <p className="text-gray-300 font-medium">{company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-2 md:mt-0">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {period}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <MapPin size={16} />
                            {location}
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;