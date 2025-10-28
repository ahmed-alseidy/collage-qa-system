import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CardView() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <p>Due Date: 28-7-2025</p>
          </div>
          <div className="flex items-center">
            <h2>Status:</h2>
            <Input placeholder="Not Started" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>View Files</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
