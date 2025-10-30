"use client";

import { SearchIcon } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { columns } from "./columns";

const data = [
  {
    title: "Memory 1",
    createdAt: "2021-01-01",
  },
  {
    title: "Memory 2",
    createdAt: "2021-01-02",
  },
];

export default function MemoriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Memories</h1>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="flex gap-2">
          <Input placeholder="Search by title" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
