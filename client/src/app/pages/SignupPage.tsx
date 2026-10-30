import { AuthFormWrapper } from "@/features/auth/components/AuthFormWrapper.js";
import { Signup } from "@/features/auth/components/Signup.js";

const SignupPage = () => {
  return (
    <div>
      <AuthFormWrapper variant="card">
        <Signup />
      </AuthFormWrapper>
    </div>
  );
};

export { SignupPage };
