"use client";

import SignupForm from "@/components/signup-form";
import { mono } from "@/config/fonts";
import { AudioWaveform } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter()
  const handleClick = () => {
      router.push("/")
  }

  return (
    <div
      className={`h-screen w-full flex items-center justify-center ${mono.className}`}
    >
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#f6f5ee]">
        <div className="w-full max-w-sm border-2 border-background/10 rounded-2xl">
          <AudioWaveform
            className="size-10 text-primary fixed top-5 left-5 cursor-pointer"
            onClick={handleClick}
          />
          <SignupForm />
        </div>
      </div>
    </div>
  );
};
export default Page;
