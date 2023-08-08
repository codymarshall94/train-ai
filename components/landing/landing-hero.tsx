"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function LandingHero() {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white bg-[#111827] font-bold py-36 text-center space-y-5 h-screen">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>AI Workout Generator</h1>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Less workload for personal trainers. More personalized workouts for
        clients.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-[#B03170] hover:bg-[#A02E66]">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="relative mx-auto w-4/6 h-4/6">
        <Image
          src="/home.svg"
          alt="Hero Image"
          style={{ objectFit: "contain" }}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          layout="fill"
        />
      </div>
    </div>
  );
}
