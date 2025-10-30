"use client";

import { Plus } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { columns } from "./columns";

const data = [
  {
    standard: "Standard 1",
    indicator: "Indicator 1",
    practice: "Practice 1",
  },
  {
    standard: "Standard 2",
    indicator: "Indicator 2",
    practice: "Practice 2",
  },
];

export default function InstitutionalStandardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center">Institutional Standard</h1>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <Plus className="h-4 w-4" />
                Add Standard
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Standard</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
