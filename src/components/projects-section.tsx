import { ProjectCard, type Project } from './project-card';

const projects: Project[] = [
  {
    name: 'E-commerce Platform',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    description: 'A full-featured e-commerce site with product management and a secure checkout process.',
    contributions: 'Led the front-end development, designed the UI/UX, and integrated the payment gateway.',
    repoUrl: '#',
    demoUrl: '#',
  },
  {
    name: 'Task Management App',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'to-do list',
    stack: ['React', 'Firebase', 'Material-UI', 'Redux'],
    description: 'A collaborative task management tool for teams with real-time updates.',
    contributions: 'Developed the real-time database synchronization with Firebase and built the core task components.',
    repoUrl: '#',
    demoUrl: '#',
  },
  {
    name: 'Portfolio Website Builder',
    screenshotUrl: 'https://placehold.co/600x400.png',
    imageHint: 'website builder',
    stack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    description: 'A drag-and-drop interface for creating personal portfolio websites without code.',
    contributions: 'Built the backend REST API for user data management and designed the component system for the builder.',
    repoUrl: '#',
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
