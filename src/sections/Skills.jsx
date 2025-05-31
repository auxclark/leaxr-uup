import React from 'react';
import { Code, Palette, Smartphone, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Skills = () => {
  const skills = [
    { name: 'React', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'HTML/CSS', level: 95, icon: Palette },
    { name: 'Node.js', level: 80, icon: Server },
    { name: 'UI/UX Design', level: 75, icon: Smartphone },
    { name: 'Git', level: 85, icon: Code }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <Separator className="w-20 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <Icon className="text-primary mr-3" size={20} />
                    {skill.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;