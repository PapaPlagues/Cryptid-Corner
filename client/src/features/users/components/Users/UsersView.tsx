import { UsersList } from "@/features/users/components/UsersList.js";
import type { User } from "@/shared/types/user.types.js";

type UsersViewProps = {
  users: User[];
  isLoadingUsers: boolean;
  refetchUsers: () => Promise<void>;
};

const UsersView = ({ users, isLoadingUsers, refetchUsers }: UsersViewProps) => {
  return (
    <div>
      <p>Users</p>

      <UsersList users={users} />
    </div>
  );
};

export { UsersView };
