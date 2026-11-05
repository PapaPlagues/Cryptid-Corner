import { useParams } from "react-router";
import { UserProfile } from "@/features/users/components/UserProfile";

const UserPage = () => {
  const { userId } = useParams();

  if (!userId) {
    return <p>User not found</p>;
  }

  return (
    <div className="flex h-full w-full justify-center">
      <div className="flex w-full flex-1 justify-center">
        <div className="main-container mx-4 mt-3 mb-2 max-w-3xl flex-1  flex-col">
          <UserProfile userId={userId} />
        </div>
      </div>
    </div>
  );
};

export { UserPage };
