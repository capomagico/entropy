import { Stage } from './components/Stage'
import { LabOverlay } from './components/UI'
import { useStore } from './store'
import { useEffect } from 'react'

function App() {
  const currentTool = useStore((state) => state.currentTool)
  const undo = useStore((state) => state.undo)
  const redo = useStore((state) => state.redo)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault()
        if (e.shiftKey) {
          redo()
        } else {
          undo()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [undo, redo])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white selection:bg-[#f27200] selection:text-white">
      {currentTool === 'DITHER' && <Stage />}
      <LabOverlay />
    </div>
  )
}

export default App
