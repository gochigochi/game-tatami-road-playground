import { create } from 'zustand'

export const useGameState = create((set) => ({
    gameState: "PLAY",
    updateGameState: (newState) => set({ gameState: newState })
}))