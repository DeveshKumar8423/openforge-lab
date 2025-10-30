import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Devesh Kumar Gola",
      role: "Founder & PI",
      area: "AI & Psychology",
      github: "https://github.com/deveshkumargola",
      linkedin: "https://linkedin.com/in/deveshkumargola",
      email: "devesh@opencollab.research",
    },
    {
      name: "Sarah Chen",
      role: "Lead ML Engineer",
      area: "Machine Learning",
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      email: "sarah@opencollab.research",
    },
    {
      name: "Raj Patel",
      role: "NLP Researcher",
      area: "Natural Language Processing",
      github: "https://github.com/rajpatel",
      linkedin: "https://linkedin.com/in/rajpatel",
      email: "raj@opencollab.research",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      area: "Data Science & Analytics",
      github: "https://github.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      email: "emily@opencollab.research",
    },
    {
      name: "Michael Zhang",
      role: "AI Researcher",
      area: "Deep Learning",
      github: "https://github.com/michaelzhang",
      linkedin: "https://linkedin.com/in/michaelzhang",
      email: "michael@opencollab.research",
    },
    {
      name: "Priya Sharma",
      role: "Research Associate",
      area: "Psychology & AI",
      github: "https://github.com/priyasharma",
      linkedin: "https://linkedin.com/in/priyasharma",
      email: "priya@opencollab.research",
    },
  ];

  const collaborators = [
    {
      name: "Alex Thompson",
      role: "Contributor",
      area: "Full Stack Development",
      github: "https://github.com/alexthompson",
    },
    {
      name: "Lisa Wang",
      role: "Contributor",
      area: "Computer Vision",
      github: "https://github.com/lisawang",
    },
    {
      name: "Jordan Kim",
      role: "Contributor",
      area: "DevOps & MLOps",
      github: "https://github.com/jordankim",
    },
    {
      name: "Aisha Mohammed",
      role: "Contributor",
      area: "Ethics in AI",
      github: "https://github.com/aishamohammed",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate researchers, developers, and innovators working together 
              to advance AI and interdisciplinary research
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-heading font-bold">
              Core <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The driving force behind OpenCollab
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-heading font-bold">
              Active <span className="gradient-text">Contributors</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Community members making valuable contributions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {collaborators.map((collaborator, index) => (
              <div
                key={index}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TeamMemberCard {...collaborator} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-heading font-bold">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're always looking for passionate researchers, developers, and students 
              who want to contribute to cutting-edge research and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/join">Apply to Join</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/20 hover:bg-primary/10"
              >
                <a
                  href="https://github.com/opencollab-research"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contribute on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
