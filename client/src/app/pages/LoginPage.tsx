import { AuthFormWrapper } from "@/features/auth/components/AuthFormWrapper.js";
import { Login } from "@/features/auth/components/Login.js";
import { LoginImageCarousel } from "@/features/auth/components/LoginImageCarousel";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground lg:grid lg:grid-cols-2">
      <AuthFormWrapper>
        <Login />
      </AuthFormWrapper>

      <aside className="relative hidden min-h-screen overflow-hidden bg-card lg:block">
        <LoginImageCarousel />
      </aside>
    </div>
  );
};

export { LoginPage };
