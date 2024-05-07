import { create } from "zustand";

interface CalendarRangerModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCalendarRangerModal = create<CalendarRangerModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCalendarRangerModal;
