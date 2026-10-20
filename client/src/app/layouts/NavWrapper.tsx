import type { ReactNode } from "react";

type NavWrapperProps = {
  children: ReactNode;
};

const NavWrapper = ({ children }: NavWrapperProps) => {
  return (
    <>
      <header className="flex bg-card rounded-xl items-center">
        <div>
          <h1>Cryptid Corner</h1>
        </div>

        <div>
          <p>Profile</p>
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
