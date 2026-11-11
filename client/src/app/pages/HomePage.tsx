import { PostFeed } from "@/features/posts/components/PostFeed/";
import { UsersAside } from "@/features/users/components/UsersAside";

const HomePage = () => {
  return (
    <div className="relative grid min-w-0 w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(0,40rem)_16rem] xl:justify-center xl:gap-6">
      <section className="main-container flex min-w-0 flex-col">
        <PostFeed />
      </section>

      <aside className="main-container hidden h-fit w-full xl:flex">
        <UsersAside />
      </aside>
    </div>
  );
};

export { HomePage };
