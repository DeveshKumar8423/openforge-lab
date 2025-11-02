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
              Join <span className="gradient-text">DEV-ARC</span>
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

      {/* Google Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto p-6 md:p-8 bg-card hover-glow">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-heading font-bold">Application Form</h2>
                <p className="text-muted-foreground">Apply via our Google Form</p>
              </div>
              <div className="w-full">
                <iframe
                  src="https://forms.gle/5HujtL6qb6qLmcW37"
                  className="w-full h-[70vh] rounded-lg border border-border"
                  title="DEV-ARC Application Form"
                />
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="https://forms.gle/5HujtL6qb6qLmcW37" target="_blank" rel="noopener noreferrer">Open in New Tab</a>
                </Button>
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
