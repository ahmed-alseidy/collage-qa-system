import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UploadFile() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Upload File</h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="space-y-6">
          <div>
            <h2>Select File Category:</h2>
            <Input placeholder="Institutional" />
          </div>
          <div>
            <h2>Select standard:</h2>
            <Input placeholder="Standard 1" />
          </div>
          <div>
            <h2>Select Practice:</h2>
            <Input placeholder="Practice B" />
          </div>
        </div>
        <div className="flex justify-between">
          <Button className="px-4">Choose File</Button>
          <Button className="px-20">Upload</Button>
        </div>
      </div>
    </div>
  );
}
