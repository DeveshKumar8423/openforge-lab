import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2, Rocket } from "lucide-react";

const Join = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    area: "",
    reason: "",
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
    if (!formData.name || !formData.email || !formData.github || !formData.area || !formData.reason) {
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
    console.log("Form submitted:", formData);
    
    toast.success("Application submitted successfully! We'll review your application and get back to you soon.", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      github: "",
      area: "",
      reason: "",
    });

    // Redirect to home after a delay
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const benefits = [
    "Collaborate on cutting-edge research projects",
    "Access to mentorship from experienced researchers",
    "Contribute to open-source AI and ML projects",
    "Publish research papers and present at conferences",
    "Network with a global community of researchers",
    "Flexible remote collaboration opportunities",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              Join <span className="gradient-text">OpenCollab</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Become part of a global community driving innovation in AI and research
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Why Join Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card hover-glow animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-card hover-glow">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-heading font-bold">
                  Application Form
                </h2>
                <p className="text-muted-foreground">
                  Tell us about yourself and why you want to join
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile URL *</Label>
                  <Input
                    id="github"
                    name="github"
                    type="url"
                    placeholder="https://github.com/johndoe"
                    value={formData.github}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Area of Interest *</Label>
                  <Input
                    id="area"
                    name="area"
                    type="text"
                    placeholder="e.g., Machine Learning, NLP, Data Science"
                    value={formData.area}
                    onChange={handleChange}
                    required
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason">Why do you want to join? *</Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us about your motivation, experience, and what you hope to contribute..."
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="bg-input border-border min-h-[150px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum 100 characters
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Submit Application
                </Button>
              </form>

              <div className="pt-4 text-center text-sm text-muted-foreground">
                <p>
                  Already have an account?{" "}
                  <a href="https://discord.gg/opencollab" className="text-primary hover:underline">
                    Join our Discord
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
