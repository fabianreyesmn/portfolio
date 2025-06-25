import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export type Project = {
  name: string;
  screenshotUrl: string;
  imageHint: string;
  stack: string[];
  description: string;
  contributions: string;
  repoUrl: string;
  demoUrl: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card text-card-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="aspect-video overflow-hidden rounded-md border">
          <Image
            src={project.screenshotUrl}
            alt={`Screenshot of ${project.name}`}
            width={600}
            height={400}
            className="h-full w-full object-cover"
            data-ai-hint={project.imageHint}
          />
        </div>
        <div>
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">My Contributions:</h4>
          <p className="text-sm text-muted-foreground">{project.contributions}</p>
        </div>
      </CardContent>
      <CardFooter className="flex-shrink-0">
        <div className="flex w-full items-center justify-end space-x-4">
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="mr-2" />
              Repository
            </Button>
          </a>
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              <ExternalLink className="mr-2" />
              Live Demo
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
