"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTable } from "../../../../components/data-table";
import { columns } from "./columns";

const data = [
  {
    name: "Permission 1",
    description: "Description 1",
    createdAt: "2021-01-01",
  },
  {
    name: "Permission 2",
    description: "Description 2",
    createdAt: "2021-01-02",
  },
  {
    name: "Permission 3",
    description: "Description 3",
    createdAt: "2021-01-03",
  },
];

export default function ManagePermissionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center">Manage Permissions</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex gap-2">
          <Input placeholder="Create a new permission" />
          <Button variant="default">
            <Plus />
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
