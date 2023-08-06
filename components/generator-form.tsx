import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "./ui/progress";
import { STEPS as steps } from "@/data/form-data";
import FormReview from "./form-review";

interface Form {
  goal: string;
  experience: string;
  days: string;
  equipment: string[];
  sport: string;
  length: string;
  injuries: string[];
}

export default function GeneratorForm({
  handleGeneratePlan,
}: {
  handleGeneratePlan: () => void;
}) {
  const [step, setStep] = useState<number>(1);
  const [inReview, setInReview] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    goal: "",
    experience: "",
    days: "",
    equipment: [],
    sport: "",
    length: "",
    injuries: [],
  });

  const currentStepKey = steps[step as keyof typeof steps];
  const progress = (step / Object.keys(steps).length) * 100;

  const handleChangeMultiple = (value: string) => {
    let currentValues = form[
      currentStepKey.formName as keyof typeof form
    ] as string[];
    let newVal: string[] = [];
    if (currentValues.includes(value)) {
      newVal = currentValues.filter((v: string) => v !== value);
    } else {
      newVal = [...(currentValues as string[]), value];
    }
    setForm((prev) => ({
      ...prev,
      [currentStepKey.formName as string]: newVal,
    }));
  };

  const handleChange = (value: string) => {
    if (currentStepKey.multiple) {
      handleChangeMultiple(value);
    } else {
      setForm((prev) => ({
        ...prev,
        [currentStepKey.formName as string]: value,
      }));
    }
  };

  const handleNext = () => {
    if (step === Object.keys(steps).length) {
      setInReview(true);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      return;
    } else if (inReview) {
      setInReview(false);
      return;
    }
    setStep((prev) => prev - 1);
  };

  return (
    <div>
      {inReview ? (
        <FormReview form={form} />
      ) : (
        <>
          <div className="py-4 space-y-4">
            <Progress value={progress} />
          </div>
          <h2 className="text-2xl font-bold text-center mt-8">
            {currentStepKey.title}
          </h2>
          <p className="text-sm text-muted-foreground font-light text-center">
            {currentStepKey.description}
          </p>
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-wrap justify-center gap-y-4 gap-x-4 w-full max-w-[600px]">
              {currentStepKey.options.map((option) => (
                <Card
                  key={option.value}
                  onClick={() => handleChange(option.value)}
                  className={cn(
                    "p-4 border-black/4 flex items-center justify-between hover:shadow-md transition cursor-pointer",
                    form[currentStepKey.formName as keyof typeof form] ===
                      option.value ||
                      form[
                        currentStepKey.formName as keyof typeof form
                      ].includes(option.value)
                      ? "bg-[#0F172A] text-white"
                      : "bg-white"
                  )}
                >
                  <div className="flex items-center gap-x-4">
                    <div className="font-semibold">{option.title}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
      <div className="flex justify-between pb-4 lg:px-8">
        <Button onClick={handleBack}>{step === 1 ? "Exit" : "Back"}</Button>
        {inReview ? (
          <Button
            className="bg-gradient-to-r from-pink-700 to-blue-300 hover:from-pink-500 hover:to-blue-200 transition text-white font-semibold"
            onClick={handleGeneratePlan}
          >
            Generate
          </Button>
        ) : (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
    </div>
  );
}
