"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
const font = Montserrat({ weight: "600", subsets: ["latin"] });

export default function LandingNavbar() {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logoPink.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          tr<span className="text-[#B03170]">AI</span>n
        </h1>
      </Link>
      <div className="flex items-center space-x-4">
        {isSignedIn || isLoaded ? (
          <Link href="/dashboard">
            <Button className="text-sm md:text-lg p-4 md:p-6 rounded-full font-semibold bg-[#B03170] hover:bg-[#A02E66]">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button className="text-sm md:text-lg p-4 md:p-6 rounded-full font-semibold">
              Login
            </Button>
            <Link href="/sign-up">
              <Button className="text-sm md:text-lg p-4 md:p-6 rounded-full font-semibold bg-[#B03170] hover:bg-[#A02E66]">
                Sign Up
              </Button>
            </Link>
          </Link>
        )}
      </div>
    </nav>
  );
}
