import React from "react";

export default function LandingSectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-md py-4 font-light text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
