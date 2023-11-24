"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Product = {
    id: string;
    created_at: string;
    product_code: string;
    description: string;
    brand: string;
    current_stock: number;
    entrances: number;
    exits: number;
    price: number;
};

export const columns: ColumnDef<Product>[] = [
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
      return (
        <div className={`text-left`}>{row.getValue("description")}</div>
      );
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
        <div className={`text-left`}>{row.getValue("current_stock")}</div>
      );
    },
  },
  {
    accessorKey: "entrances",
    header: "Entradas",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("entrances")}</div>
      );
    },
  },
  {
    accessorKey: "exits",
    header: "Salidas",
    cell: ({ row }) => {
      return (
        <div className={`text-left`}>{row.getValue("exits")}</div>
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
