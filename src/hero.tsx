"use client"

import { Button } from "@/components/ui/button";
import { mono } from "@/config/fonts";
import { MoveRight } from "lucide-react";

const hero = () => {
  return (
      <section
        className={`h-dvh w-full flex flex-col items-center justify-center bg-[#F6F5EE] text-background ${mono.className}`}
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full h-full text-4xl md:text-6xl lg:text-7xl flex items-start lg:justify-center justify-end flex-col">
            <h1>
              YOUR <span className="text-blue-600">FINANCES.</span>
            </h1>
            <h1>
              CLEARLY <span className="text-blue-600">STRUCTURED.</span>
            </h1>
          </div>
          <div className="w-full h-full flex justify-center items-start lg:items-center">
            <div className="flex flex-col lg:flex-row items-end lg:items-center lg:justify-between p-2">
              <p className="text-2xl lg:text-4xl">
                A personal finance tracker built around clarity and structure.
              </p>
              <div className="flex items-end lg:items-center justify-center">
                <Button className="bg-background text-foreground rounded-full text-2xl px-8 py-3 gap-2 cursor-pointer">
                  START
                  <MoveRight className="size-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default hero
