import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Landing() {
  return (
    <div>
      Landing
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
