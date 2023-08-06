"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Brain } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Power up your PT business with AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md: text-lg text-center">
          AI powered client management system that helps you manage your
          clients, and plan your sessions.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        <Card
          onClick={() => router.push("/generator")}
          className="p-4 border-black/4 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        >
          <div className="flex items-center gap-x-4">
            <div className="p-2 w-fit rounded-md">
              <Brain
                className={cn("w-8 h-8", "text-violet-500 bg-violet-500/10")}
              />
            </div>
            <div className="font-semibold">
              Generate a workout plan for your clients
            </div>
          </div>
          <ArrowRight className="w-5 h-5" />
        </Card>
      </div>
    </div>
  );
}
