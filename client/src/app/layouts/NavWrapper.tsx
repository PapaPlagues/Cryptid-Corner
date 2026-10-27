import type { ReactNode } from "react";
import { AppSidebar } from "@/shared/components/AppSidebar.js";
import {
  SidebarInset,
  SidebarProvider,
} from "@/shared/components/ui/sidebar.js";

type NavWrapperProps = {
  children: ReactNode;
};

const NavWrapper = ({ children }: NavWrapperProps) => {
  return (
    <SidebarProvider className="flex-col">
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <AppSidebar />
        <SidebarInset className="min-w-0 flex-1">{children}</SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export { NavWrapper };
