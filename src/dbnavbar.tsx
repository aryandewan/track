"use client"

import { useOpenStore } from "@/config/store"
import { PanelLeft } from "lucide-react"

export const Dbnavbar = () => {
    const openToggle = useOpenStore((state) => state.toggle)

    return (
        <nav className="h-14 shrink-0 bg-[#f6f5ee] w-full sticky top-0 flex flex-1 items-center px-4">
            <PanelLeft className="text-background cursor-pointer size-10 p-2 hover:bg-background/10 hover:rounded-lg" onClick={openToggle}/>
        </nav>
    )
}