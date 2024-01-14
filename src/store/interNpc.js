import { create } from "zustand"

export const useInterNpc = create((set, get) => ({
    interNpcData: {},
    updateInterNpcData: (value) => set(() => ({interNpcData: value}))
}))