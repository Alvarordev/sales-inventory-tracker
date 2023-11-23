import { User } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";

const SessionHeader = () => {
  return (
    <header className=" p-6 flex justify-between fixed top-0 left-0 right-0 ml-60">
      <span className="font-bold">Dashboard</span>
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
