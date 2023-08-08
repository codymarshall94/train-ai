import React from "react";
import LandingNavbar from "@/components/landing/landing-navbar";
import LandingHero from "@/components/landing/landing-hero";
import LandingHowWorks from "@/components/landing/landing-how-works";
import LandingSection from "@/components/landing/landing-section";
import LandingSectionHeader from "@/components/landing/landing-section-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingSection>
        <LandingHowWorks />
      </LandingSection>
      <LandingSection>
        <LandingSectionHeader
          title="Ready to Simplify Your Training Process?"
          subtitle="Start building today."
        />
        <div className="flex justify-center mt-8">
          <Link href="/sign-in">
            <Button>Get Started</Button>
          </Link>
        </div>
      </LandingSection>
    </div>
  );
}
