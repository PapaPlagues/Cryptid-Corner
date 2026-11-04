import { useParams } from "react-router";
import { UserProfile } from "@/features/users/components/UserProfile.js";

const UserPage = () => {
  const { userId } = useParams();

  return (
    <div>
      <div>
        <div>
          <UserProfile userId={userId} />
        </div>
      </div>
    </div>
  );
};

export { UserPage };
