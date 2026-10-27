import { PostFeed } from "@/features/posts/components/PostFeed/";

const HomePage = () => {
  return (
    <div className="flex h-full w-full justify-between">
      <div className="flex w-full flex-1 justify-center">
        <section className="main-container mx-4 mt-3 mb-2 max-w-3xl flex-1  flex-col">
          <PostFeed />
        </section>
      </div>

      <aside className="main-container mt-3 mb-2 hidden md:flex md:flex md:w-[10rem] lg:w-xs h-60">
        Users Aside
      </aside>
    </div>
  );
};

export { HomePage };
