import type { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Survey = {
  id: string;
  title: string;
  dateRecieved: string;
  from: string;
  deadline: string;
  status: string;
};

export const columns: ColumnDef<Survey>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "dateRecieved",
    header: "Date Recieved",
  },
  {
    accessorKey: "from",
    header: "From",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
      );
    },
  },
];
