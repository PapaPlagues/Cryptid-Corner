import { SettingsView } from "@/features/users/components/Settings/SettingsView.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
import { useUserStore } from "@/features/users/stores/users.store.js";

const SettingsContainer = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);
  const updateUserBio = useUserStore((state) => state.editBio);
  const isEditingBio = useUserStore((state) => state.isEditingBio);

  if (!user) return null;

  const editBio = async (bio: string) => {
    const updatedUser = await updateUserBio(bio);
    setUser(updatedUser);
  };

  return (
    <SettingsView user={user} editBio={editBio} isEditingBio={isEditingBio} />
  );
};

export { SettingsContainer };
