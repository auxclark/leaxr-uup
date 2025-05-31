import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <Separator className="w-20 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
              alt="Working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full-stack developer with 5+ years of experience creating 
              digital experiences that make people's lives easier. I specialize in React, 
              Node.js, and modern web technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing my knowledge through blog posts and mentoring.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground">Projects</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="text-center p-4">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-muted-foreground">Years Exp</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;