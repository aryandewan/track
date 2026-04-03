import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const authenticate = async () => {
    const username = emailRef.current?.value
    const password = passwordRef.current?.value

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()
      
      if(data.token) {
        localStorage.setItem("token", data.token)
        router.push("/dashboard")
      }
    } catch (error) {
      console.error("Error logging in:", error)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  ref = {emailRef}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input ref = {passwordRef} id="password" type="password" required />
              </Field>
              <Field>
                <Button type="submit" className="cursor-pointer h-10 font-bold text-lg" onClick={authenticate}>
                  Login
                </Button>
                <Button variant="outline" type="button" className="text-foreground hover:text-background cursor-pointer h-10 font-bold text-lg">
                  Login with Google
                </Button>
                <FieldDescription className="text-center cursor-default">
                  Don&apos;t have an account? <a href="/signup">Sign Up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
