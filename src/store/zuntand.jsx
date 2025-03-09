import { create } from "zustand";

export const useStore = create((set) => ({
  contact: { name: "", email: "", phone: "", message: "" },
  setContact: (data) => set((state) => ({ contact: { ...state.contact, ...data } })),
}));
