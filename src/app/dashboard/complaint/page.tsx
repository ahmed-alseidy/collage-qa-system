import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function ComplaintPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Complaint</h1>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <div className="grid grid-cols-3 gap-4 h-96">
          {[
            "Suggestion 1",
            "Suggestion 2",
            "Suggestion 3",
            "Suggestion 4",
            "Suggestion 5",
            "Suggestion 6",
          ].map((complaint) => (
            <div
              key={complaint}
              className="border p-4 rounded-md flex flex-col justify-between"
            >
              <h2 className="text-lg font-bold">{complaint}</h2>
              <Button variant={"outline"}>View</Button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500">
          Make a report for the chosen one
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Report</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Report" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
