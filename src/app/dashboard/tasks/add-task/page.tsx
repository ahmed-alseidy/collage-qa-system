import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddTask() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center">Assign Task</h1>
      </div>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div>
          <h2>Task Name:</h2>
          <Input placeholder="Task Name" />
        </div>
        <div>
          <h2>Assign to:</h2>
          <Input placeholder="User 1" />
        </div>
        <div>
          <h2>Program Name:</h2>
          <Input placeholder="Program 1" />
        </div>
        <div>
          <h2>Indicator Name:</h2>
          <Input placeholder="0 Selected" />
        </div>
        <div>
          <h2>Practice Name:</h2>
          <Input placeholder="0 Selected" />
        </div>
        <div>
          <h2>Deadline of Task:</h2>
          <Input />
        </div>
        <div>
          <h2>Task Status:</h2>
          <Input />
        </div>
        <div>
          <h2>Note:</h2>
          <Input className="h-24" />
        </div>
        <div>
          <Button className="px-8">Choose File</Button>
        </div>
        <div className="text-center">
          <Button>Add Task</Button>
        </div>
      </div>
    </div>
  );
}
