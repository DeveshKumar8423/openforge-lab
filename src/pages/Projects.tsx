import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "AI", "ML", "NLP", "Data Science", "Psychology", "Web Dev"];

  const projects = [
    {
      title: "AI-Counselor Assistant",
      description: "An AI-powered counseling assistant using NLP to provide mental health support and personalized guidance to users through empathetic conversations",
      tags: ["Python", "NLP", "TensorFlow", "Psychology"],
      githubUrl: "https://github.com/opencollab-research/ai-counselor",
      stars: 45,
      forks: 12,
      language: "Python",
      category: "Psychology",
    },
    {
      title: "ML Model Hub",
      description: "Centralized repository of pre-trained machine learning models for various domains including computer vision, NLP, and time series analysis",
      tags: ["PyTorch", "Scikit-learn", "Docker", "API"],
      githubUrl: "https://github.com/opencollab-research/ml-model-hub",
      stars: 78,
      forks: 23,
      language: "Python",
      category: "ML",
    },
    {
      title: "DataViz Explorer",
      description: "Interactive data visualization toolkit for exploring complex datasets with advanced charting and real-time analytics capabilities",
      tags: ["D3.js", "React", "TypeScript", "WebGL"],
      githubUrl: "https://github.com/opencollab-research/dataviz-explorer",
      stars: 34,
      forks: 8,
      language: "TypeScript",
      category: "Data Science",
    },
    {
      title: "Sentiment Analysis API",
      description: "RESTful API for performing sentiment analysis on text data using state-of-the-art transformer models with multilingual support",
      tags: ["FastAPI", "BERT", "Python", "Docker"],
      githubUrl: "https://github.com/opencollab-research/sentiment-api",
      stars: 56,
      forks: 15,
      language: "Python",
      category: "NLP",
    },
    {
      title: "Neural Network Playground",
      description: "Interactive web application for visualizing and experimenting with neural network architectures in real-time",
      tags: ["JavaScript", "TensorFlow.js", "React"],
      githubUrl: "https://github.com/opencollab-research/nn-playground",
      stars: 92,
      forks: 28,
      language: "JavaScript",
      category: "AI",
    },
    {
      title: "Behavioral Pattern Analyzer",
      description: "Tool for analyzing user behavioral patterns using machine learning to identify trends and anomalies in psychological studies",
      tags: ["Python", "Pandas", "ML", "Statistics"],
      githubUrl: "https://github.com/opencollab-research/behavior-analyzer",
      stars: 41,
      forks: 11,
      language: "Python",
      category: "Psychology",
    },
    {
      title: "Research Paper Assistant",
      description: "AI-powered assistant to help researchers discover, summarize, and organize academic papers efficiently",
      tags: ["NLP", "Python", "Elasticsearch"],
      githubUrl: "https://github.com/opencollab-research/paper-assistant",
      stars: 67,
      forks: 19,
      language: "Python",
      category: "NLP",
    },
    {
      title: "Collaborative Notebooks",
      description: "Platform for real-time collaborative Jupyter notebooks with integrated version control and sharing features",
      tags: ["React", "Node.js", "WebSocket", "Python"],
      githubUrl: "https://github.com/opencollab-research/collab-notebooks",
      stars: 53,
      forks: 16,
      language: "TypeScript",
      category: "Web Dev",
    },
    {
      title: "AutoML Pipeline",
      description: "Automated machine learning pipeline for model selection, hyperparameter tuning, and deployment",
      tags: ["Python", "Scikit-learn", "MLflow"],
      githubUrl: "https://github.com/opencollab-research/automl-pipeline",
      stars: 88,
      forks: 25,
      language: "Python",
      category: "ML",
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our open-source research projects spanning AI, ML, data science, and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/20 sticky top-16 z-40 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={
                  selectedFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/20 hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Want to Contribute?
            </h2>
            <p className="text-lg text-muted-foreground">
              All our projects are open-source and welcome contributions. 
              Join us on GitHub to make an impact!
            </p>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://github.com/opencollab-research"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
