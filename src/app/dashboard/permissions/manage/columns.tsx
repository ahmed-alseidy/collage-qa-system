"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DotSquare, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Permission = {
  name: string;
  description: string;
  createdAt: string;
};

export const columns: ColumnDef<Permission>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <Button
          variant="outline"
          className="hover:bg-destructive/90 hover:text-destructive-foreground size-7"
          size={"icon"}
        >
          <Trash />
        </Button>
      );
    },
  },
];
