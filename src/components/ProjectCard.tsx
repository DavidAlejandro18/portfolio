import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    imageURL: string;
}

const ProjectCard = ({
    title,
    type,
    description,
    technologies,
    link,
    github,
    imageURL
}: ProjectCardProps) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors flex flex-col h-full">
            {/* Thumbnail Image */}
            <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                    src={imageURL}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-blue-400 font-medium">{type}</span>
                    <div className="flex gap-2">
                        {link && (
                            <a href={link} target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <ExternalLink size={18} />
                            </a>
                        )}
                        {github && (
                            <a href={github} target='_blank' className="text-gray-400 hover:text-white transition-colors">
                                <Github size={18} />
                            </a>
                        )}
                    </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
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

export default ProjectCard;