"use client";

import { usePanelStore } from "@/store/useStore";
import {
  Box,
  FileText,
  LayoutDashboard,
  MapPinned,
  ShoppingBag,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();
  const isPanelOpen = usePanelStore((state) => state.isPanelOpen)

  const routes = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard />,
      active: `${pathname === "/admin/dashboard" ? "bg-muted text-indigo-500" : ""}`,
    },
    {
      title: "Ventas",
      path: "/admin/sales",
      icon: <ShoppingBag />,
      active: `${pathname === "/admin/sales" ? "bg-muted text-indigo-500" : ""}`,
    },
    {
      title: "Inventario",
      path: "/admin/inventory",
      icon: <Box />,
      active: `${pathname === "/admin/inventory" ? "bg-muted text-indigo-500" : ""}`,
    },
    {
      title: "Clientes",
      path: "/admin/clients",
      icon: <Users2 />,
      active: `${pathname === "/admin/clients" ? "bg-muted text-indigo-500" : ""}`,
    },
    {
      title: "Hojas De Ruta",
      path: "/admin/route-sheets",
      icon: <MapPinned />,
      active: `${pathname === "/admin/route-sheets" ? "bg-muted text-indigo-500" : ""}`,
    },
    {
      title: "Facturación",
      path: "/admin/billing",
      icon: <FileText />,
      active: `${pathname === "/billing" ? "bg-muted text-indigo-500" : ""}`,
    },
  ];

  return (
    <ul className="flex flex-col gap-1">
      {routes.map(({ title, path, icon, active }) => (
        <li key={path}>
          <Link
            href={path}
            className={`${active} flex py-2 gap-2 ${isPanelOpen ? '' : 'justify-center'} px-2 hover:text-indigo-500 rounded-md`}
          >
            {icon}
            <span className={`${isPanelOpen ? '' : 'hidden'}`}>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
