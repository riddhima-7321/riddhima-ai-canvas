import { Code, Database, Brain, Settings, BookOpen, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "bg-primary text-primary-foreground",
      skills: ["Python", "C++", "C", "HTML", "CSS", "SQL"]
    },
    {
      title: "Libraries & Frameworks",
      icon: <BookOpen className="h-6 w-6" />,
      color: "bg-secondary text-secondary-foreground",
      skills: ["Scikit-Learn", "PyTorch", "TensorFlow", "OpenCV", "Flask", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      title: "ML/LLMOps Tools",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-accent text-accent-foreground",
      skills: ["LangChain", "Hugging Face", "OpenAI API", "Weights & Biases"]
    },
    {
      title: "Developer Tools",
      icon: <Settings className="h-6 w-6" />,
      color: "bg-primary text-primary-foreground",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"]
    },
    {
      title: "CS Fundamentals",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-secondary text-secondary-foreground",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "Operating Systems", "Database Management Systems"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      color: "bg-accent text-accent-foreground",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for data science, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover fade-in-up h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="text-xs hover:bg-muted transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16 fade-in-up">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Expert</h4>
              <p className="text-sm text-muted-foreground">Python, SQL, Pandas, NumPy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-secondary rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">Machine Learning, Deep Learning, TensorFlow</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-4 h-4 bg-accent rounded-full"></div>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">LLMOps, Cloud Platforms, DevOps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;