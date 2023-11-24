'use client'

import { User } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import { usePanelStore } from "@/store/useStore";

const SessionHeader = () => {
  const isPanelOpen = usePanelStore((state) => state.isPanelOpen)

  return (
    <header className={` p-6 flex justify-between fixed top-0 left-0 right-0 ${isPanelOpen ? 'ml-60' : 'ml-20'}`}>
      <span className="font-bold">Registro Ventas</span>
      <div className="flex gap-2 items-center">
        <User />
        <span>Manolo - Administrador</span>

        <div className="pl-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default SessionHeader;
