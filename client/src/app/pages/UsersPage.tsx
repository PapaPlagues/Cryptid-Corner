import { Users } from "@/features/users/components/Users";

const UsersPage = () => {
  return (
    <div className="relative grid min-w-0 w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(0,40rem)_16rem] xl:justify-center xl:gap-6">
      <div className="main-container flex min-w-0 flex-col">
        <Users />
      </div>
    </div>
  );
};

export { UsersPage };
