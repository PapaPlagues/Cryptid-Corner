type CarouselCaptionProps = {
  category: string;
  title: string;
  description: string;
};

const CarouselCaption = ({
  category,
  title,
  description,
}: CarouselCaptionProps) => {
  return (
    <div className="absolute bottom-12 left-12 right-12 space-y-4">
      <div className="h-1 w-12 rounded-full bg-primary" />

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {category}
      </p>

      <h2 className="font-heading text-4xl font-bold leading-tight">{title}</h2>

      <p className="max-w-md text-foreground/75">{description}</p>
    </div>
  );
};

export { CarouselCaption };
