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
    <SidebarProvider className="h-dvh overflow-hidden flex-col">
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <AppSidebar />
        <SidebarInset className="min-h-0 min-w-0 flex-1 overflow-hidden">
          <div className="mx-auto flex h-full min-h-0 min-w-0 w-full max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export { NavWrapper };
