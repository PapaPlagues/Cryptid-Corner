import { Input } from "@/shared/components/ui/input.js";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";

type CommentInputProps = {
  onSubmit: (content: string) => Promise<void>;
  isSubmitting?: boolean;
};

const CommentInput = ({
  onSubmit,
  isSubmitting = false,
}: CommentInputProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim() || isSubmitting) return;

    await onSubmit(content);
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t border-border/60 bg-card/35 px-4 py-4 sm:px-5"
    >
      <Input
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isSubmitting}
        className="h-11 rounded-xl border-border/70 bg-background/75 px-4 shadow-none placeholder:text-muted-foreground/80 focus-visible:bg-background"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        aria-label="Send comment"
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-colors hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SendHorizontal className="h-4 w-4" />
      </button>
    </form>
  );
};

export { CommentInput };
