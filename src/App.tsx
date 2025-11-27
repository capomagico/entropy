import { Stage } from './components/Stage'
import { Dropzone } from './components/Dropzone'
import { LabOverlay } from './components/UI'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-entropy-void text-white font-mono selection:bg-entropy-acid selection:text-black">
      <Stage />
      <Dropzone />
      <LabOverlay />
    </div>
  )
}

export default App
