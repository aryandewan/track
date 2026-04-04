"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = ({ ...props }: React.ComponentProps<typeof Card>) => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email / Username</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
              <FieldDescription>
                We'll use this to contact you.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input id="password" name="password" type="password" required />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="confirm-password">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
              />
              <FieldDescription>Please confirm your password.</FieldDescription>
            </Field>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <FieldGroup>
              <Field>
                <Button
                  type="submit"
                  className="w-full h-10"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                <Button variant="outline" type="button" className="w-full h-10 text-white">
                  Sign up with Google
                </Button>

                <FieldDescription className="px-6 text-center">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-600">
                    Log in
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignupForm;
