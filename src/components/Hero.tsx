import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const profileImageUrl = '/lovable-uploads/5561d1e6-83d8-4c51-ad86-1d512e86bf49.png';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hi, I'm <span className="text-gradient">Riddhima</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Data Scientist | AI/ML Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Turning Data into Actionable Insights. I thrive on solving real-world problems 
              through data-driven solutions and building impactful AI/ML projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl floating-animation bg-white">
              <img 
                src={profileImageUrl} 
                alt="Riddhima Singhal" 
                className="w-full h-full object-contain object-center"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-foreground/60" />
      </div>
    </section>
  );
};

export default Hero;