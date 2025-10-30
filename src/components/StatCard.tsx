import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <Card
      className="p-6 bg-card/50 backdrop-blur-sm border-border hover-glow group animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-heading font-bold gradient-text">
            {value}
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
