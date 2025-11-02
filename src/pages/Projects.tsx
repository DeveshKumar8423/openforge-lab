import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All",
    "AI",
    "ML",
    "Automation",
    "Innovation",
    "Data Science",
    "Psychology",
    // "NLP" can be re-enabled later when needed
  ];

  const toSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const projects = [
    // AI
    {
      title: "EcoRide - Smart Carpooling Platform",
      description: "A smart carpooling platform focused on efficient ride-sharing and sustainability.",
      tags: ["React", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/DeveshKumar8423/EcoRide",
      language: "TypeScript",
      category: "AI",
      slug: toSlug("EcoRide - Smart Carpooling Platform"),
    },
    {
      title: "Carbon Prompting Playground",
      description: "Interactive ML system to predict carbon emissions from AI prompts with real-time visualizations.",
      tags: ["Python", "Flask", "scikit-learn", "D3.js"],
      githubUrl: "https://github.com/DeveshKumar8423/CarbonPrompt-Playground",
      language: "Python",
      category: "AI",
      slug: toSlug("Carbon Prompting Playground"),
    },

    // Automation
    {
      title: "Cold Emailing Automation Tool",
      description: "Automates cold email campaigns with personalization, scheduling, and analytics.",
      tags: ["TypeScript", "Node.js", "Automation"],
      githubUrl: "https://github.com/DevAIRC/Automation-AI",
      language: "TypeScript",
      category: "Automation",
      slug: toSlug("Cold Emailing Automation Tool"),
    },

    // Innovation
    {
      title: "Full Body Checkup",
      description: "Intelligent health screening concept aggregating signals for a holistic assessment.",
      tags: ["AI", "Health", "Analytics"],
      githubUrl: "https://github.com/DevAIRC/Full-Body-Checkup",
      language: "TypeScript",
      category: "Innovation",
      slug: toSlug("Full Body Checkup"),
    },
    {
      title: "HyperTools Library",
      description: "Experimental library for high-level tooling and rapid prototyping across domains.",
      tags: ["Tooling", "Open-source", "Innovation"],
      githubUrl: "https://github.com/jeremymanning/hypertools",
      language: "TypeScript",
      category: "Innovation",
      slug: toSlug("HyperTools Library"),
    },

    // ML
    {
      title: "Cross Domain Segmentation",
      description: "Robust segmentation across domains with domain adaptation techniques.",
      tags: ["PyTorch", "Segmentation", "Domain Adaptation"],
      githubUrl: "https://github.com/DeveshKumar8423/BITS-Internship",
      language: "Python",
      category: "ML",
      slug: toSlug("Cross Domain Segmentation"),
    },
    {
      title: "FoodViT - Food Prediction using Vision Transformer",
      description: "Food image classification using ViT for accurate category prediction.",
      tags: ["ViT", "Computer Vision", "PyTorch"],
      githubUrl: "https://github.com/DevAIRC/FoodViT",
      language: "Python",
      category: "ML",
      slug: toSlug("FoodViT - Food Prediction using Vision Transformer"),
    },
    {
      title: "ResumeLens - Resume Screener",
      description: "AI-powered resume screening and insights for streamlined hiring.",
      tags: ["NLP", "Classification", "Python"],
      githubUrl: "https://github.com/DevAIRC/ResumeLens",
      language: "Python",
      category: "ML",
      slug: toSlug("ResumeLens - Resume Screener"),
    },

    // Psychology
    {
      title: "Self Exploration",
      description: "A guided self-exploration toolkit blending counseling methods with AI.",
      tags: ["Psychology", "Counseling", "AI"],
      githubUrl: "https://github.com/DevAIRC/Self-Exploration",
      language: "TypeScript",
      category: "Psychology",
      slug: toSlug("Self Exploration"),
    },

    // Data Science
    {
      title: "PROMISE Dataset Carbon Emission in LLM Requirement Classification",
      description: "Empirical analysis of carbon emissions across prompting strategies for requirement classification.",
      tags: ["Data Science", "Green AI", "LLM"],
      githubUrl: "https://github.com/DevAIRC/PROMISE-Dataset-Carbon-Emission-in-LLM-Requirement-Classification",
      language: "Python",
      category: "Data Science",
      slug: toSlug("PROMISE Dataset Carbon Emission in LLM Requirement Classification"),
    },
  ];

  const projectsWithLongDesc = useMemo(() => {
    const gen = (p: any) => {
      const sentences: string[] = [];
      const desc = (p.description || "").trim();
      const cat = (p.category || "").toString();
      const lang = p.language ? `Primary language: ${p.language}.` : "";
      const tech = p.tags?.length ? `Tech stack includes ${p.tags.join(", ")}.` : "";
      sentences.push(`${p.title} is a ${cat.toLowerCase()} project at DEV-ARC. ${desc}`);
      if (tech) sentences.push(tech);
      if (lang) sentences.push(lang);
      sentences.push("It focuses on practical research impact, clean engineering, and reproducible open-source development.");
      sentences.push("This work contributes to our broader goals of interdisciplinary innovation and community-driven science.");

      let text = sentences.join(" ").replace(/\s+/g, " ").trim();
      if (text.length > 1250) text = text.slice(0, 1250).replace(/\s+\S*$/, "") + "…";
      if (text.length < 250) {
        const extra = " It further explores design trade-offs, performance characteristics, and usability to ensure robustness in real-world settings.";
        while (text.length < 250) text += extra;
        if (text.length > 1250) text = text.slice(0, 1250).replace(/\s+\S*$/, "") + "…";
      }
      return text;
    };
    return projects.map((p) => ({ ...p, longDescription: gen(p) }));
  }, []);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projectsWithLongDesc
      : projectsWithLongDesc.filter((project) => project.category === selectedFilter);

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
          {filteredProjects.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-2xl font-heading">Projects coming soon</p>
              <p className="text-muted-foreground mt-2">We’re curating our portfolio. Check back later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: any, index) => (
                <div
                  key={index}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProjectCard
                    {...project}
                    onDetails={() => {
                      setSelected(project);
                      setOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Propose a Project (after projects, before CTA) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Propose a <span className="gradient-text">Project</span>
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Guided by our values of Open Science, Innovation, Community, and Human Impact, we welcome well-structured, ethical proposals that create measurable real‑world value.
              </p>
            </div>

            <Card className="p-6 md:p-8 bg-card hover-glow">
              <h3 className="font-heading font-bold text-2xl mb-4">Requirements & Process</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Registered DEV‑ARC member or collaborator</li>
                <li>Title and 150–250 word Abstract</li>
                <li>Introduction / Background and Literature Review</li>
                <li>Problem Statement and Objectives / Research Questions</li>
                <li>Proposed Methodology (design, tools/models/datasets, outputs)</li>
                <li>Resources Required and Timeline / Work Plan</li>
                <li>References / Citations</li>
                <li>Submit proposal to PI / supervising professor</li>
                <li>Address feedback and revisions</li>
                <li>Identify collaborators/mentors for interdisciplinary needs</li>
                <li>Set regular syncs with supervisors/mentors</li>
                <li>Maintain documentation, experiment logs, and backups</li>
                <li>Plan mid‑term and final evaluations (presentations/reports)</li>
              </ul>
              <div className="text-center pt-6">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://forms.gle/5HujtL6qb6qLmcW37" target="_blank" rel="noopener noreferrer">Submit Your Proposal</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Details Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{selected?.title}</DialogTitle>
            <DialogDescription>
              {selected?.longDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-wrap gap-2 pt-2">
            {selected?.language && (
              <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                {selected.language}
              </span>
            )}
            {selected?.tags?.map((t: string, i: number) => (
              <span key={i} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            {selected?.githubUrl && (
              <Button asChild>
                <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
              </Button>
            )}
            <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>

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
                href="https://github.com/DevAIRC"
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
