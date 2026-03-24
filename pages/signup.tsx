"use client"

import { SignupForm } from "@/components/signup-form"
import { AudioWaveform } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/")
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#f6f5ee]">
      <div className="w-full max-w-sm border-2 border-background/10 rounded-2xl">
        <AudioWaveform 
          className="size-10 text-primary fixed top-5 left-5 cursor-pointer" 
          onClick={handleClick}
        /> 
        <SignupForm />
      </div>
    </div>
  );
}
