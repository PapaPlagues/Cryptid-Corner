import { PostFeed } from "@/features/posts/components/PostFeed/";
import { UsersAside } from "@/features/users/components/UsersAside";

const HomePage = () => {
  return (
    <div className="grid min-w-0 w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,40rem)_minmax(0,1fr)]">
      <section className="main-container flex min-w-0 flex-col xl:col-start-2">
        <PostFeed />
      </section>

      <aside className="main-container mt-4 hidden h-fit w-full max-w-64 xl:col-start-3 xl:row-start-1 xl:ml-6 xl:flex">
        <UsersAside />
      </aside>
    </div>
  );
};

export { HomePage };
