import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "MultiAgent AI Document Processor",
      description: "An intelligent document processing system using multi-agent architecture to classify and process various document types with high accuracy.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      technologies: ["Python", "GPT-3.5", "JSON", "Multi-Agent Systems"],
      achievements: [
        "95%+ classification accuracy",
        "2 second processing time",
        "Handles multiple document formats"
      ],
      links: {
        demo: "#",
        github: "#",
        video: "#"
      },
      featured: true
    },
    {
      title: "Sentiment Analysis Model",
      description: "Advanced sentiment analysis using DistilBERT transformer model, deployed on Hugging Face Spaces with an interactive Gradio interface.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      technologies: ["DistilBERT", "Hugging Face", "Gradio", "PyTorch"],
      achievements: [
        "88% F1 Score on TweetEval Dataset",
        "Real-time sentiment prediction",
        "Interactive web interface"
      ],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true
    },
    {
      title: "RAG-based Q&A System",
      description: "Retrieval-Augmented Generation system for document-based question answering with context-aware responses and source attribution.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      technologies: ["LangChain", "OpenAI API", "ChromaDB", "Streamlit"],
      achievements: [
        "Context-aware responses",
        "Source attribution",
        "Scalable vector database"
      ],
      links: {
        demo: "#",
        github: "#"
      },
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for business intelligence with real-time data updates and comprehensive analytics capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Plotly", "Dash", "Pandas"],
      achievements: [
        "Real-time data updates",
        "Interactive visualizations",
        "Business intelligence insights"
      ],
      links: {
        demo: "#",
        github: "#"
      },
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative AI/ML projects that solve real-world problems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 fade-in-up">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="card-hover fade-in-up overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    {project.links.demo && (
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.links.video && (
                      <Button variant="outline" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 fade-in-up">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="card-hover fade-in-up">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      {project.links.demo && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="ghost" size="sm" className="p-2">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {project.achievements.slice(0, 2).map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
