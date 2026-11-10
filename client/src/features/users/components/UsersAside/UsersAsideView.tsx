import { UsersAsideList } from "@/features/users/components/UsersAside/UsersAsideList.js";
import type { User } from "@/shared/types/user.types.js";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Skeleton } from "@/shared/components/ui/skeleton.js";

type UsersAsideViewProps = {
  users: User[];
  isLoadingUsers: boolean;
};

const UsersAsideView = ({ users, isLoadingUsers }: UsersAsideViewProps) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <header className="flex flex-col gap-1 border-b border-border/70 pb-3">
        <p className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
          <Sparkles className="size-3.5" aria-hidden="true" />
          Community
        </p>
        <h2 className="font-heading text-xl font-semibold text-foreground">
          People to discover
        </h2>
        <p className="text-xs leading-relaxed text-text-secondary">
          Meet more of the curious.
        </p>
      </header>

      {isLoadingUsers ? (
        <ul className="flex flex-col gap-2" aria-label="Loading people">
          {[0, 1, 2].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg p-2"
            >
              <Skeleton className="size-10 shrink-0 rounded-full" />
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-2.5 w-full" />
              </div>
            </li>
          ))}
        </ul>
      ) : users.length > 0 ? (
        <UsersAsideList users={users.slice(0, 4)} />
      ) : (
        <p className="rounded-lg bg-secondary/40 px-3 py-4 text-center text-sm text-text-secondary">
          No new faces to show right now.
        </p>
      )}

      <Link
        to="/users"
        className="group flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-secondary/40 px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Explore the community
        <ArrowRight
          className="size-4 text-primary transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </section>
  );
};

export { UsersAsideView };
