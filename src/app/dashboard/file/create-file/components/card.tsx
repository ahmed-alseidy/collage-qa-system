import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardView() {
  return (
    <div>
      <Card className="p-16">
        <CardHeader className="text-center">
          <CardTitle>Template 1</CardTitle>
        </CardHeader>
        <CardFooter className="justify-center">
          <div className="flex gap-4">
            <Button>View</Button>
            <Button>Download</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
