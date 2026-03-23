"use client"

import { mono } from "@/config/fonts";
import { ShieldAlert, Sparkles, TrendingUp, Wallet } from "lucide-react";

const page = () => {
  return (
    <section
      className={`h-dvh w-full flex items-center justify-center bg-[#F6F5EE] text-background ${mono.className}`}
    >
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="bg-muted p-4 rounded-lg space-y-5 col-span-3 md:col-span-2 border border-background/50">
          <TrendingUp className="size-12 bg-background/20 text-black p-2 rounded-xl" />
          <h2 className="text-3xl font-bold">Tonal Growth Engine</h2>
          <p className="max-w-2xl text-sm md:text-base hidden md:block">
            Our signature Perspective Graphs use tonal layering to visualize
            your net worth volume over time, moving beyond flat lines to deep
            financial insights.
          </p>
        </div>
        <div className="bg-muted p-4 rounded-lg space-y-5 border border-background/50 row-start-2 md:row-start-1 md:col-start-3 col-span-3 md:col-span-1">
          <Sparkles className="size-12 bg-background/20 text-black p-3 rounded-xl" />
          <h2 className="text-3xl font-bold mb-2">Auto-Curation</h2>
          <p className="max-w-sm text-sm md:text-base hidden md:block">
            Machine learning that understands the context of your lifestyle, not
            just the vendor names. Every transaction is perfectly filed.
          </p>
        </div>
        <div className="bg-muted p-4 rounded-lg col-start-1 md:row-start-2 row-start-3 col-span-3 md:col-span-1 border border-background/50 space-y-5">
          <Wallet className="size-12 bg-background/20 text-black p-3 rounded-xl" />
          <h2 className="text-3xl font-bold mb-2">Intentional Budgeting</h2>
          <p className="max-w-sm text-sm md:text-base hidden md:block">
            Set targets that breathe. Our flexible boundaries allow for
            real-world fluctuation while maintaining the integrity of your
            long-term goals.
          </p>
        </div>
        <div className="bg-muted p-4 rounded-lg col-span-3 md:col-span-2 border border-background/50 space-y-5">
          <ShieldAlert className="size-12 bg-background/20 text-black p-3 rounded-xl" />
          <h2 className="text-3xl font-bold mb-2">Sovreign Security</h2>
          <p className="max-w-2xl text-sm md:text-base hidden md:block">
            Your data is yours alone. We employ 256-bit AES encryption and
            biometric "Ghost Protocols" to ensure your curation remains private
            and protected.
          </p>
        </div>
      </div>
    </section>
  );
}
export default page