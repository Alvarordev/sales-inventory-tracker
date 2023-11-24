"use client";

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
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "document_type",
    header: "Tipo de Documento",
    cell: ({ row }) => {
      return <div className={`text-left`}>{row.getValue("document_type")}</div>;
    },
  },
  {
    accessorKey: "document_number",
    header: "Documento",
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
    accessorKey: "district",
    header: "Distrito",
  },
  {
    accessorKey: "contact_name",
    header: "Nombre contact",
  },
  {
    accessorKey: "phone_number",
    header: "Numero contacto",
  },
  {
    accessorKey: "client_type",
    header: "Categoria",
  },
];
