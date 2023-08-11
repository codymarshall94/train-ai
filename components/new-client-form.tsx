"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function NewClientForm({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [isMounted, setIsMounted] = useState<boolean>(false);

  //hack to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Sheet open={open} onOpenChange={toggleOpen}>
      <SheetContent side="right" className="p-0">
        <div>
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
            <h1 className="text-lg font-semibold">New Client</h1>
          </div>
        </div>
        <form className="flex flex-col p-4 space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-2 py-1"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Client</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
