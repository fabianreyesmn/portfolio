import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          About me
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">Background and Focus</h3>
            <p className="text-lg leading-relaxed">
              I'm a Computer Systems Engineering student with experience in developing Android mobile applications, backend systems using Node.js, and educational projects with a social focus.
            </p>
            <p className="text-lg leading-relaxed">
              I'm deeply inspired by creative writing, natural landscapes, and stories that convey universal values. I see technology as a bridge between knowledge and people— a tool that should be functional, accessible, and beautiful. For me, programming is a way to create purposeful art.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">Inspiration and Values</h3>
            <p className="text-lg leading-relaxed">
              My projects reflect a deep interest in creating tools that not only work but also communicate something meaningful. I've worked on educational apps, visual compilers, and social platforms with the firm intention of building meaningful technology.
            </p>
            <p className="text-lg leading-relaxed">
              I also value continuous learning, which is why I'm always exploring new tools, participating in social initiatives, and contributing to collaborative environments. The discipline of code, combined with a sensitive understanding of context, is my professional compass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
