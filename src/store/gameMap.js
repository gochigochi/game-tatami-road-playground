import { create } from 'zustand'

export const useGameMap = create((set) => ({
    gameMap: null,
    updateGameMap: (nextMap) => set({ gameMap: nextMap })
}))