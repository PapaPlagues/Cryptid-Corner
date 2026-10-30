import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel.js";
import Autoplay from "embla-carousel-autoplay";
import { CarouselCaption } from "@/features/auth/components/CarouselCaption.js";

const LoginImageCarousel = () => {
  return (
    <div className="relative hidden min-h-screen overflow-hidden bg-card lg:block">
      <Carousel className="h-full w-full" plugins={[Autoplay({ delay: 6000 })]}>
        <CarouselContent className="ml-0 h-screen">
          {/* Slide 1 - Sightings */}
          <CarouselItem className="relative h-screen pl-0">
            <img
              src="https://placehold.co/800x1200/27272B/E8E4DE?text=Sightings"
              alt="Sightings placeholder"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />

            {/* Image Caption */}
            <CarouselCaption
              category="share"
              title="Seen anything weird lately?"
              description="Spotted something in the woods? Had a ghostly encounter? We'd love to hear about it!"
            />
          </CarouselItem>

          {/* Slide 2 - Discover */}
          <CarouselItem className="relative h-screen pl-0">
            <img
              src="https://placehold.co/800x1200/202023/E8E4DE?text=Discover"
              alt="Discover placeholder"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Add a different caption and overlay here */}

            {/* Image Caption */}
            <CarouselCaption
              category="  EXPLORE"
              title=" There's something out there!"
              description=" Discover strange creatures, spooky stories, local legends, and
                mysteries from around the world."
            />
          </CarouselItem>

          {/* Slide 3 - Community */}
          <CarouselItem className="relative h-screen pl-0">
            <img
              src="https://placehold.co/800x1200/35353B/E8E4DE?text=Community"
              alt="Community placeholder"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Add a different caption and overlay here */}

            {/* Image Caption */}
            <CarouselCaption
              category="Connect"
              title="Find your kind of weird."
              description="Join conversations, exchange theories, and meet people who are
                just as fascinated by the unexplained as you are."
            />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6 " />
      </Carousel>
    </div>
  );
};

export { LoginImageCarousel };
