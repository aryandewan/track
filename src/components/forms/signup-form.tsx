"use client";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const SignupForm = ({ ...props }: React.ComponentProps<typeof Card>) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Connect your GITHUB account to get started with TRACK
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Button
          className="p-3 w-full space-x-5 cursor-pointer"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
          disabled={isLoading}
        >
          <FaGithub className="size-5"/>
          Sign up with GitHub
        </Button>
      </CardContent>
    </Card>
  );
}

export default SignupForm;
