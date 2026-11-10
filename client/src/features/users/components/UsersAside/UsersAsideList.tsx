import type { User } from "@/shared/types/user.types.js";
import { Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar";
import { ChevronRight } from "lucide-react";

type UsersAsideListProps = {
  users: User[];
};

const UsersAsideList = ({ users }: UsersAsideListProps) => {
  return (
    <ul className="flex flex-col gap-1">
      {users.map((user) => (
        <li key={user.id}>
          <Link
            to={`/users/${user.id}`}
            className="group flex min-w-0 items-center gap-3 rounded-lg p-2 transition-colors hover:bg-secondary/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Avatar className="size-10 shrink-0 ring-2 ring-border/70 transition-colors group-hover:ring-primary/40">
              <AvatarImage src={user.avatar ?? undefined} alt={user.username} />
              <AvatarFallback className="bg-primary/10 font-heading text-base text-primary">
                {user.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate text-sm font-semibold text-foreground">
                {user.username}
              </span>
              <span className="line-clamp-1 text-xs text-text-secondary">
                {user.bio || "A new face in the community"}
              </span>
            </div>
            <ChevronRight
              className="size-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { UsersAsideList };
