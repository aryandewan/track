"use client";

import { useOpenStore } from "@/store/store";
import { useModalManagement } from "@/store/modalManagement";
import {
  AudioWaveform,
  CircleUser,
  LayoutDashboard,
  LucideIcon,
  Plus,
  ReceiptText,
  Settings,
  Wallet,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarItem = {
  title: string;
  link: string;
  icon?: LucideIcon;
};

const data = {
  sidebarMain: [
    {
      title: "Dashboard",
      link: "/dashboard",
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

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname() as string;
  const { data: session } = useSession();
  const open = useOpenStore((state) => state.open);
  const { openModal } = useModalManagement();
  return (
    <div
      className={`h-fit bg-foreground text-background flex flex-col justify-center ${open ? "w-16 p-2 mx-2" : "w-0 p-0 mx-0"} transition-[width] duration-200 gap-1 rounded-full ${className}`}
    >
      <div className="flex flex-col gap-1">
        <div className="p-3 flex items-center justify-start text-white bg-linear-to-t from-[#EB5528] to-[#FE9164] rounded-full">
          <AudioWaveform />
        </div>
        {data.sidebarMain.map((item, i) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.link || pathname.startsWith(`${item.link}/`);
          return (
            <Link
              key={i}
              href={item.link}
              className={`h-12 w-full flex items-center justify-center gap-1 px-2 rounded-full cursor-pointer hover:bg-background hover:text-white 
                ${isActive ? "bg-background text-white" : ""}
              `}
            >
              {Icon && <Icon />}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col w-full gap-1">
        <div 
          onClick={() => openModal("transactions")}
          className="h-12 w-full flex items-center justify-center px-2 rounded-full cursor-pointer hover:bg-background hover:text-white">
          <Plus />
        </div>
        <div className="flex items-center justify-center">
          {session?.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile Picture"
              className="rounded-full cursor-pointer border-2 border-[#EB5528]/50"
              width={50}
              height={50}
            />
          ) : (
            <CircleUser className="size-10" />
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
