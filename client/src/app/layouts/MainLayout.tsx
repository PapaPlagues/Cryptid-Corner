import { Outlet } from "react-router";
import { NavWrapper } from "@/app/layouts/NavWrapper.js";
const MainLayout = () => {
  return (
    <NavWrapper>
      <Outlet />
    </NavWrapper>
  );
};

export { MainLayout };
