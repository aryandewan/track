"use client"

import { mono, outfit } from "@/config/fonts";
import { AudioWaveform, LayoutDashboard, ReceiptText, Wallet, Settings, type LucideIcon } from "lucide-react";
import Link from "next/link";

type SidebarItem = {
  title: string;
  link: string;
  icon?: LucideIcon;
};

const data = {
    sidebarMain: [
        {
            title: "Overview",
            link: "/overview",
            icon: LayoutDashboard
        },
        {
            title: "Transactions",
            link: "/transactions",
            icon: ReceiptText
        },
        {
            title: "Budgets",
            link: "/budgets",
            icon: Wallet
        },
        {
            title: "Settings",
            link: "/settings",
            icon: Settings
        }
    ] satisfies SidebarItem[]
}


const Page = () => {
  return (
    <main className={`flex h-dvh ${outfit.className}`}>
      <aside className="h-dvh bg-foreground shrink-0 w-60 text-background flex flex-col">
        <Link
            href="/"
        >
          <div className="p-3 flex items-center justify-center">
            <AudioWaveform />
            <h1 className="text-3xl font-bold">TRACK</h1>
          </div>
        </Link>
        <hr />
        <div className="p-3 flex flex-col gap-5">
            {data.sidebarMain.map((item, i) => {
                const Icon = item.icon
                return (
                  <Link
                    key={i}
                    href={item.link}
                    className="hover:bg-background/10 p-3 rounded-xl flex items-center justify-start gap-2"
                  >
                    {Icon && <Icon fill="true"/>}
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                  </Link>
                );
            })}
        </div>
        <div className="bg-red-500 h-20"></div>
      </aside>
      <section className="min-h-dvh w-full overflow-y-auto no-scrollbar bg-[#f6f5ee]">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-background/50" />
            <div className="aspect-video rounded-xl bg-background/50" />
            <div className="aspect-video rounded-xl bg-background/50" />
          </div>
          <div className="min-h-dvh flex-1 rounded-xl bg-background/50" />
        </div>
      </section>
    </main>
  );
}
export default Page
