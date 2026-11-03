import React, { createContext } from "react";
import type { User } from "@/features/users/api/user.api.js";

type CurrentContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isLoading: boolean;
};

const CurrentContext = createContext<CurrentContextType | null>(null);

export { CurrentContext };
export type { CurrentContextType };
