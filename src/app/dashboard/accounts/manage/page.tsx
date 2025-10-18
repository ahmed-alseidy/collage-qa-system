"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-center">Manage Accounts</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="flex gap-2">
          <Input placeholder="Search by name, email, or mobile" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <Table>
          <TableCaption>A list of all accounts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>National ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">John Doe</TableCell>
              <TableCell>example@email.com</TableCell>
              <TableCell>01010101010</TableCell>
              <TableCell>1234567890123456</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
