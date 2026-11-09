import { create } from "zustand";
import type { User } from "@/shared/types/user.types.js";
import { fetchCurrent } from "@/features/users/api/user.api.js";
import {
  login as requestLogin,
  guestLogin as requestGuestLogin,
  logout as requestLogout,
} from "@/features/auth/api/auth.api.js";

type FormData = {
  username: string;
  password: string;
};

type AuthState = {
  user: User | null;
  isLoading: boolean;
  isLoggingIn: boolean;

  setUser: (user: User | null) => void;
  login: (formData: FormData) => Promise<void>;
  loginGuest: () => Promise<void>;
  initialize: (signal: AbortSignal) => Promise<void>;
  logout: () => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isLoggingIn: false,

  setUser: (user) => set({ user }),

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const user = await requestLogin(formData);
      set({ user });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  loginGuest: async () => {
    set({ isLoggingIn: true });
    try {
      const user = await requestGuestLogin();
      set({ user });
    } finally {
      set({ isLoggingIn: false });
    }
  },

  initialize: async (signal) => {
    try {
      const current = await fetchCurrent(signal);

      if (!signal.aborted) {
        set({ user: current });
      }
    } catch (err) {
      if (!signal.aborted) {
        set({ user: null });
        console.error(err);
      }
    } finally {
      if (!signal.aborted) {
        set({ isLoading: false });
      }
    }
  },

  logout: async () => {
    await requestLogout();
    set({ user: null });
  },
}));

export { useAuthStore };
