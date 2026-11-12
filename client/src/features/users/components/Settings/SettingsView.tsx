import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";
import { Button } from "@/shared/components/ui/button.js";
import { EditBioSection } from "@/features/users/components/Settings/EditBioSection.js";
import { EditAvatarSection } from "@/features/users/components/Settings/EditAvatarSection.js";
import type { User } from "@/shared/types/user.types.js";

type SettingsViewProps = {
  user: User | null;
  editBio: (bio: string) => Promise<void>;
  isEditingBio: boolean;
};

const SettingsView = ({ user, editBio, isEditingBio }: SettingsViewProps) => {
  if (!user) return null;

  return (
    <div className="flex flex-col gap-8">
      {/* Page heading */}
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl text-foreground">
          Account Settings
        </h1>
        <p className="text-sm text-text-secondary">
          Manage your profile and account preferences.
        </p>
      </div>

      {/* Profile section */}
      <section className="flex flex-col gap-5">
        <div className="border-b border-border pb-3">
          <h2 className="font-heading text-xl">Profile Information</h2>
          <p className="text-sm text-text-secondary">
            Customize how others see you around Cryptid Corner.
          </p>
        </div>

        {/* Avatar */}
        <EditAvatarSection avatar={user.avatar} username={user.username} />

        {/* Bio */}
        <EditBioSection
          bio={user.bio}
          isLoadingUser={false}
          editBio={editBio}
          isEditingBio={isEditingBio}
        />
      </section>
    </div>
  );
};

export { SettingsView };
