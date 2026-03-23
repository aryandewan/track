'use client'

import { LoginForm } from "@/components/login-form"
import { mono } from "@/config/fonts"
import { AudioWaveform } from "lucide-react"

export default function Page() {
  return (
    <div className={`flex min-h-svh w-full items-center justify-center p-6 md:p-10 ${mono.className} bg-[#f6f5ee]`}>
      <AudioWaveform className="size-10 text-primary fixed top-5 left-5" />
      <div className="w-full max-w-sm border-2 border-black/10 rounded-xl">
        <LoginForm />
      </div>
    </div>
  )
}
