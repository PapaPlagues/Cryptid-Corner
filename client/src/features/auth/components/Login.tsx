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

const Login = () => {
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
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field>
          <Button type="submit" className="w-full">
            Submit
          </Button>

          <Button type="button" variant="outline" className="w-full">
            Just passing by? Log in as Guest
          </Button>
        </Field>
      </form>

      {/* Registration link */}
      <p className="text-sm text-text-secondary">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="font-medium text-primary transition-colors hover:text-ring hover:underline"
        >
          Sign up.
        </a>
      </p>

      {/* Project credits */}
      <div className="border-t border-border pt-5">
        <a
          href="https://github.com/PapaPlagues/Cryptid-Corner"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-xs text-text-secondary transition-colors hover:text-foreground"
        >
          <span>Open-source project · View on GitHub</span>
        </a>
      </div>
    </>
  );
};

export { Login };
