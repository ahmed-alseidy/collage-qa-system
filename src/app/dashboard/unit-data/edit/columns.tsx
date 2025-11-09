import type { ColumnDef } from "@tanstack/react-table";

export type UnitData = {
  id: string;
  mission: string;
  vision: string;
  goals: string;
  regulation: string;
};

export const columns: ColumnDef<UnitData>[] = [
  {
    accessorKey: "mission",
    header: "Mission",
  },
  {
    accessorKey: "vision",
    header: "Vision",
  },
  {
    accessorKey: "goals",
    header: "Goals",
  },
  {
    accessorKey: "regulation",
    header: "Regulation",
  },
];
