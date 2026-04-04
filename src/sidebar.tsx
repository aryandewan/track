"use client"

import { useOpenStore } from "@/config/store";
import { AudioWaveform, CircleUser, EllipsisVertical, LayoutDashboard, LucideIcon, Plus, ReceiptText, Settings, Wallet } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
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
      icon: LayoutDashboard,
    },
    {
      title: "Transactions",
      link: "/transactions",
      icon: ReceiptText,
    },
    {
      title: "Budgets",
      link: "/budgets",
      icon: Wallet,
    },
    {
      title: "Settings",
      link: "/settings",
      icon: Settings,
    },
  ] satisfies SidebarItem[],
};

const Sidebar = () => {
  const {data: session} = useSession()
  const open = useOpenStore((state) => state.open)

  return (
    <aside
      className={`h-dvh bg-foreground shrink-0 text-background flex flex-col ${open ? "w-60" : "w-0"} transition-[width] duration-200`}
    >
      <Link href="/">
        <div className="p-3 flex items-center justify-start">
          <AudioWaveform />
          <h1 className="text-2xl font-bold">TRACK</h1>
        </div>
      </Link>
      <hr />
      <div className="p-2 flex flex-col gap-1">
        {data.sidebarMain.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.link}
              className="hover:bg-background/10 px-2 py-1 rounded-lg flex items-center justify-start gap-2"
            >
              {Icon && <Icon className="size-4" />}
              <h1 className={`text-lg`}>{item.title}</h1>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col mt-auto w-full p-2">
        <div className="h-12 w-full flex items-center justify-start gap-1 px-2 rounded-xl cursor-pointer hover:bg-background/10">
          <Plus />
          <h1>Add Transactions</h1>
        </div>
        <div className="h-16 w-full flex items-center justify-start gap-1 px-2">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile Picture"
              className="rounded-full"
              width={32}
              height={32}
            />
          ) : (
            <CircleUser className="size-8" />
          )}
          {session?.user?.name ? (
            <h1 className="text-xl font-bold">{session.user.name}</h1>
          ) : (
            <h1>Guest</h1>
          )}
          <EllipsisVertical className="ml-auto cursor-pointer hover:bg-background/10 hover:rounded-lg p-1 size-8" />
        </div>
      </div>
    </aside>
  );
}
export default Sidebar