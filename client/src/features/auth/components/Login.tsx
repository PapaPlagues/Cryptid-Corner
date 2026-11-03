import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field.js";
import { Input } from "@/shared/components/ui/input.js";
import { Button } from "@/shared/components/ui/button.js";
import { Link, useNavigate } from "react-router";
import { useLogin } from "@/features/auth/hooks/useLogin.js";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login({
        username: formData.username,
        password: formData.password,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="space-y-8" onSubmit={handleLogin}>
        <FieldSet>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                className="h-11 border-input bg-secondary placeholder:text-muted-foreground focus-visible:ring-ring"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                minLength={1}
                maxLength={36}
                autoCapitalize="off"
                autoCorrect="off"
                autoComplete="off"
                placeholder="Enter your username"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                className="h-11 border-input bg-secondary placeholder:text-muted-foreground focus-visible:ring-ring"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength={1}
                maxLength={36}
                placeholder="Enter your password"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field>
          <Button type="submit" className="w-full">
            Log In
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full border-border bg-secondary text-foreground hover:bg-secondary/80 hover:text-foreground"
          >
            Just passing by? Log in as Guest
          </Button>
        </Field>
      </form>

      {/* Registration link */}
      <p className="text-center text-sm text-text-secondary">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium text-primary transition-colors hover:text-ring hover:underline"
        >
          Sign up.
        </Link>
      </p>

      {/* Project credits */}
      <div className="border-t border-border pt-5">
        <a
          href="https://github.com/PapaPlagues/Cryptid-Corner"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs text-text-secondary transition-colors hover:text-foreground"
        >
          Open-source project · View on GitHub
        </a>
      </div>
    </>
  );
};

export { Login };
