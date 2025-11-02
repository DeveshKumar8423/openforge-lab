import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Github, MessageSquare, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate form submission
    console.log("Contact form submitted:", formData);
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "devai.research.center@gmail.com",
      link: "mailto:devai.research.center@gmail.com",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "DevAIRC",
      link: "https://github.com/DevAIRC",
    },
    {
      icon: MessageSquare,
      title: "Discord",
      value: "Join our server",
      link: "https://discord.gg/zrreSSa5",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "DEV-ARC",
      link: "https://www.linkedin.com/company/devarc8423/",
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Want to collaborate? We'd love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 bg-card hover-glow text-center h-full transition-all animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 md:p-10 bg-card hover-glow">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-heading font-bold">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-input border-border min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-card hover-glow">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground">
                    DEV-ARC Research Center is a distributed team with members 
                    collaborating globally. Our virtual headquarters is on GitHub 
                    and Discord, where we connect daily.
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-card hover-glow">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">Discord:</span> Available 24/7
                    </p>
                    <p>
                      <span className="font-medium text-foreground">Email Response:</span> Within 24 hours
                    </p>
                    <p>
                      <span className="font-medium text-foreground">GitHub Issues:</span> Actively monitored
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold">
                    Join Our Community
                  </h3>
                  <p className="text-muted-foreground">
                    The best way to get in touch with our team and community is 
                    through Discord. Ask questions, share ideas, and collaborate 
                    with fellow researchers!
                  </p>
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://discord.gg/opencollab"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Discord Server
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
