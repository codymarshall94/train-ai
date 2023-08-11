import React from "react";

export default function PlanText({ plan }: { plan: Record<string, any> }) {
  const {
    overview,
    weeks,
  } = plan.workoutPlan;

  return (
    <div className="px-4 lg:px-8 border border-black/4 rounded-md">
      <div className="py-4 space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-sm text-muted-foreground font-light">
          {overview}
        </p>
      </div>
      <div className="py-4 space-y-4">
        {weeks.map((week: Record<string, any>) => (
          <div className="py-4 space-y-4" key={week.weekNumber}>
            <h2 className="text-2xl font-bold">
              Week {week.weekNumber}
            </h2>
            {week.days.map((day: Record<string, any>) => (
              <div key={day.dayNumber}>
                <h2 className="text-2xl font-bold">
                  Day {day.dayNumber}
                </h2>
                {day.exercises.map((exercise: Record<string, any>) => (
                  <div className="py-4 space-y-2" key={exercise.name}>
                    <h2 className="text-lg font-semibold">
                      {exercise.name}
                    </h2>
                    <p className="text-sm text-muted-foreground font-light">
                      Sets x Reps: {exercise.setsReps}
                    </p>
                    <p className="text-sm text-muted-foreground font-light">
                      Notes: {exercise.notes}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
