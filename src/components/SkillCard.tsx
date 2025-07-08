import { LucideIcon } from "lucide-react";

interface SkillCardProps {
    Icon: LucideIcon;
    color: string;
    category: string;
    technologies: string[];
}

const SkillCard = ({ Icon, color, category, technologies }: SkillCardProps) => {
    return (
        <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-4">
                <Icon className={`text-${color}-400 mr-3`} size={24} />
                <h3 className="text-xl font-semibold">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {technologies.map((skill) => (
                    <span key={skill} className={`bg-${color}-600/20 text-${color}-300 px-3 py-1 rounded-full text-sm`}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;