import { GraduationCap, Users, Clock, Mic, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      degree: "B.Tech in AI & ML",
      institution: "AKTU",
      period: "2022-2026",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "12th Grade",
      institution: "CBSE",
      period: "2022",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      degree: "10th Grade", 
      institution: "CBSE",
      period: "2020",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const softSkills = [
    { skill: "Team Leadership", icon: <Users className="h-5 w-5" /> },
    { skill: "Time Management", icon: <Clock className="h-5 w-5" /> },
    { skill: "Public Speaking", icon: <Mic className="h-5 w-5" /> },
    { skill: "Mentorship", icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Data Scientist currently pursuing Engineering with a specialization in AI & ML. 
                A curious mind with an endless thirst for knowledge, I thrive on solving real-world 
                problems through data-driven solutions.
              </p>
              <p>
                I enjoy learning and building impactful projects that address genuine challenges. 
                My journey in data science has been driven by a passion for understanding patterns 
                in data and translating them into meaningful insights that can drive decision-making.
              </p>
              <p>
                When I'm not coding or analyzing data, you'll find me mentoring fellow students, 
                exploring the latest developments in AI/ML, or working on personal projects that 
                push the boundaries of what's possible with technology.
              </p>
            </div>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8 fade-in-up">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-primary card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="text-primary">{edu.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <span className="text-sm font-medium text-primary bg-primary-light px-2 py-1 rounded">
                          {edu.period}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4 text-center">
                      <div className="text-secondary mb-2 flex justify-center">{skill.icon}</div>
                      <p className="text-sm font-medium text-foreground">{skill.skill}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;