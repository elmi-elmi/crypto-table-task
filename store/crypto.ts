import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CryptoStore {
  currentPage: number;
  totalLoaded: number;
  isInitialized: boolean;
  setCurrentPage: (page: number) => void;
  setTotalLoaded: (total: number) => void;
  incrementTotalLoaded: (count: number) => void;
  setInitialized: (initialized: boolean) => void;
  reset: () => void;
}

const initialState = {
  currentPage: 1,
  totalLoaded: 0,
  isInitialized: false,
};

export const useCryptoStore = create<CryptoStore>()(
  devtools(
    (set) => ({
      ...initialState,

      setCurrentPage: (page) =>
        set({ currentPage: page }, false, "setCurrentPage"),

      setTotalLoaded: (total) =>
        set({ totalLoaded: total }, false, "setTotalLoaded"),

      incrementTotalLoaded: (count) =>
        set(
          (state) => ({ totalLoaded: state.totalLoaded + count }),
          false,
          "incrementTotalLoaded"
        ),

      setInitialized: (initialized) =>
        set({ isInitialized: initialized }, false, "setInitialized"),

      reset: () => set(initialState, false, "reset"),
    }),
    { name: "crypto-store" }
  )
);
