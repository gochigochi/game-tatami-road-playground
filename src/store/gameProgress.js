import { create } from "zustand"

export const useGameProgress = create((set, get) => ({
    gameCheckpoint: 0,
    updateGameCheckpoint: (value) => set({ gameCheckpoint: value })
}))