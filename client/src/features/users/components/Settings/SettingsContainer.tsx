import { SettingsView } from "@/features/users/components/Settings/SettingsView.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
import { useUserStore } from "@/features/users/stores/users.store.js";

const SettingsContainer = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  const isLoadingUser = useUserStore((state) => state.isLoadingUser);

  const updateUserBio = useUserStore((state) => state.editBio);
  const isEditingBio = useUserStore((state) => state.isEditingBio);

  const uploadAvatar = useUserStore((state) => state.uploadAvatar);
  const isUploadingAvatar = useUserStore((state) => state.isUploadingAvatar);

  if (!user) return null;

  const handleEditBio = async (bio: string) => {
    const updatedUser = await updateUserBio(bio);
    if (updatedUser && updatedUser.bio) {
      setUser(updatedUser);
    }
  };

  const handleUploadAvatar = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);
    const updatedUser = await uploadAvatar(formData);
    setUser(updatedUser);
  };

  return (
    <SettingsView
      user={user}
      // Edit Avatar Section
      isLoadingUser={isLoadingUser}
      uploadAvatar={handleUploadAvatar}
      isUploadingAvatar={isUploadingAvatar}
      // Edit Bio Section
      editBio={handleEditBio}
      isEditingBio={isEditingBio}
    />
  );
};

export { SettingsContainer };
