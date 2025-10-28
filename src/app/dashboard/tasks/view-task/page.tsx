import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardView from "./components/card";

export default function ViewTask() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Task Status</h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="flex gap-2">
          <Input placeholder="Search by name, or national id" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <hr />
        <div className="space-y-6">
          <CardView />
          <CardView />
        </div>
      </div>
    </div>
  );
}
