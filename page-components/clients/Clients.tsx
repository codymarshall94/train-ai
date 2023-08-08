import { columns } from "@/components/clients/columns";
import { DataTable } from "@/components/clients/data-table";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { TESTDATA } from "@/data/test-data";
import { User2 } from "lucide-react";
import React from "react";

export default function Clients() {
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
      <div className="flex justify-end p-4">
        <Button>Add Client</Button>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
