import { cn } from "@/lib/utils"
import { Button } from "@/src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import { FaGithub } from "react-icons/fa"
import { useState } from "react"
import { signIn } from "next-auth/react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {
    setIsLoading(true);
    await signIn("github", { callbackUrl: "/dashboard" });
    setIsLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">
            Connect your GITHUB account to get started with TRACK
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
            <Button
                className="p-3 w-full space-x-5 cursor-pointer"
                onClick={handleLogin}
                disabled={isLoading}
              >
                <FaGithub className="size-5"/>
                LogIn with GitHub
            </Button>
        </CardContent>
      </Card>
    </div>
  )
}
