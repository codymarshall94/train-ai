import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "./ui/progress";
import { STEPS as steps } from "@/data/form-data";
import FormReview from "./form-review";
import { PlanForm } from "@/types/form";
import { cn } from "@/lib/utils";

export default function GeneratorForm({
  handleGeneratePlan,
}: {
  handleGeneratePlan: (value: string) => void;
}) {
  const [step, setStep] = useState<number>(1);
  const [inReview, setInReview] = useState<boolean>(false);
  const [form, setForm] = useState<PlanForm>({
    client: "",
    goal: "",
    experience: "",
    days: "",
    equipment: [],
    sport: "",
    length: "",
    injuries: [],
  });

  const { formName, title, description, multiple, options } = steps[step];
  const progress = (step / Object.keys(steps).length) * 100;
  const selectedValues = form[formName as keyof PlanForm];

  const handleChangeMultiple = (value: string | string[]) => {
    const currentValues = Array.isArray(selectedValues) ? selectedValues : [];
    const newVal = currentValues.includes(value as string)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setForm((prev) => ({ ...prev, [formName as string]: newVal }));
  };

  const handleChange = (value: string | string[]) => {
    if (multiple) {
      handleChangeMultiple(value);
    } else {
      setForm((prev) => ({ ...prev, [formName as keyof PlanForm]: value }));
    }
  };

  const handleNext = () => {
    if (step === Object.keys(steps).length) {
      setInReview(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      return;
    } else if (inReview) {
      setInReview(false);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const { goal, experience, days, equipment, sport, length, injuries } = form;
    const prompt = `
    Create a workout plan for a client. Return a JSON with the following structure:
    {
      "workoutPlan": {
        "overview": "Here is an overview of the plan and what we are trying to achieve.",
        "length": "${length.toLowerCase()}",
        "goal": "${goal.toLowerCase()}",
        "experience": "${experience.toLowerCase()}",
        "daysPerWeek": "${days.toLowerCase()}",
        "equipment": ["${equipment.join('", "')}"],
        "sport": "${sport.toLowerCase()}",
        "injuries": ["${injuries.join('", "')}"],
        "weeks": [
          {
            "weekNumber": 1,
            "days": [
              {
                "dayNumber": 1,
                "exercises": [
                  {
                    "name": "Exercise 1",
                    "setsReps": "Sets x Reps",
                    "notes": "Here are some notes."
                  }
                  // Repeat similar structure for other exercises
                ]
              }
              // Repeat similar structure for other days
            ]
          }
          // Repeat similar structure for other weeks
        ]
      }
    }
    `;
    handleGeneratePlan(prompt);
  };

  const showReview = inReview;
  const showOptions = !inReview;

  return (
    <div>
      {showReview ? (
        <FormReview form={form} />
      ) : (
        <>
          <div className="py-4 space-y-4">
            <Progress value={progress} />
          </div>
          <h2 className="text-2xl font-bold text-center mt-8">{title}</h2>
          <p className="text-sm text-muted-foreground font-light text-center">
            {description}
          </p>
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-wrap justify-center gap-y-4 gap-x-4 w-full max-w-[600px]">
              {showOptions &&
                options.map((option) => (
                  <Card
                    key={option.value}
                    onClick={() => handleChange(option.value)}
                    className={cn(
                      "p-4 border-black/4 flex items-center justify-between hover:shadow-md transition cursor-pointer",
                      {
                        [cn("bg-[#0F172A]", "text-white")]:
                          selectedValues === option.value ||
                          (Array.isArray(selectedValues) &&
                            selectedValues.includes(option.value)),
                        "bg-white":
                          selectedValues !== option.value &&
                          (!Array.isArray(selectedValues) ||
                            !selectedValues.includes(option.value)),
                      }
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
        <Button
          onClick={showReview ? handleSubmit : handleNext}
          disabled={showOptions && !selectedValues}
        >
          {showReview ? "Generate" : "Next"}
        </Button>
      </div>
    </div>
  );
}
