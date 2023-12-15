"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type Client = {
  id: string;
  created_at: string;
  document_type: string;
  document_number: number;
  name: string;
  comercial_name: string;
  address: string;
  delivery_address: string;
  district: string;
  contact_name: string;
  phone_number: string;
  client_type: string;
  seller: string;
};

export const columns: ColumnDef<Client>[] = [
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
    accessorKey: "document_type",
    header: "Tipo de documento",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("document_type")}</div>;
    },
  },
  {
    accessorKey: "document_number",
    header: "N° documento",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("document_number")}</div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("name")}</div>;
    },
  },

  {
    accessorKey: "comercial_name",
    header: "Nombre comercial",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("comercial_name")}</div>
      );
    },
  },
  {
    accessorKey: "address",
    header: "Dirección",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("address")}</div>;
    },
  },
  {
    accessorKey: "delivery_address",
    header: "Dirección entrega",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("delivery_address")}</div>
      );
    },
  },
  {
    accessorKey: "district",
    header: "Distrito",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("district")}</div>;
    },
  },
  {
    accessorKey: "contact_name",
    header: "Contacto",
  },
  {
    accessorKey: "phone_number",
    header: "Teléfono",
  },
  {
    accessorKey: "client_type",
    header: "Tipo de cliente",
  },
  {
    accessorKey: "seller",
    header: "Vendedor",
  },
];
