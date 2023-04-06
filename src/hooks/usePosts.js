import { create } from "zustand";

const usePostStore = create((set) => ({
  posts: [],
  setPosts: (newPost) => set((state) => ({ posts: newPost })),
}));

export default usePostStore;
