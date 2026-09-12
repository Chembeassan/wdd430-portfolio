import SkillCard from '@/components/SkillCard';

const skills = [
  {
    skill: 'JavaScript',
    level: 'Intermediate',
    description: 'Building interactive web applications.',
  },
  {
    skill: 'React',
    level: 'Intermediate',
    description: 'Creating reusable UI components.',
  },
  {
    skill: 'Next.js',
    level: 'Beginner',
    description: 'Building full-stack applications.',
  },
  {
    skill: 'TypeScript',
    level: 'Beginner',
    description: 'Writing type-safe code.',
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        This about page shares more information about my background and work.
      </p>
      <h3 className="text-2xl font-bold mb-4">My Skills</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <SkillCard key={s.skill} {...s} />
        ))}
      </div>
    </main>
  );
}