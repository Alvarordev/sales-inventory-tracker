"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id: string;
  created_at: string;
  delivered_at: string;
  name: string;
  document_number: string;
  client_type: string;
  total_amount: number;
  pending_balance: number;
  debt_aging: number;
  payment_status: string;
  payment_method: string;
  payment_date: string;
  voucher: string;
  seller: string;
  delivery: string;
  district: string;
  observations: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
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
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "delivered_at",
    header: "Fecha de entrega",
  },
  {
    accessorKey: "total_amount",
    header: () => <div className="text-right">Monto Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PEN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "pending_balance",
    header: () => <div className="text-right">Saldo Pendiente</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("pending_balance"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "PEN",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "debt_aging",
    header: "Antiguedad deuda",
  },
  {
    accessorKey: "payment_status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Estado Pago
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          className={`text-center ${
            row.getValue("payment_status") === "CANCELADO"
              ? "text-blue-500"
              : "text-amber-500"
          } rounded-md  font-semibold`}
        >
          {row.getValue("payment_status")}
        </div>
      );
    },
  },
  {
    accessorKey: "payment_method",
    header: "Forma de pago",
  },
  {
    accessorKey: "name",
    header: "Nombre/Razon Social",
  },
  {
    accessorKey: "document_number",
    header: "RUC/DNI",
  },
  {
    accessorKey: "client_type",
    header: "Categoria",
  },
  {
    accessorKey: "voucher",
    header: "FAC/BOL/NV",
  },
  {
    accessorKey: "seller",
    header: "Vendedor",
  },
  {
    accessorKey: "delivery",
    header: "Entrega",
  },
  {
    accessorKey: "district",
    header: () => <div className="text-center">Distrito</div>,
    cell: ({ row }) => {
      return (
        <div
          className={`text-center`}
        >
          {row.getValue("district")}
        </div>
      );
    },
  },
  {
    accessorKey: "observations",
    header: "Observaciones",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
