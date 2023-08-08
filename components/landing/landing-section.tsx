import React from "react";

export default function LandingSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-4 md:px-20 lg:px-32 py-20 bg-white">
      {children}
    </section>
  );
}
