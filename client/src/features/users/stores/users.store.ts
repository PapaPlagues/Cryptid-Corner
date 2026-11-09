import { create } from "zustand";
import type { User } from "@/shared/types/user.types.js";
import { fetchUsers, fetchUser } from "@/features/users/api/user.api.js";

type UserState = {
  users: User[];
  selectedUser: User | null;
  isLoadingUsers: boolean;
  isLoadingUser: boolean;

  getUsers: () => Promise<void>;
  getUser: (userId: string) => Promise<void>;
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
}));

export { useUserStore };
