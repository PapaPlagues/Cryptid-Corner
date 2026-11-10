import { useParams } from "react-router";
import { UserProfile } from "@/features/users/components/UserProfile";

const UserPage = () => {
  const { userId } = useParams();

  if (!userId) {
    return <p>User not found</p>;
  }

  return (
    <div className="grid min-w-0 w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,40rem)_minmax(0,1fr)]">
      <div className="main-container flex min-w-0 flex-col xl:col-start-2">
        <UserProfile userId={userId} />
      </div>
    </div>
  );
};

export { UserPage };
