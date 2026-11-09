import {
  Home,
  MessageCircle,
  User,
  UserGroup,
  SquarePen,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
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

const AppSidebar = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const navItems = [
    { title: "Home", icon: Home, url: "/" },
    { title: "Messages", icon: MessageCircle, url: "/" },
    { title: "Profile", icon: User, url: `/users/${user?.id}` },
    { title: "Users", icon: UserGroup, url: "/users" },
    { title: "Edit", icon: SquarePen, url: "/" },
  ];

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
                  <SidebarMenuButton
                    tooltip={item.title}
                    render={<Link to={item.url} />}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {user && (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Logout" onClick={handleLogout}>
                <LogOut />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
