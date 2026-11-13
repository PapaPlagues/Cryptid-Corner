import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import { Button } from "@/shared/components/ui/button.js";
import { useRef, useState, type ChangeEvent } from "react";

type EditAvatarSectionProps = {
  avatar: string | null;
  username: string;
  isLoadingUser: boolean;
  uploadAvatar: (file: File) => Promise<void>;
  isUploadingAvatar: boolean;
};

const EditAvatarSection = ({
  avatar,
  username,
  isLoadingUser,
  uploadAvatar,
  isUploadingAvatar,
}: EditAvatarSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [mediaError, setMediaError] = useState<string | null>(null);

  const handleClickChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleUploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const file = e.target.files?.[0];
    const FILE_SIZE_LIMIT = 1024 * 250; //250 kb
    if (!file) return;

    setMediaError(null);
    if (file.size > FILE_SIZE_LIMIT) {
      setMediaError("File too large. Choose an image up to 250kb.");
      input.value = "";
      return;
    }

    try {
      await uploadAvatar(file);
    } catch (error) {
      setMediaError(
        error instanceof Error ? error.message : "Unable to update your avatar.",
      );
    } finally {
      input.value = "";
    }
  };

  if (isLoadingUser) {
    return (
      <div>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
        <p className="text-xs text-text-secondary md:text-sm">(Max 250kb)</p>
        {mediaError && (
          <p role="alert" className="text-sm text-destructive">
            {mediaError}
          </p>
        )}
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={handleClickChangePhoto}
            disabled={isUploadingAvatar}
          >
            {isUploadingAvatar ? "Changing..." : "Change avatar"}
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
