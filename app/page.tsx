import ProjectList from '@/components/ProjectList';

const projects = [
{
  title: 'Football Team Management API',
  description: 'A CSE 341 final project — a full REST API for managing football teams, players, and match data with authentication and CRUD operations.',
  technologies: ['Node.js', 'Express', 'JavaScript', 'REST API', 'MongoDB'],
  link: 'https://github.com/Chembeassan/football-management-system',
},
{
  title: 'Chamber of Commerce Website',
  description: 'A responsive website built with HTML, CSS, and JavaScript focusing on usability, accessibility, and responsive design best practices.',
  technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  link: 'https://github.com/Chembeassan/wdd230',
},
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are
          some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}