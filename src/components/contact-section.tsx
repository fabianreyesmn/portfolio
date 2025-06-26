import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card text-card-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Contact
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          If you have a project, an idea, or you're looking for someone committed to functional and creative solutions, feel free to reach out.
        </p>
        <a href="mailto:fabian.reyes@email.com">
          <Button size="lg" className="mb-8">
            <Mail className="mr-2 h-5 w-5" />
            fabianreyesmn@gmail.com
          </Button>
        </a>
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://github.com/fabianreyesmn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabianreyesmn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
