import { create } from "zustand";

interface CheckCodeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCheckCodeModal = create<CheckCodeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCheckCodeModal;
