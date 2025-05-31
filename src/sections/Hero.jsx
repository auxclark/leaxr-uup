import React from 'react';
import { ChevronDown, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="flex justify-center items-center gap-2 text-muted-foreground mb-8">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" asChild>
              <a href="#" className="hover:scale-110 transition-transform">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" className="hover:scale-110 transition-transform">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" className="hover:scale-110 transition-transform">
                <Mail size={20} />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2" size={16} />
              Download CV
            </Button>
          </div>

          <div className="mt-16">
            <ChevronDown className="mx-auto animate-bounce text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;