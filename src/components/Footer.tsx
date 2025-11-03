import { Link } from "react-router-dom";
import { Github, MessageSquare, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">DA</span>
              </div>
              <span className="font-heading text-lg font-bold gradient-text">
                DEV-ARC
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Research center for advanced AI, ML, and interdisciplinary innovation
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/DevAIRC"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://discord.gg/zrreSSa5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/devarc8423/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/opencollab_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 text-foreground">
              Research Areas
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Artificial Intelligence
              </li>
              <li className="text-sm text-muted-foreground">
                Machine Learning
              </li>
              <li className="text-sm text-muted-foreground">
                Data Science
              </li>
              <li className="text-sm text-muted-foreground">
                Psychology Related
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold mb-4 text-foreground">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:devai.research.center@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  devai.research.center@gmail.com
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-primary hover:underline"
                >
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DEV-ARC Research Center. Founded by{" "}
            <a
              href="https://github.com/DeveshKumar8423"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Devesh Kumar Gola
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
