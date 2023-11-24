'use client'

import { usePanelStore } from "@/store/useStore";
import SessionHeader from "./session-header";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className}) => {
  const isPanelOpen = usePanelStore((state) => state.isPanelOpen)

  return (
    <main className={`relative flex flex-col min-h-screen ${isPanelOpen ? 'ml-60' : 'ml-20'} ${className} pt-24 px-6 transition-all`}>
      <SessionHeader />
      {children}
    </main>
  );
};

export default Container;
