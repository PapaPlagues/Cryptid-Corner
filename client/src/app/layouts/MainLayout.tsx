import { Outlet } from "react-router";
import { CurrentProvider } from "@/features/auth/context/CurrentProvider.js";
import { NavWrapper } from "@/app/layouts/NavWrapper.js";
const MainLayout = () => {
  return (
    <CurrentProvider>
      <NavWrapper>
        <Outlet />
      </NavWrapper>
    </CurrentProvider>
  );
};

export { MainLayout };
