import { create } from "zustand"

export const useIntersectingEvent = create((set, get) => ({
    intersectingEvent: null,
    updateIntersectingEvent: (value) => set(() => ({intersectingEvent: value}))
}))