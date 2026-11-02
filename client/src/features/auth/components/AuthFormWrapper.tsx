import type { ReactNode } from "react";

type AuthFormWrapperProps = {
  children: ReactNode;
  variant?: "default" | "card";
};

const AuthFormWrapper = ({
  children,
  variant = "default",
}: AuthFormWrapperProps) => {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
        <div
          className={`w-full ${
            variant === "card"
              ? "max-w-lg rounded-xl border border-border bg-card p-6 shadow-2xl shadow-black/20 sm:p-9"
              : "max-w-sm"
          } space-y-8`}
        >
          {/* Brand */}
          <header className="space-y-1.5">
            <h1 className="font-heading text-2xl font-bold leading-none">
              <span className="text-primary">CRYPTID</span> CORNER
            </h1>
            <p className="text-sm leading-relaxed text-text-secondary">
              A community for the curious.
            </p>
          </header>

          {/* Separator */}
          {variant === "card" && <div className="border-t border-border" />}

          {children}
        </div>
      </section>
    </main>
  );
};

export { AuthFormWrapper };
