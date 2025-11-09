"use client";

import { Plus } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { columns } from "./columns";

const data = [
  {
    id: "1",
    title: "Survey 1",
    dateRecieved: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    from: "John Doe",
    deadline: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    status: "Pending",
  },
];

export default function ViewSurveyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">View Survey</h1>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="flex justify-between">
          <ButtonGroup className="flex-1">
            <Button variant={"default"}>All</Button>
            <Button variant={"outline"}>Recent</Button>
            <Button variant={"outline"}>Recieved</Button>
            <Button variant={"outline"}>Submitted</Button>
            <Button variant={"outline"}>Draft</Button>
          </ButtonGroup>
          <Button>
            <Plus className="h-4 w-4" />
            Create
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
