import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Lightbulb, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Open Collaboration",
      description: "We believe in the power of collective intelligence and open-source contribution",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries and exploring new frontiers in AI and interdisciplinary research",
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Building a supportive ecosystem where researchers and developers thrive together",
    },
    {
      icon: Heart,
      title: "Impact-Focused",
      description: "Creating solutions that make a real difference in people's lives",
    },
  ];

  const researchAreas = [
    {
      title: "Artificial Intelligence",
      topics: ["Deep Learning", "Neural Networks", "AI Ethics", "Explainable AI"],
    },
    {
      title: "Machine Learning",
      topics: ["Supervised Learning", "Reinforcement Learning", "Transfer Learning", "AutoML"],
    },
    {
      title: "Natural Language Processing",
      topics: ["Sentiment Analysis", "Text Generation", "Language Models", "Multilingual NLP"],
    },
    {
      title: "Data Science",
      topics: ["Data Visualization", "Statistical Analysis", "Big Data", "Predictive Modeling"],
    },
    {
      title: "Psychology & Counseling",
      topics: ["Mental Health AI", "Behavioral Analysis", "Therapeutic Chatbots", "Wellness Apps"],
    },
    {
      title: "Interdisciplinary Innovation",
      topics: ["AI + Healthcare", "EdTech", "Social Computing", "Human-Computer Interaction"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              About <span className="gradient-text">DEV-ARC</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We are a collaborative research lab dedicated to advancing AI, ML, and interdisciplinary 
              research through open-source innovation and community-driven development
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card hover-glow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize research by creating an open platform where researchers, developers, 
                  and students from around the world can collaborate on cutting-edge AI and ML projects, 
                  share knowledge freely, and collectively push the boundaries of what's possible in 
                  technology and human understanding.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-card hover-glow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global hub for collaborative research where innovation knows no boundaries. 
                  We envision a future where open collaboration accelerates scientific discovery, 
                  where diverse perspectives drive breakthrough innovations, and where technology 
                  serves humanity's greatest challenges.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover-glow text-center animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text">Collaborators</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations and research groups partnering with DEV-ARC
            </p>
          </div>

          <div className="border border-border rounded-2xl bg-card/20 p-8">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-8 items-center justify-items-center">
              {[
                "/collaborators/Princeton.png",
                "/collaborators/Dartmouth.png",
                "/collaborators/UTexas.png",
                "/collaborators/iit kanpur.png",
                "/collaborators/BITS.png",
                "/collaborators/BARC.png",
                "/collaborators/UCD.png",
                "/collaborators/Waterloo.png",
              ].map((src, idx) => {
                const sizeClass = src.includes("Princeton.png")
                  ? "max-h-28 md:max-h-32 lg:max-h-40"
                  : "max-h-16 md:max-h-20 lg:max-h-24";
                return (
                  <img
                    key={idx}
                    src={src}
                    alt="Collaborator"
                    className={`${sizeClass} h-auto w-auto opacity-90 hover:opacity-100 transition-opacity`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Research <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring diverse fields to drive innovation and impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchAreas.map((area, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover-glow animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-heading font-bold text-primary">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-card hover-glow max-w-4xl mx-auto">
            <div className="text-center space-y-6">
              <img
                src="/devesh.png"
                alt="Devesh Kumar Gola"
                className="w-24 h-24 rounded-full object-cover mx-auto"
              />
              <div className="space-y-2">
                <h3 className="text-2xl font-heading font-bold">Devesh Kumar Gola</h3>
                <p className="text-primary font-medium">Founder & Principal Investigator</p>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Founded by Devesh Kumar Gola, DEV-ARC (Devesh AI Research Center) is an independent research initiative bridging Artificial Intelligence, Psychology, and Interdisciplinary Innovation — creating technology that not only learns intelligently but understands deeply.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Devesh brings research experience across Princeton University, Dartmouth College, The University of Texas at Austin, IIT Kanpur, BITS Pilani, BARC, UCD, DTU, and the University of Waterloo, contributing to pioneering work in AI, NLP, Cognitive Science, and Brain Decoding. His projects span motion intelligence, sustainable NLP, psychological modeling, and open-source system optimization, integrating computational precision with human insight.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Through DEV-ARC, he envisions a global open-science ecosystem that empowers collaboration, advances ethical AI, and explores the intersection of machine intelligence and the human mind.
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <a
                  href="https://github.com/DeveshKumar8423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://in.linkedin.com/in/devesh-kumar-gola-450a0436b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:deveshkumar8423gola@gmail.com"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Gmail
                </a>
                <a
                  href="https://devesh-kumar-gola.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
