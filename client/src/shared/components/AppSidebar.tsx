import {
  Moon,
  Home,
  MessageCircle,
  User,
  UserGroup,
  SquarePen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/components/ui/sidebar.js";

const navItems = [
  { title: "Home", icon: Home },
  { title: "Messages", icon: MessageCircle },
  { title: "Profile", icon: User },
  { title: "Users", icon: UserGroup },
  { title: "Edit", icon: SquarePen },
];

const AppSidebar = () => {
  return (
    <Sidebar className="w-50 flex items-c">
      <SidebarHeader className="items-center pt-6">
        <div className="w-full text-center border-b-2 border-border pb-4">
          <h3 className="font-heading text-3xl font-bold">
            <span className="text-primary">CRYPTID</span> CORNER
          </h3>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton tooltip={item.title}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
};

export { AppSidebar };
