import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import { Button } from "@/shared/components/ui/button.js";
import { useRef } from "react";

type EditAvatarSectionProps = {
  avatar: string | null;
  username: string;
};

const EditAvatarSection = ({
  avatar,
  username,
  isLoadingUser,
  uploadAvatar,
  isUploadingAvatar,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClickChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleUploadAvatar = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Upload here
  };

  return (
    <div className="flex items-center gap-4">
      <Avatar className="size-20">
        <AvatarImage src={avatar ?? undefined} alt={username} />
        <AvatarFallback className="bg-secondary font-heading text-2xl">
          {username.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Your avatar</p>
        <div className="flex gap-2">
          <Button size="sm" onClick={handleClickChangePhoto}>
            Change avatar
          </Button>
          <input
            ref={fileInputRef}
            className="hidden"
            type="file"
            onChange={handleUploadAvatar}
            accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
          />
        </div>
      </div>
    </div>
  );
};

export { EditAvatarSection };
