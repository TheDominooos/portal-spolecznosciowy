import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: localStorage.getItem("token"),
  setToken: (newToken) => set((state) => ({ token: newToken })),
}));

export default useTokenStore;
