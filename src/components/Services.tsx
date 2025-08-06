import { BarChart3, Brain, Bot, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "Data Analysis & Visualization",
      description: "Transform raw data into meaningful insights with interactive dashboards and comprehensive reports that drive business decisions.",
      icon: <BarChart3 className="h-8 w-8" />,
      color: "bg-primary/10 text-primary",
      features: ["Statistical Analysis", "Interactive Dashboards", "Business Intelligence", "Data Storytelling"]
    },
    {
      title: "Machine Learning & Deep Learning",
      description: "Build and deploy custom ML models tailored to your specific needs, from predictive analytics to computer vision solutions.",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-secondary/10 text-secondary",
      features: ["Predictive Modeling", "Computer Vision", "Natural Language Processing", "Model Deployment"]
    },
    {
      title: "LLM-based Applications",
      description: "Develop intelligent applications using Large Language Models, including chatbots, RAG systems, and AI agents.",
      icon: <Bot className="h-8 w-8" />,
      color: "bg-accent/10 text-accent",
      features: ["RAG Systems", "AI Chatbots", "Document Processing", "Intelligent Agents"]
    },
    {
      title: "AI/ML Consulting",
      description: "Strategic guidance for startups and businesses looking to integrate AI/ML solutions into their operations.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-primary/10 text-primary",
      features: ["Strategy Development", "Technology Assessment", "Implementation Planning", "ROI Analysis"]
    },
    {
      title: "Student Mentorship",
      description: "Personalized guidance for students entering the field of Data Science and AI/ML, from career planning to skill development.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-secondary/10 text-secondary",
      features: ["Career Guidance", "Project Reviews", "Interview Preparation", "Skill Development"]
    },
    {
      title: "Performance Optimization",
      description: "Optimize existing ML models and data pipelines for better performance, scalability, and cost-effectiveness.",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "bg-accent/10 text-accent",
      features: ["Model Optimization", "Pipeline Enhancement", "Cost Reduction", "Scalability Improvements"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-surface-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive data science and AI/ML solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover fade-in-up h-full group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-surface p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you leverage data science and AI to achieve your goals.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;