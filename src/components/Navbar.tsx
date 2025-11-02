import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, MessageSquare } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              <span className="text-xl font-bold text-primary-foreground">DA</span>
            </div>
            <span className="font-heading text-xl font-bold gradient-text hidden sm:block">
              DEV-ARC
            </span>
          </Link>

          {/* Desktop Navigation (centered) */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://github.com/DevAIRC"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a
                href="https://discord.gg/zrreSSa5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Discord
              </a>
            </Button>
            
            <Button
              size="sm"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              <a
                href="https://forms.gle/5HujtL6qb6qLmcW37"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a
                  href="https://github.com/DevAIRC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full justify-start"
              >
                <a
                  href="https://discord.gg/zrreSSa5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discord
                </a>
              </Button>
              
              <Button
                size="sm"
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://forms.gle/5HujtL6qb6qLmcW37"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
