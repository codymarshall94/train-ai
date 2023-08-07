import React from "react";
import LandingNavbar from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";

export default function Landing() {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
