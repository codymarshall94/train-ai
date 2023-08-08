"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";

export type Client = {
  id: number;
  name: string;
  email: string;
  lastUpdated: string;
  currentPlan: boolean;
  planId: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
  {
    accessorKey: "currentPlan",
    header: "Current Plan",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          {row.original.currentPlan ? (
            <Badge>Active</Badge>
          ) : (
            <Badge variant="secondary">Inactive</Badge>
          )}
        </div>
      );
    },
  },
];
