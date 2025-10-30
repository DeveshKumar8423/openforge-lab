import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Users, GitBranch, BookOpen, Award, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import researchVisual from "@/assets/research-visual.jpg";

const Index = () => {
  const featuredProjects = [
    {
      title: "AI-Counselor Assistant",
      description: "An AI-powered counseling assistant using NLP to provide mental health support and guidance",
      tags: ["Python", "NLP", "TensorFlow", "Psychology"],
      githubUrl: "https://github.com/opencollab-research/ai-counselor",
      stars: 45,
      forks: 12,
      language: "Python",
    },
    {
      title: "ML Model Hub",
      description: "Centralized repository of pre-trained machine learning models for various domains",
      tags: ["PyTorch", "Scikit-learn", "Docker"],
      githubUrl: "https://github.com/opencollab-research/ml-model-hub",
      stars: 78,
      forks: 23,
      language: "Python",
    },
    {
      title: "DataViz Explorer",
      description: "Interactive data visualization toolkit for exploring complex datasets",
      tags: ["D3.js", "React", "TypeScript"],
      githubUrl: "https://github.com/opencollab-research/dataviz-explorer",
      stars: 34,
      forks: 8,
      language: "TypeScript",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeIn">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-primary text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Open Collaboration for Research
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
              Building the Future of{" "}
              <span className="gradient-text">AI & Research</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              OpenCollab is a collaborative research lab where researchers, developers, and students 
              unite to advance AI, ML, and interdisciplinary research through open-source innovation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group"
              >
                <Link to="/join" className="flex items-center gap-2">
                  Join the Collaboration
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/20 hover:bg-primary/10"
              >
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={GitBranch} value="15+" label="Active Projects" delay={0} />
            <StatCard icon={Users} value="30+" label="Contributors" delay={100} />
            <StatCard icon={BookOpen} value="8+" label="Publications" delay={200} />
            <StatCard icon={Award} value="5+" label="Awards" delay={300} />
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slideIn">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Our Research <span className="gradient-text">Focus</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We explore cutting-edge research areas that push the boundaries of technology 
                and human understanding
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Natural Language Processing",
                  "Data Science",
                  "Psychology & Counseling",
                  "Interdisciplinary Innovation",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-card border border-border hover-glow group"
                  >
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative animate-float">
              <img
                src={researchVisual}
                alt="Research visualization"
                className="rounded-2xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most impactful open-source research projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/20 hover:bg-primary/10"
            >
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border animate-glow">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Make an <span className="gradient-text">Impact?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community of passionate researchers and developers. 
              Collaborate on GitHub, discuss on Discord, and help shape the future of research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                <Link to="/join">Apply to Join</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/20 hover:bg-primary/10"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
