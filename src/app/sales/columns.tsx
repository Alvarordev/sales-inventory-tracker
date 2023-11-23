"use client"

import { ColumnDef } from "@tanstack/react-table"

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
    observaciones: string;
  };

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "created_at",
    header: "Fecha",
  },
  {
    accessorKey: "delivered_at",
    header: "Fecha de entrega",
  },
  {
    accessorKey: "total_amount",
    header: "Monto Total",
  },
  {
    accessorKey: "pending_balance",
    header: "Saldo Pendiente",
  },
  {
    accessorKey: "debt_aging",
    header: "Antiguedad de deuda",
  },
  {
    accessorKey: "payment_status",
    header: "Estado de pago",
  },
  {
    accessorKey: "payment_type",
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
    accessorKey: "observations",
    header: "Observaciones",
  },


]
