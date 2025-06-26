'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export type Project = {
  name: string;
  screenshotUrl?: string | StaticImageData;
  screenshotUrls?: string[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.screenshotUrls && project.screenshotUrls.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.screenshotUrls!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (project.screenshotUrls && project.screenshotUrls.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.screenshotUrls!.length - 1 : prevIndex - 1
      );
    }
  };

  const hasCarousel = project.screenshotUrls && project.screenshotUrls.length > 0;

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-card text-card-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {hasCarousel ? (
          <div className="relative aspect-video overflow-hidden rounded-md border flex justify-center items-center">
            <Image
              src={project.screenshotUrls && project.screenshotUrls.length > 0 ? project.screenshotUrls[0] : ''}
              alt="Blurred background"
              width={600}
              height={400}
              className="absolute inset-0 w-full h-full object-cover filter blur-lg transform scale-110 z-0"
            />

            <Image
              src={project.screenshotUrls![currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1} of ${project.name}`}
              width={600}
              height={400}
              className="relative z-10 object-contain w-auto h-full"
              data-ai-hint={project.imageHint}
            />            
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onClick={prevImage}
            >
              {"<"} {/* Replace with an actual arrow icon if desired */}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
              onClick={nextImage}
            >
              {">"} {/* Replace with an actual arrow icon if desired */}
            </Button>
          </div>
        ) : (
          <div className="aspect-video overflow-hidden rounded-md border">
            {project.screenshotUrl && (
            <Image
              src={project.screenshotUrl}
              alt={`Screenshot of ${project.name}`}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              data-ai-hint={project.imageHint}
            />
            )}
          </div>
        )}
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
