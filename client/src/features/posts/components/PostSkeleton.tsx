import { Skeleton } from "@/shared/components/ui/skeleton.js";

const PostSkeleton = () => {
  return (
    <article className="rounded-xl border bg-secondary/40 shadow-sm overflow-hidden">
      <div className="p-4 space-y-4">
        {/* Header */}
        <header className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-2.5 w-20" />
          </div>

          <Skeleton className="h-8 w-8 rounded-md" />
        </header>

        {/* Content */}
        <div className="space-y-3">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5" />
          <Skeleton className="h-3 w-2/3" />

          {/* Image placeholder */}
          <Skeleton className="w-full h-48 rounded-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center gap-2 border-t px-4 py-4">
        <Skeleton className="h-8 w-16 rounded-md" />
        <Skeleton className="h-8 w-16 rounded-md" />
      </footer>
    </article>
  );
};

export { PostSkeleton };
