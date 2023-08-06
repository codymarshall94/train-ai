import React from "react";

export default function FormReview({ form }: Record<string, any>) {
  const { goal, experience, days, equipment, sport, length, injuries } = form;
  const itemsToReview = [
    { name: "Goal", value: goal },
    { name: "Experience", value: experience },
    { name: "Days", value: days },
    { name: "Equipment", value: equipment.join(", ") },
    { name: "Sport", value: sport },
    { name: "Length", value: length },
    { name: "Injuries", value: injuries.join(", ") },
  ];

  return (
    <div className="px-4 lg:px-8 mb-8">
      <h2 className="text-2xl font-bold text-center my-2">
        Does this look correct?
      </h2>
      <p className="text-sm text-muted-foreground font-light text-center mb-6">
        If not, click back to change your answers. Otherwise, click generate to
        create your plan.
      </p>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          {itemsToReview.map((item) => (
            <div key={item.name}>
              <p className="text-sm text-muted-foreground font-light">
                {item.name}
              </p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
