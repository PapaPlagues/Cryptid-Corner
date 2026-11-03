import type { ReactNode } from "react";
import { CurrentContext } from "./CurrentContext.js";
import { useCurrent } from "@/features/auth/hooks/useCurrent.js";

type CurrentProviderProps = {
  children: ReactNode;
};

const CurrentProvider = ({ children }: CurrentProviderProps) => {
  const { user, setUser, isLoading } = useCurrent();

  return (
    <CurrentContext.Provider value={{ user, setUser, isLoading }}>
      {children}
    </CurrentContext.Provider>
  );
};

export { CurrentProvider };
