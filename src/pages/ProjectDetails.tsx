import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const clamp = (text: string, max: number) =>
  text.length > max ? text.slice(0, max - 1) + "…" : text;

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state || {}) as {
    title?: string;
    description?: string;
    tags?: string[];
    language?: string;
    githubUrl?: string;
  };

  if (!state.title) {
    navigate("/projects", { replace: true });
    return null;
  }

  const techStack = [
    ...(state.language ? [state.language] : []),
    ...(state.tags || []),
  ];

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full p-8 bg-card">
        <div className="space-y-6 text-center">
          <h1 className="text-3xl font-heading font-bold">{state.title}</h1>
          <p className="text-muted-foreground">{clamp(state.description || "", 200)}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((t, i) => (
              <span key={i} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 justify-center pt-2">
            {state.githubUrl && (
              <Button asChild>
                <a href={state.githubUrl} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </Button>
            )}
            <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectDetails;


