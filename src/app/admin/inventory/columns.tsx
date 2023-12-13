"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

export type Product = {
  id: string;
  created_at: string;
  product_code: string;
  description: string;
  brand: string;
  current_stock: number;
  price: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="w-full flex justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product_code",
    header: "Codigo",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("product_code")}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Descripcion",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "brand",
    header: "Marca",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("brand")}</div>;
    },
  },
  {
    accessorKey: "current_stock",
    header: "Stock Actual",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("current_stock")} uds</div>
      );
    },
  },

  {
    accessorKey: "price",
    header: "Precio",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PEN",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
];
