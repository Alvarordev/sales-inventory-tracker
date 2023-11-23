import { LogOut, PanelLeft } from "lucide-react";
import { Button } from "./ui/button";
import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <aside className="fixed w-60 top-0 left-0 bg-background h-full text-primary border-r-2 flex flex-col flex-grow">
      <header>
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold">LOGO</span>

          <Button
            variant={"link"}
            className="text-primary p-0 transition-all hover:text-indigo-500"
          >
            <PanelLeft />
          </Button>
        </div>
      </header>

      <nav className="flex flex-col gap-3 px-4 pt-6">
        <span className="text-sm font-semibold">Menu</span>
        <MainNav />
      </nav>

      <footer className="flex flex-grow items-end py-3 px-4">
        <Button variant={'link'} className="flex gap-2 p-0 hover:text-indigo-500">
          <LogOut />
          <span>Cerrar Sesion</span>
        </Button>
      </footer>
    </aside>
  );
};

export default Navbar;
