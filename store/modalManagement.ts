import { create } from "zustand";

export type ModalType = "salary" | "limit" | "transactions" | null

interface  ModalManagement {
    isModalOpen: boolean,
    type: ModalType,
    openModal: (type: ModalType) => void,
    closeModal: () => void
}

export const useModalManagement = create<ModalManagement>((set) => ({
    isModalOpen: false,
    type: null,
    openModal: (type: ModalType) => set({ isModalOpen: true, type }),
    closeModal: () => set({ isModalOpen: false, type: null })
}))