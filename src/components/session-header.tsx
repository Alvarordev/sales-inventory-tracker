"use client";

import { User } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import { usePanelStore } from "@/store/useStore";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const SessionHeader = () => {
  const isPanelOpen = usePanelStore((state) => state.isPanelOpen);
  const pathname = usePathname();

  const routes = [
    {
      pathname: "/admin/dashboard",
      title: "Dashboard",
    },
    {
      pathname: "/admin/sales",
      title: "Registro de ventas",
    },
    {
      pathname: "/admin/inventory",
      title: "Inventario",
    },
    {
      pathname: "/admin/clients",
      title: "Clientes",
    },
    {
      pathname: "/admin/route-sheets",
      title: "Hojas de ruta",
    },
  ];

  return (
    <header
      className={` p-6 flex justify-between bg-background z-10 fixed top-0 left-0 right-0 ${
        isPanelOpen ? "ml-60" : "ml-20"
      } transition-all`}
    >
      <span className="font-bold">
        {routes.map((route) => {
          return route.pathname === pathname ? route.title : "";
        })}
      </span>
      <div className="flex items-center">
        <Button variant={'ghost'} className="flex gap-2 items-center">
          <User />
          <span>Manolo - Administrador</span>
        </Button>

        <div className="pl-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default SessionHeader;
