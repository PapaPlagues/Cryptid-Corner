import { Button } from "@/shared/components/ui/button.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";

type FollowButtonProps = {
  userId: string;
  isFollowing: boolean;
  handleFollowUser: () => void;
  handleUnfollowUser: () => void;
  isLoadingFollow: boolean;
};

const FollowButton = ({
  userId,
  isFollowing,
  handleFollowUser,
  handleUnfollowUser,
  isLoadingFollow,
}: FollowButtonProps) => {
  const currentUser = useAuthStore((state) => state.user);

  if (userId === currentUser?.id) {
    return <span className="text-sm text-muted-foreground">Hey, it's me!</span>;
  }

  if (isFollowing) {
    return (
      <Button
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        variant="outline"
        onClick={handleUnfollowUser}
        disabled={isLoadingFollow}
      >
        Unfollow
      </Button>
    );
  }

  return (
    <Button
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handleFollowUser}
      disabled={isLoadingFollow}
    >
      Follow
    </Button>
  );
};

export { FollowButton };
