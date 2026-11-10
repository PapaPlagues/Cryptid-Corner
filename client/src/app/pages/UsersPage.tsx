import { Users } from "@/features/users/components/Users";

const UsersPage = () => {
  return (
    <div className="grid min-w-0 w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,40rem)_minmax(0,1fr)]">
      <div className="main-container flex min-w-0 flex-col xl:col-start-2">
        <Users />
      </div>
    </div>
  );
};

export { UsersPage };
