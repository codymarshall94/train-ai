"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import LandingSectionHeader from "./landing-section-header";

const howTabs = [
  {
    id: 0,
    title: "INPUT CLIENT DATA",
    description: "Enter your client's fitness level, goals, and preferences.",
    image: "/landing-how-works-1.png",
  },
  {
    id: 1,
    title: "AI GENERATES PLAN",
    description: "Our AI creates a personalized workout plan.",
    image: "/landing-how-works-1.png",
  },
  {
    id: 2,
    title: "MANAGE YOUR CLIENTS",
    description: "Manage your clients and their workout plans.",
    image: "/landing-how-works-1.png",
  },
];

export default function LandingHowWorks() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  return (
    <>
      <LandingSectionHeader
        title="How it works"
        subtitle="Simplify your training process with AI"
      />
      <div className="flex flex-col items-center lg:flex-row justify-between mt-20 max-w-5xl mx-auto">
        <div>
          <Image
            src={howTabs[activeTab].image}
            alt="How it works"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-8 mt-8 lg:mt-0">
          {howTabs.map((tab) => (
            <div
              key={tab.title}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "flex items-center space-x-4 rounded cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md",
                activeTab === tab.id
                  ? "text-[#4D64F2] bg-[#CAD0FB]"
                  : "text-black hover:bg-[#CCCFF0]"
              )}
            >
              <div className="p-4">
                <h3 className="text-sm font-bold">{tab.title}</h3>
                <p className="text-sm font-light">{tab.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
