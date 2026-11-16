import { Input } from "@/shared/components/ui/input.js";
import { Image } from "lucide-react";
import { useState } from "react";
import { usePostStore } from "@/features/posts/stores/posts.store.js";

const CreatePost = () => {
  const [content, setContent] = useState("");
  const createNewPost = usePostStore((state) => state.createPost);

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewPost({ content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        placeholder="Share a sighting or story..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border-border bg-background text-sm shadow-sm transition-shadow py-5"
      />

      <div className="flex items-center justify-between">
        <button type="button" aria-label="Add an image">
          <Image size={25} color="#e6a04b" />
        </button>

        <div className="flex items-center gap-3">
          <p>0/100</p>

          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export { CreatePost };
