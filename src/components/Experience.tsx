import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Pangea Tech",
      location: "Bangalore",
      period: "July 2025 - Present",
      type: "Current",
      achievements: [
        "Analyzing real-world data to extract meaningful insights",
        "Building robust data pipelines for automated processing",
        "Working on RAG (Retrieval-Augmented Generation) systems",
        "Collaborating with cross-functional teams on AI/ML projects"
      ]
    },
    {
      title: "Data Science Intern",
      company: "EICE Technology Pvt. Ltd.",
      location: "Remote",
      period: "January 2025 - April 2025",
      type: "Previous",
      achievements: [
        "Gained hands-on experience with Python and SQL for data analysis",
        "Created comprehensive data visualizations using various tools",
        "Enhanced collaboration skills working in agile development environment",
        "Developed strong problem-solving abilities through real-world projects"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-surface-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional journey in data science and AI/ML development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover fade-in-up">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={exp.type === 'Current' ? 'default' : 'secondary'}
                    className={exp.type === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                  >
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;