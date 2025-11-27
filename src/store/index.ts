import { create } from 'zustand'

interface AppState {
  imageURL: string | null
  imageDimensions: { width: number; height: number }
  entropyLevel: number
  noiseScale: number
  isExporting: boolean
  
  setImage: (url: string, width: number, height: number) => void
  setEntropyLevel: (level: number) => void
  setNoiseScale: (scale: number) => void
  setIsExporting: (isExporting: boolean) => void
}

export const useStore = create<AppState>((set) => ({
  imageURL: null,
  imageDimensions: { width: 0, height: 0 },
  entropyLevel: 0.0,
  noiseScale: 1.0,
  isExporting: false,

  setImage: (url, width, height) => set({ imageURL: url, imageDimensions: { width, height } }),
  setEntropyLevel: (level) => set({ entropyLevel: level }),
  setNoiseScale: (scale) => set({ noiseScale: scale }),
  setIsExporting: (isExporting) => set({ isExporting }),
}))
