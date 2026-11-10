import { UsersList } from "@/features/users/components/UsersList.js";
import type { User } from "@/shared/types/user.types.js";
import { Input } from "@/shared/components/ui/input.js";

type UsersViewProps = {
  users: User[];
  isLoadingUsers: boolean;
  refetchUsers: () => Promise<void>;
};

const UsersView = ({ users }: UsersViewProps) => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4 border-b border-border/70 pb-5">
        <div className="space-y-1">
          <p className="font-heading text-xs font-semibold tracking-widest text-primary uppercase">
            Cryptid directory
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Users
          </h1>
          <p className="text-sm text-text-secondary">
            Meet the curious minds in the community.
          </p>
        </div>

        <Input
          placeholder="Search for a user"
          className="bg-background/70"
        />
      </section>

      <UsersList users={users} />
    </div>
  );
};

export { UsersView };
