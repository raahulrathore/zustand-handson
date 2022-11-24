import create from "zustand";

export const useStore = create((set) => ({
  votes: 0,
  addVote: () => set((state) => ({ votes: state.votes + 1 })),
  subtractVote: () =>
    set((state) => ({ votes: state.votes > 0 ? state.votes - 1 : 0 }))
}));
