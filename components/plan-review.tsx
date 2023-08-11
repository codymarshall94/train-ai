import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PlanDropDown({ plan }: { plan: Record<string, any> }) {
  const { overview, weeks } = plan.workoutPlan;

  return (
    <div className="px-4 lg:px-8 border border-black/4 rounded-md">
      <div className="py-4 space-y-4">
        <h2 className="text-2xl font-bold text-center">Overview</h2>
        <p className="text-sm text-muted-foreground font-light text-center">
          {overview}
        </p>
      </div>
      <div className="py-4 space-y-4">
        {weeks.map((week: Record<string, any>) => (
          <div className="py-4 space-y-4" key={week.weekNumber}>
            <h2 className="text-2xl font-bold text-center">
              Week {week.weekNumber}
            </h2>
            {week.days.map((day: Record<string, any>) => (
              <Accordion type="single" collapsible key={day.dayNumber}>
                <AccordionItem value={day.dayNumber}>
                  <AccordionTrigger className="py-4 space-y-4">
                    <h2 className="text-2xl font-bold text-center">
                      Day {day.dayNumber}
                    </h2>
                  </AccordionTrigger>
                  {day.exercises.map((exercise: Record<string, any>) => (
                    <AccordionContent key={exercise.name}>
                      <div className="py-4 space-y-4">
                        <h2 className="text-2xl font-bold text-center">
                          {exercise.name}
                        </h2>
                        <p className="text-sm text-muted-foreground font-light text-center">
                          {exercise.setsReps}
                        </p>
                        <p className="text-sm text-muted-foreground font-light text-center">
                          {exercise.notes}
                        </p>
                      </div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
