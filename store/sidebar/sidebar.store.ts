import { create } from "zustand"

interface SidebarState {
    expanded: boolean
    toggleExpended: () => void
}

export const useSidebarStore = create<SidebarState>()((set) => ({
    expanded: false,
    toggleExpended: () => set((state) => ({expanded: !state.expanded}))
}))