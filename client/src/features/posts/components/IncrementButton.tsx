import { Button } from "@/shared/components/ui/button.js";
import type React from "react";

type IncrementButtonProps = {
  onClick: () => void;
  count: number;
  icon: React.ElementType;
  isActive?: boolean;
  activeClassName?: string;
};

const IncrementButton = ({
  onClick,
  count,
  icon: Icon,
  isActive = false,
  activeClassName = "text-red-500",
}: IncrementButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 rounded-full px-3 text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground"
      onClick={onClick}
    >
      <Icon
        className={`h-4 w-4 transition-colors ${isActive ? activeClassName : ""}`}
        fill={isActive ? "currentColor" : "none"}
      />
      <span className="tabular-nums">{count}</span>
    </Button>
  );
};

export { IncrementButton };
