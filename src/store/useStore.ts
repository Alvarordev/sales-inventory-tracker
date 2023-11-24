import { create } from "zustand";

type Panel = {
  isPanelOpen: boolean;
  togglePanel: () => void;
};

export const usePanelStore = create<Panel>((set) => ({
  isPanelOpen: true,
  togglePanel: () => set((state) => ({ isPanelOpen: !state.isPanelOpen })),
}));
