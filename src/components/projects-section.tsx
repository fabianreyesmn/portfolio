import { ProjectCard, type Project } from './project-card';

const projects: Project[] = [
  {
    name: 'Earthly',
    screenshotUrls: ['/images/earthly1.jpg', '/images/earthly2.jpg', '/images/earthly3.jpg', '/images/earthly4.jpg'],
    imageHint: 'app educativa para niños',
    stack: ['Kotlin', 'SQLite', 'Andoid Studio', 'XML', 'Canvas'],
    description: 'Interactive Android app teaching geography and biomes to children. Includes a compass and custom components.',
    contributions: 'Development of multitouch gestures, sensor integration, custom-designed visual components, user experience and functionality.',
    repoUrl: 'https://github.com/fabianreyesmn/earthly',
    demoUrl: '#',
  },
  {
    name: 'Cook & Rate',
    screenshotUrls: ['/images/cnr1.jpg', '/images/cnr2.jpg', '/images/cnr3.jpg', '/images/cnr4.jpg'],
    imageHint: 'red social culinaria',
    stack: ['Node.js', 'Express', 'Android', 'MySQL', 'HBase', 'Elasticsearch', 'Kibana', 'Docker'],
    description: 'Culinary social network for sharing and rating recipes with distributed storage.',
    contributions: 'Architecture, backend development, mobile client development, synchronization management, and data analysis/visualization.',
    repoUrl: 'https://github.com/fabianreyesmn/cookandrate',
    demoUrl: '#',
  },
  {
    name: 'Amor Incondicional',
    screenshotUrls: ['/images/amorinc1.jpg', '/images/amorinc2.jpg', '/images/amorinc3.jpg', '/images/amorinc4.jpg'],
    imageHint: 'app para adoptar',
    stack: ['Node.js', 'Express', 'PWA', 'Angular', 'Firebase Realtime Database'],
    description: 'Web platform for scheduling pet adoption appointments, featuring a Node.js backend and Firebase database.',
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
