"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { outfit } from "@/config/fonts";
import { AudioWaveform } from "lucide-react";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname() as string;
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isFeaturesPage = pathname === "/features" || pathname.startsWith("/features/");
  const isSecurityPage = pathname === "/security" || pathname.startsWith("/security/");

  const handleSignUp = () => {
    setIsMenuOpen(false);
    router.push("/usersignup");
  }

  const handleLogin = () => {
    setIsMenuOpen(false);
    router.push("/userlogin");
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 1, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-[#FFFFFF] text-background fixed top-3 inset-x-5 ${outfit.className} rounded-full p-5 grid grid-cols-[1fr_auto_1fr] items-center`}
      >
        <Link
          href="/"
          className="text-xl font-bold cursor-pointer flex items-center gap-2 "
        >
          <AudioWaveform />
          TRACK
        </Link>
        <ul className="md:flex items-center gap-3 hidden">
          <Link
            href="/features"
            className={`cursor-pointer transition px-4 py-2 rounded-full ${
              isFeaturesPage
                ? "bg-background/20 text-primary"
                : "hover:text-primary hover:bg-background/10 active:bg-background/10"
            }`}
          >
            Features
          </Link>
          <Link
            href="/security"
            className={`cursor-pointer transition px-4 py-2 rounded-full ${
              isSecurityPage
                ? "bg-background/20 text-primary"
                : "hover:text-primary hover:bg-background/10 active:bg-background/10"
            }`}
          >
            Security
          </Link>
        </ul>
        <div className="md:flex items-center justify-end gap-3 hidden">
          <Button
            className="bg-transparent text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer"
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Button 
            className="bg-foreground text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
        <div className="md:hidden z-100 justify-self-end col-start-3">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="relative flex h-10 w-10 items-center justify-center"
          >
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-background transition duration-300 ${
                isMenuOpen ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-background transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-background transition duration-300 ${
                isMenuOpen ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
        <div
          className={`fixed inset-0 md:hidden box-border h-dvh bg-white p-4 z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } grid grid-rows-[1fr_auto_1fr]`}
        >
          <div className="flex flex-col row-start-2 gap-3">
            <Link
              href="/features"
              className={`cursor-pointer transition px-4 py-2 rounded-full ${
                isFeaturesPage
                  ? "bg-background/20 text-primary"
                  : "hover:text-primary hover:bg-background/10 active:bg-background/10"
              } self-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/security"
              className={`cursor-pointer transition px-4 py-2 rounded-full ${
                isSecurityPage
                  ? "bg-background/20 text-primary"
                  : "hover:text-primary hover:bg-background/10 active:bg-background/10"
              } self-center`}
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
          </div>
          <div className="w-full self-end row-start-3 space-y-3">
            <Button
              className="bg-transparent text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer w-full"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            <Button
              className="bg-foreground text-background px-4 py-2 rounded-full hover:bg-background/10 transition cursor-pointer w-full"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
export default Navbar
