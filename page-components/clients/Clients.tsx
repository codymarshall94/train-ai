"use client";

import { columns } from "@/components/clients/columns";
import { DataTable } from "@/components/clients/data-table";
import Heading from "@/components/heading";
import NewClientForm from "@/components/new-client-form";
import { Button } from "@/components/ui/button";
import { TESTDATA } from "@/data/test-data";
import { User2 } from "lucide-react";
import React, { useCallback, useState } from "react";

export default function Clients() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const data = TESTDATA;
  return (
    <div>
      <Heading
        title="Clients"
        description="Manage your clients"
        icon={User2}
        iconColor="text-amber-500"
        bgColor="bg-amber-500/10"
      />
      <div className="px-4 lg:px-8">
        <div className="flex justify-end py-4">
          <Button onClick={toggleOpen}>Add Client</Button>
        </div>
        <DataTable data={data} columns={columns} />
      </div>
      <NewClientForm open={open} toggleOpen={toggleOpen} />
    </div>
  );
}
