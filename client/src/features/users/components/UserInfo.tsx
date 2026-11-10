import type { User } from "@/shared/types/user.types.js";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import { Button } from "@/shared/components/ui/button.js";
import { Card } from "@/shared/components/ui/card.js";

type UserInfoProps = {
  user: User;
  isLoadingUser: boolean;
};

type UserStatBlockProps = {
  count: number;
  label: string;
};

const UserStatBlock = ({ count, label }: UserStatBlockProps) => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="font-heading text-2xl text-foreground">{count}</span>
      <span className="text-xs text-text-secondary">{label}</span>
    </div>
  );
};

const UserInfo = ({ user, isLoadingUser }: UserInfoProps) => {
  return (
    <header className="flex flex-col gap-4">
      {/* Username */}
      <div className="rounded-lg bg-transparent px-2 py-1 shadow-none">
        <h2 className="text-center font-heading text-xl text-foreground md:text-2xl">
          {user.username}
        </h2>
      </div>

      {/* Avatar, stats, and actions */}
      <div className="grid grid-cols-6 gap-3 md:grid-cols-8">
        {/* Avatar */}
        <div className="col-span-3 flex items-center justify-center p-2 md:col-span-2 md:row-span-3 md:p-4">
          <Avatar className="size-24 shadow-md">
            <AvatarImage src={user.avatar ?? undefined} alt={user.username} />
            <AvatarFallback className="bg-card font-heading text-3xl text-text-secondary">
              {user.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile actions */}
        <Card className="col-span-3 flex flex-col items-center justify-center gap-2 rounded-lg border-0 bg-transparent p-0 shadow-none md:hidden">
          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled
          >
            Follow
          </Button>
          <Button
            variant="outline"
            className="w-full border-0 bg-secondary text-foreground hover:bg-secondary/80"
            disabled
          >
            Message
          </Button>
        </Card>

        {/* Stats */}
        <div className="col-span-2 flex min-h-16 items-center justify-center px-1 py-3 md:row-span-2">
          <UserStatBlock count={0} label="Followers" />
        </div>

        <div className="col-span-2 flex min-h-16 items-center justify-center px-1 py-3 md:row-span-2">
          <UserStatBlock count={0} label="Following" />
        </div>

        <div className="col-span-2 flex min-h-16 items-center justify-center px-1 py-3 md:row-span-2">
          <UserStatBlock count={0} label="Posts" />
        </div>

        {/* Desktop actions */}
        <div className="col-span-3 hidden items-center justify-center p-2 md:flex">
          <Button
            className="w-full max-w-40 bg-primary text-primary-foreground hover:bg-primary/90"
            disabled
          >
            Follow
          </Button>
        </div>

        <div className="col-span-3 hidden items-center justify-center p-2 md:flex">
          <Button
            variant="outline"
            className="w-full max-w-40 border-0 bg-secondary text-foreground hover:bg-secondary/80"
            disabled
          >
            Send message
          </Button>
        </div>
      </div>

      {/* Bio */}
      <Card className="rounded-lg border-0 bg-secondary/60 p-4 shadow-none">
        <h3 className="mb-2 font-heading text-lg text-foreground">About</h3>
        <p className="text-sm leading-6 text-text-secondary">
          {user.bio ||
            "This cryptid hasn't shared anything about themselves yet."}
        </p>
      </Card>
    </header>
  );
};

export { UserInfo };
