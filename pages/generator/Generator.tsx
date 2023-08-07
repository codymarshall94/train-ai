"use client";
/* eslint-disable react/no-unescaped-entities */

import GeneratorForm from "@/components/generator-form";
import Heading from "@/components/heading";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import React, { useState } from "react";

export default function Generator() {
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGeneratePlan = () => {
    setIsLoading(true);
  };

  return (
    <>
      <Heading
        title="Generator"
        description="Create a workout plan for your clients"
        icon={Brain}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 md:px-20 lg:px-32">
        <div className="px-4 lg:px-8 border border-black/4 rounded-md">
          {isLoading ? (
            <Loading />
          ) : isStarted ? (
            <GeneratorForm handleGeneratePlan={handleGeneratePlan} />
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mt-8">
                Generate a workout plan for your clients
              </h2>
              <p className="text-sm text-muted-foreground font-light text-center">
                Answer a few questions and we'll generate a workout plan for
                your clients
              </p>
              <div className="flex items-center justify-center h-96">
                <Button onClick={() => setIsStarted(true)}>Start Form</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}