import type { User } from "@/shared/types/user.types.js";

type UsersListProps = {
  users: User[];
};

const UsersList = ({ users }: UsersListProps) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <p>{user.username}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { UsersList };
