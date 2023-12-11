'use client'

import { LogOut, PanelLeft } from "lucide-react";
import { Button } from "./ui/button";
import MainNav from "./main-nav";
import { usePanelStore } from "@/store/useStore";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isPanelOpen = usePanelStore((state) => state.isPanelOpen)
  const togglePanel = usePanelStore((state) => state.togglePanel)

  const supabase = createBrowserSupabaseClient();
  const router = useRouter()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <aside className={`fixed ${isPanelOpen ? 'w-60' : 'w-20'} top-0 left-0 bg-background h-full text-primary border-r-2 flex flex-col flex-grow transition-all`}>
      <header>
        <div className={`flex items-center ${isPanelOpen ? 'justify-between' : 'justify-center'} p-4`}>
          <span className={`${isPanelOpen ? '' : 'hidden'} text-xl font-bold`}>LOGO</span>

          <Button
            variant={"link"}
            className="text-primary p-0 transition-all hover:text-indigo-500"
            onClick={() => togglePanel()}
          >
            <PanelLeft />
          </Button>
        </div>
      </header>

      <nav className="flex flex-col gap-3 px-4 pt-6">
        <span className={`text-sm font-semibold ${isPanelOpen ? '' : 'text-center'}`}>Menu</span>
        <MainNav/>
      </nav>

      <footer className="flex flex-grow items-end py-3 px-4">
        <Button variant={'link'} className="flex gap-2 p-0 hover:text-indigo-500">
          <LogOut />
          <span onClick={handleSignOut} className={`${isPanelOpen ? '' : 'hidden'}`}>Cerrar Sesion</span>
        </Button>
      </footer>
    </aside>
  );
};

export default Navbar;
