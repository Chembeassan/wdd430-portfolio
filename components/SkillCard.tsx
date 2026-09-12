interface SkillCardProps {
  skill: string;
  level: string;
  description: string;
}

export default function SkillCard({ skill, level, description }: SkillCardProps) {
  return (
    <div className="p-5 border border-[#fde68a] rounded-lg bg-white shadow-sm hover:shadow-md hover:border-[#f59e0b] transition-all duration-300">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-[#1c1917]">{skill}</h3>
        <span className="text-xs font-semibold px-3 py-1 bg-[#f59e0b] text-white rounded-full">
          {level}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}