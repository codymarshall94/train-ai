import React from "react";

export default function FormReview({ form }: Record<string, any>) {
  const { goal, experience, days, equipment, sport, length, injuries } = form;
  return (
    <div className="px-4 lg:px-8 mb-8">
      <h2 className="text-2xl font-bold text-center my-8">
        Does this look correct?
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h3 className="text-sm text-muted-foreground font-light">Goal</h3>
          <p className="capitalize">{goal}</p>
          <h3 className="text-sm text-muted-foreground font-light">Experience</h3>
          <p className="capitalize">{experience}</p>
          <h3 className="text-sm text-muted-foreground font-light">Days</h3>
          <p className="capitalize">{days}</p>
          <h3 className="text-sm text-muted-foreground font-light">Equipment</h3>
          <p className="capitalize">{equipment.join(", ")}</p>
          <h3 className="text-sm text-muted-foreground font-light">Sport</h3>
          <p className="capitalize">{sport}</p>
          <h3 className="text-sm text-muted-foreground font-light">Length</h3>
          <p className="capitalize">{length}</p>
          <h3 className="text-sm text-muted-foreground font-light">Injuries</h3>
          <p className="capitalize">{injuries.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
