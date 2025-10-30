import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CardView from "./components/card";

export default function CreateFile() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Create File</h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="flex gap-2">
          <Input placeholder="Select File Type" />
          <Button>Next</Button>
        </div>
        <hr />
        <div className="space-y-6">
          <CardView />
          <CardView />
          <CardView />
        </div>
      </div>
    </div>
  );
}
