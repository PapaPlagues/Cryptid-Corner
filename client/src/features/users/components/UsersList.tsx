import type { User } from "@/shared/types/user.types.js";
import { Button } from "@/shared/components/ui/button.js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import { Card } from "@/shared/components/ui/card.js";
import { Link } from "react-router";

type UsersListProps = {
  users: User[];
};

const UsersList = ({ users }: UsersListProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {users.map((user) => (
        <li key={user.id}>
          <Card className="flex h-full flex-row items-start gap-4 rounded-lg border border-border/60 bg-secondary/40 p-4 shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary/70 hover:shadow-lg hover:shadow-black/10">
            {/* Avatar */}
            <Avatar className="size-14 shrink-0 ring-2 ring-primary/20 shadow-sm sm:size-16">
              <AvatarImage src={user.avatar ?? undefined} alt={user.username} />
              <AvatarFallback className="bg-card font-heading text-2xl text-primary">
                {user.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            {/* User information */}
            <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <h3 className="truncate font-heading text-lg font-semibold">
                {user.username}
              </h3>

              <p className="line-clamp-2 min-h-10 text-sm leading-5 text-text-secondary">
                {user.bio || "No bio yet."}
              </p>

              {/* Stats */}
              <div className="mt-1 flex flex-wrap gap-2 text-xs text-text-secondary">
                <span className="rounded-full bg-background/70 px-2.5 py-1">
                  0 Posts
                </span>
                <span className="rounded-full bg-background/70 px-2.5 py-1">
                  0 Followers
                </span>
              </div>

              {/* Profile button */}
              <Button asChild size="sm" className="mt-2">
                <Link to={`/users/${user.id}`}>View profile</Link>
              </Button>
            </div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export { UsersList };
