import { create } from "zustand";
import type { User } from "@/shared/types/user.types.js";
import {
  fetchUsers,
  fetchUser,
  patchUserBio,
  patchUserAvatar,
  postFollowing,
  deleteFollowing,
} from "@/features/users/api/user.api.js";

type UserState = {
  users: User[];
  selectedUser: User | null;
  isLoadingUsers: boolean;
  isLoadingUser: boolean;
  isLoadingFollow: boolean;

  getUsers: () => Promise<void>;
  getUser: (userId: string) => Promise<void>;
  followUser: (userId: string) => Promise<void>;
  unfollowUser: (userId: string) => Promise<void>;

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

  isLoadingFollow: false,
  followUser: async (userId) => {
    set({ isLoadingFollow: true });
    try {
      const updatedUser = await postFollowing(userId);

      if (!updatedUser) return;

      set((state) => ({
        users: state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user,
        ),
        selectedUser:
          state.selectedUser?.id === updatedUser.id
            ? updatedUser
            : state.selectedUser,
      }));
    } finally {
      set({ isLoadingFollow: false });
    }
  },

  unfollowUser: async (userId) => {
    set({ isLoadingFollow: true });
    try {
      const updatedUser = await deleteFollowing(userId);

      if (!updatedUser) return;

      set((state) => ({
        users: state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user,
        ),
        selectedUser:
          state.selectedUser?.id === updatedUser.id
            ? updatedUser
            : state.selectedUser,
      }));
    } finally {
      set({ isLoadingFollow: false });
    }
  },
}));

export { useUserStore };
