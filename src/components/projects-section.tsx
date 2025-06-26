import { ProjectCard, type Project } from './project-card';

const projects: Project[] = [
  {
    name: 'Earthly',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'app educativa para niños',
    stack: ['Java', 'Andoid Studio', 'XML', 'Canvas'],
    description: 'Un entorno interactivo que visualiza el AST y ejecuta análisis léxico/sintáctico para uso educativo.',
    contributions: 'Interactive Android application that teaches flags, biomes, cardinal points, and continents. Includes a compass and custom components.',
    repoUrl: 'https://github.com/fabianreyesmn/earthly',
    demoUrl: '#',
  },
  {
    name: 'Cook & Rate',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'red social culinaria',
    stack: ['Node.js', 'Express', 'Android', 'MySQL', 'HBase', 'Elasticsearch', 'Kibana', 'Docker'],
    description: 'Culinary social network for sharing and rating recipes with distributed storage.',
    contributions: 'Architecture, backend development, mobile client development, synchronization management, and data analysis/visualization.',
    repoUrl: 'https://github.com/fabianreyesmn/cookandrate',
    demoUrl: '#',
  },
  {
    name: 'Amor Incondicional',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'app para agendar citas veterinarias',
    stack: ['Android', 'Java', 'Canvas', 'JSON'],
    description: 'Web platform for scheduling veterinary appointments, featuring a Node.js backend and Firebase database.',
    contributions: 'Backend development in Node.js, frontend development in Angular, and database in Firebase.',
    repoUrl: 'https://github.com/fabianreyesmn/Amor-Inc-Back',
    demoUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
