import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stars?: number;
  forks?: number;
  language?: string;
  detailsPath?: string;
  detailsState?: any;
  onDetails?: () => void;
}

const ProjectCard = ({
  title,
  description,
  tags,
  githubUrl,
  stars = 0,
  forks = 0,
  language,
  detailsPath,
  detailsState,
  onDetails,
}: ProjectCardProps) => {
  return (
    <Card className="p-6 bg-card hover-glow group transition-all duration-300 h-full flex flex-col">
      <div className="flex-1 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {language && (
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>{language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{forks}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="flex-1 border-primary/20 hover:bg-primary/10"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        </Button>
        {onDetails ? (
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={onDetails}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Details
          </Button>
        ) : detailsPath ? (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link to={detailsPath} state={detailsState} className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Details
            </Link>
          </Button>
        ) : (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Details
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
