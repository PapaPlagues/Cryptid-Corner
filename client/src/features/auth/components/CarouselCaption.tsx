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
    <div className="absolute bottom-14 left-8 right-8 max-w-xl space-y-4 sm:left-12 sm:right-12 xl:bottom-16 xl:left-14">
      <div className="h-1 w-10 rounded-full bg-primary" />

      <p className="text-sm font-medium uppercase text-accent">{category}</p>

      <h2 className="font-heading text-4xl font-bold leading-tight xl:text-5xl">
        {title}
      </h2>

      <p className="max-w-md leading-relaxed text-foreground/80">
        {description}
      </p>
    </div>
  );
};

export { CarouselCaption };
