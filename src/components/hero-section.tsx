import { Button } from '@/components/ui/button';
import { Download, MoveRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)] pointer-events-none"></div>
      <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Fabián Reyes
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Desarrollador Android y Backend con pasión por la tecnología educativa, el software libre y los proyectos con impacto real. Bienvenido a mi portafolio.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#projects">
            <Button size="lg">
              View My Work
              <MoveRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="/fabian-reyes-cv.pdf" download>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
