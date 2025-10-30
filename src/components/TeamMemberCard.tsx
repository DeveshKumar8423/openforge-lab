import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  area: string;
  image?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

const TeamMemberCard = ({
  name,
  role,
  area,
  image,
  github,
  linkedin,
  email,
}: TeamMemberCardProps) => {
  return (
    <Card className="p-6 bg-card hover-glow group transition-all duration-300 text-center">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-primary-foreground">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-heading font-bold text-foreground">
            {name}
          </h3>
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary"
          >
            {role}
          </Badge>
          <p className="text-sm text-muted-foreground">{area}</p>
        </div>

        <div className="flex justify-center gap-2 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
