import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">My Story</h3>
            <p className="text-lg leading-relaxed">
              From a young age, I was fascinated by how things work, which naturally led me to the world of technology. I started with simple scripts and have since grown into a passionate developer who loves building robust and user-friendly applications. My journey is one of continuous learning and a drive to solve complex problems with elegant code.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond the screen, I find inspiration in the ancient tales of Norse mythology. The intricate stories of gods, giants, and heroes fuel my creativity and remind me that even the most daunting challenges can be overcome with strategy and perseverance.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">Philosophy & Interests</h3>
            <p className="text-lg leading-relaxed">
              I believe that the best technology is that which feels invisible to the user—intuitive, efficient, and reliable. My work philosophy is centered on clean code, thoughtful architecture, and a user-first approach. I thrive in collaborative environments where ideas can be shared and refined.
            </p>
            <p className="text-lg leading-relaxed">
              My love for tech extends to exploring new frameworks, contributing to open-source projects, and staying updated on the latest industry trends. When I'm not coding, you might find me lost in a fantasy novel, hiking a new trail, or planning my next big project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
