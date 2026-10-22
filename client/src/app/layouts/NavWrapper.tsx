import type { ReactNode } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/components/ui/avatar.js";

type NavWrapperProps = {
  children: ReactNode;
};

const NavWrapper = ({ children }: NavWrapperProps) => {
  return (
    <>
      <header className="flex bg-card rounded-xl items-center m-5 p-8 justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold">
            <span className="primary">CRYPTID</span> CORNER
          </h1>
        </div>

        <div>
          <Avatar className="size-10">
            <AvatarImage src="https://i.pravatar.cc/300" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <nav>
        <div>
          <p>Navbar</p>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export { NavWrapper };
