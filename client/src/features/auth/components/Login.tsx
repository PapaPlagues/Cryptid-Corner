import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/shared/components/ui/field.js";
import { Input } from "@/shared/components/ui/input.js";
import { Button } from "@/shared/components/ui/button.js";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <form className="space-y-8">
        <FieldSet>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                className="h-11 border-input bg-secondary placeholder:text-muted-foreground focus-visible:ring-ring"
                placeholder="Enter your username"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                className="h-11 border-input bg-secondary placeholder:text-muted-foreground focus-visible:ring-ring"
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
