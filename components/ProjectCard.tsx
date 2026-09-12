interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group p-6 border-l-4 border-[#f59e0b] bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-[#1c1917] group-hover:text-[#b45309] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-3 py-1 bg-[#fef3c7] text-[#b45309] rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#b45309] font-semibold hover:text-[#f59e0b] transition-colors"
        >
          View Project
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </article>
  );
}