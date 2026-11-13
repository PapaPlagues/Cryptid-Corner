import { create } from "zustand";
import type { User } from "@/shared/types/user.types.js";
import {
  fetchUsers,
  fetchUser,
  patchUserBio,
  patchUserAvatar,
} from "@/features/users/api/user.api.js";

type UserState = {
  users: User[];
  selectedUser: User | null;
  isLoadingUsers: boolean;
  isLoadingUser: boolean;

  getUsers: () => Promise<void>;
  getUser: (userId: string) => Promise<void>;

  isEditingBio: boolean;
  editBio: (bio: string) => Promise<User>;

  isUploadingAvatar: boolean;
  uploadAvatar: (fileFormData: FormData) => Promise<User>;
};

const useUserStore = create<UserState>((set) => ({
  users: [],
  selectedUser: null,
  isLoadingUsers: false,
  isLoadingUser: false,

  getUsers: async () => {
    set({ isLoadingUsers: true });

    try {
      const data = await fetchUsers();
      set({ users: data.users });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingUsers: false });
    }
  },

  getUser: async (userId) => {
    set({ isLoadingUser: true });

    try {
      const currentUser = await fetchUser(userId);
      set({ selectedUser: currentUser });
    } catch (err) {
      console.error(err);
      set({ selectedUser: null });
    } finally {
      set({ isLoadingUser: false });
    }
  },

  isEditingBio: false,

  editBio: async (bio) => {
    set({ isEditingBio: true });

    try {
      const updatedUser = await patchUserBio(bio);
      set((state) =>
        state.selectedUser?.id === updatedUser.id
          ? { selectedUser: updatedUser }
          : {},
      );
      return updatedUser;
    } finally {
      set({ isEditingBio: false });
    }
  },

  isUploadingAvatar: false,

  uploadAvatar: async (fileFormData) => {
    set({ isUploadingAvatar: true });

    try {
      const updatedUser = await patchUserAvatar(fileFormData);
      set((state) =>
        state.selectedUser?.id === updatedUser.id
          ? { selectedUser: updatedUser }
          : {},
      );
      return updatedUser;
    } finally {
      set({ isUploadingAvatar: false });
    }
  },
}));

export { useUserStore };
