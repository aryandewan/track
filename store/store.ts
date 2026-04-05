import { create } from "zustand"

type OpenStore = {
    open: boolean,
    toggle: () => void
}

export const useOpenStore = create<OpenStore>((set) => ({
    open: true,
    toggle: () => {
        set((state) => ({open: !state.open}))
    }
}))