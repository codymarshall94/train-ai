import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full flex flex-col py-4 gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/logoPink.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">Working out your plan...</p>
    </div>
  );
}
