import { Input } from "@/shared/components/ui/input.js";
import { Image, RotateCw } from "lucide-react";

const PostFeedView = ({ posts }) => {
  return (
    <div className="flex flex-1 flex-col min-w-0 px-15 py-4">
      <section className="flex flex-col gap-4 border-b pb-4">
        {/* Feed heading */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button className="border-b-2 border-primary py-2 text-base font-semibold">
              For You
            </button>
            <button className="border-b-2 border-transparent py-2 text-base font-medium text-muted-foreground">
              All
            </button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Refresh feed"
          >
            <RotateCw size={20} />
          </button>
        </div>

        {/* Create post */}
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Share a sighting or story..."
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
        </div>
      </section>

      {/* Posts */}
      <section className="mt-2">
        <p>Follow users to view their posts here or create your own posts!</p>
      </section>
    </div>
  );
};

export { PostFeedView };
