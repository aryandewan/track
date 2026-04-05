"use client"

import { Button } from "@/components/ui/button";
import { mono } from "@/config/fonts";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const hero = () => {
  return (
    <section
      className={`h-dvh w-full grid grid-cols-3 grid-rows-3 bg-[#F6F5EE] text-background ${mono.className}`}
    >
      <div className="w-full h-full text-4xl md:text-7xl flex justify-end flex-col row-span-1 col-span-2 font-bold p-3 overflow-hidden">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 1, y: "110%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            YOUR <span className="text-blue-600">FINANCES.</span>
          </motion.h1>
        </div>
        <motion.h1
          initial={{ opacity: 1, y: "110%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          CLEARLY <span className="text-blue-600">STRUCTURED.</span>
        </motion.h1>
      </div>
      <div className="w-full h-full flex lg:items-center row-span-1 row-start-2 col-start-3 p-3 overflow-hidden">
        <motion.p
          initial={{ opacity: 1, y: "110%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl lg:text-3xl text-right self-end tracking-tighter"
        >
          A personal finance tracker built around clarity and structure
        </motion.p>
      </div>
      <div className="flex justify-end row-start-3 col-start-3 p-3 h-fit">
        <div className="overflow-hidden">
          <motion.button
            initial={{ opacity: 1, y: "110%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="bg-background text-foreground rounded-full text-2xl px-8! py-3! gap-2 cursor-pointer self-start flex items-center justify-center"
          >
            START
            <MoveRight className="size-7" />
          </motion.button>
        </div>
      </div>
      <div className="w-full h-full row-start-2 row-span-2 col-start-2 p-3 overflow-hidden">
        <motion.div 
          initial={{ opacity: 1, y: "110%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          className="w-full h-full overflow-hidden rounded-4xl">
          <Image
            src="/images/1image.jpg"
            width={1000}
            height={1000}
            alt="Hero Image"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div className="w-full h-full row-start-3 row-span-1 col-start-1 p-3 overflow-hidden">
        <motion.div 
          initial={{ opacity: 1, y: "110%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.25 }}
          className="w-full h-full overflow-hidden rounded-4xl">
          <Image
            src="/images/Overview.jpg"
            width={1500}
            height={1500}
            alt="Hero Image"
            className="object-fit"
          />
        </motion.div>
      </div>
    </section>
  );
}
export default hero
