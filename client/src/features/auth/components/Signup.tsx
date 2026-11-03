import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field.js";
import { Input } from "@/shared/components/ui/input.js";
import { Button } from "@/shared/components/ui/button.js";
import { signup } from "@/features/auth/api/auth.api.js";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Update state when input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await signup({
        username: formData.username,
        password: formData.password,
      });
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8">
      {/* Signup Introduction */}
      <div>
        <h2 className="text-center font-heading text-2xl font-semibold leading-tight">
          Find your kind of weird.
        </h2>
      </div>

      <form onSubmit={handleSignup} className="space-y-8">
        <FieldSet>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                className="h-11 border-accent/30 bg-accent/5 placeholder:text-muted-foreground focus-visible:ring-ring"
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
                placeholder="Enter username"
                required
              />
              <FieldDescription className="text-xs">
                Choose a unique username for your account.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                className="h-11 border-accent/30 bg-accent/5 placeholder:text-muted-foreground focus-visible:ring-ring"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength={1}
                maxLength={36}
                placeholder="Enter password"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Confirm Password</FieldLabel>
              <Input
                className="h-11 border-accent/30 bg-accent/5 placeholder:text-muted-foreground focus-visible:ring-ring"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={1}
                maxLength={36}
                placeholder="Confirm password"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>

        <div className="space-y-6">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p className="text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary transition-colors hover:text-ring hover:underline"
            >
              Log in.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export { Signup };
