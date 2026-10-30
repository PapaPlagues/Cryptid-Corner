import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/shared/components/ui/field.js";
import { Input } from "@/shared/components/ui/input.js";
import { Button } from "@/shared/components/ui/button.js";

const Signup = () => {
  return (
    <>
      <form className="space-y-6">
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </Field>

            <Field>
              <FieldLabel>Confirm Password</FieldLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-primary transition-colors hover:text-ring hover:underline"
            >
              Log in.
            </a>
          </p>
        </Field>
      </form>
    </>
  );
};

export { Signup };
