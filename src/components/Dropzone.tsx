import { useCallback } from 'react'
import { useStore } from '../store'

export function Dropzone() {
  const setImage = useStore((state) => state.setImage)

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      const img = new Image()
      img.onload = () => {
        setImage(url, img.width, img.height)
      }
      img.src = url
    }
  }, [setImage])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return (
    <div 
      onDrop={onDrop} 
      onDragOver={onDragOver}
      className="absolute inset-0 z-50 w-full h-full"
      style={{ pointerEvents: 'auto' }} // Ensure it catches events but lets clicks through if needed? 
      // Actually, if it's full screen z-50, it might block UI.
      // We should probably make it invisible but active only when dragging?
      // Or just make it the background layer?
      // The user said "invisible full-screen file handler".
      // If we put it at z-0 or z-10, behind UI but in front of canvas?
      // Or just make it transparent.
      // If it's z-50 it blocks the UI.
      // Let's make it z-0 but make sure it covers everything.
      // But UI needs to be clickable.
      // If UI is z-20, Dropzone z-10?
      // Let's try z-10.
    />
  )
}
