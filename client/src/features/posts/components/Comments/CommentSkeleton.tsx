const CommentSkeleton = () => {
  return (
    <div className="flex animate-pulse items-start gap-3.5 py-4">
      <div className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-secondary" />

      <div className="flex-1 space-y-2 pt-1">
        <div className="h-3 w-32 rounded bg-secondary" />
        <div className="h-3 w-3/4 rounded bg-secondary" />
        <div className="h-3 w-1/2 rounded bg-secondary" />
      </div>
    </div>
  );
};

export { CommentSkeleton };
