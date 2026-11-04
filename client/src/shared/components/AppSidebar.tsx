import { Home, MessageCircle, User, UserGroup, SquarePen } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
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
import { CurrentContext } from "@/features/auth/context/CurrentContext.js";

const AppSidebar = () => {
  const context = useContext(CurrentContext);

  if (!context) {
    throw new Error("AppSidebar must be inside CurrentProvider");
  }

  const { user } = context;

  const navItems = [
    { title: "Home", icon: Home, url: "/" },
    { title: "Messages", icon: MessageCircle, url: "/" },
    { title: "Profile", icon: User, url: `/users/${user?.id}` },
    { title: "Users", icon: UserGroup, url: "/" },
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

      <SidebarFooter />
    </Sidebar>
  );
};

export { AppSidebar };
