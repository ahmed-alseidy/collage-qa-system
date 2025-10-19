"use client";

import { SearchIcon } from "lucide-react";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";

const data = [
  {
    name: "John Doe",
    nationalId: "1234567890123456",
    email: "example@email.com",
  },
  {
    name: "Jane Doe",
    nationalId: "1234567890123450",
    email: "example2@email.com",
  },
];

export default function GrantPermissionsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center">Grant Permissions</h1>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex gap-2">
          <Input placeholder="Search by name, or national id" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <DataTable columns={columns} data={data} />
        <div className="h-1" />
        <Separator />
        <Card>
          <CardHeader>
            <CardTitle>Permissions to grant</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Checkbox id="view" />
                <Label htmlFor="view">View</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="edit" />
                <Label htmlFor="edit">Edit</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="delete" />
                <Label htmlFor="delete">Delete</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="create" />
                <Label htmlFor="create">Create</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
