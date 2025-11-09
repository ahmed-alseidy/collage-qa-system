import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

const data = [
  {
    id: "1",
    mission: "Mission 1",
    vision: "Vision 1",
    goals: "Goals 1",
    regulation: "regulation.pdf",
  },
];

export default function EditUnitDataPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Edit Unit Data</h1>
      <div className="max-w-3xl mx-auto space-y-6 my-6">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
