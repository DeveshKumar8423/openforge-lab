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
      image: "/devesh.png",
      github: "https://github.com/DeveshKumar8423",
      linkedin: "https://in.linkedin.com/in/devesh-kumar-gola-450a0436b",
      email: "deveshkumar8423gola@gmail.com",
    },
    {
      name: "Kumkum Mishra",
      role: "Core Team",
      area: "Research & Operations",
      image: "/kumkum.png",
      github: "https://github.com/Kumkum-Mishra",
      linkedin: "https://in.linkedin.com/in/kumkum-mishra-2442a82b8",
      email: "kumkummishra892004@gmail.com",
    },
    {
      name: "Yash Kumar Gola",
      role: "Core Team",
      area: "Engineering & Systems",
      image: "https://github.com/crimsonyash9012.png",
      github: "https://github.com/crimsonyash9012",
      linkedin: "https://in.linkedin.com/in/yash-kumar-gola-480940282",
      email: "yashkumargola9012@gmail.com",
    },
  ];

  const collaborators = [
    {
      name: "Nishkarsh",
      role: "Contributor",
      area: "Research & Engineering",
      github: "#",
      linkedin: "#",
      email: "nishkarsh@example.com",
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
              The driving force behind DEV-ARC
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
                <a href="https://forms.gle/5HujtL6qb6qLmcW37" target="_blank" rel="noopener noreferrer">Apply to Join</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/20 hover:bg-primary/10"
              >
                <a
                  href="https://github.com/DevAIRC"
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
