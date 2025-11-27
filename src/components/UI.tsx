import { useStore } from '../store'

export function LabOverlay() {
  const entropyLevel = useStore((state) => state.entropyLevel)
  const noiseScale = useStore((state) => state.noiseScale)
  const setEntropyLevel = useStore((state) => state.setEntropyLevel)
  const setNoiseScale = useStore((state) => state.setNoiseScale)
  const setIsExporting = useStore((state) => state.setIsExporting)

  const handleExport = () => {
    setIsExporting(true)
  }

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-20 font-mono text-xs uppercase tracking-widest text-white mix-blend-difference">
      {/* Top Bar */}
      <div className="flex justify-between items-start w-full border-b border-entropy-border pb-4 bg-entropy-glass/50 backdrop-blur-sm pointer-events-auto">
        <div className="flex flex-col">
          <h1 className="font-display text-2xl font-bold tracking-tighter text-white">ENTROPY v1.0</h1>
          <span className="text-entropy-acid">[ STATUS: ONLINE ]</span>
        </div>
        <button className="border border-entropy-beam text-entropy-beam px-4 py-2 hover:bg-entropy-beam hover:text-black transition-colors">
          [ INSERT DATA ]
        </button>
      </div>

      {/* Main Content Area (Middle) */}
      <div className="flex-grow flex justify-between items-center w-full mt-6">
        {/* Left Panel: Parameters */}
        <div className="w-64 bg-entropy-glass/80 backdrop-blur-md border border-entropy-border p-4 pointer-events-auto space-y-6">
          <h2 className="border-b border-entropy-border pb-2 mb-4 text-entropy-acid">PARAMETERS</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label>ENTROPY_LVL</label>
              <span className="text-entropy-acid">{entropyLevel.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.001"
              value={entropyLevel}
              onChange={(e) => setEntropyLevel(parseFloat(e.target.value))}
              className="w-full h-1 bg-entropy-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-entropy-acid"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <label>NOISE_SCALE</label>
              <span className="text-entropy-acid">{noiseScale.toFixed(3)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="5"
              step="0.01"
              value={noiseScale}
              onChange={(e) => setNoiseScale(parseFloat(e.target.value))}
              className="w-full h-1 bg-entropy-border appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-entropy-acid"
            />
          </div>
        </div>

        {/* Right Panel: History (Placeholder) */}
        <div className="w-64 bg-entropy-glass/80 backdrop-blur-md border border-entropy-border p-4 pointer-events-auto h-full max-h-96 overflow-hidden hidden md:block">
          <h2 className="border-b border-entropy-border pb-2 mb-4 text-entropy-beam">SYSTEM_LOG</h2>
          <div className="space-y-1 text-[10px] opacity-70">
            <p>&gt; INIT_SEQUENCE_COMPLETE</p>
            <p>&gt; RENDER_ENGINE_READY</p>
            <p>&gt; AWAITING_INPUT...</p>
            {entropyLevel > 0 && <p>&gt; ENTROPY_DETECTED: {(entropyLevel * 100).toFixed(1)}%</p>}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end w-full border-t border-entropy-border pt-4 bg-entropy-glass/50 backdrop-blur-sm pointer-events-auto mt-6">
        <div className="text-[10px] opacity-50">
          COORD: 00.00.00 <br/>
          MEM: 64GB OK
        </div>
        <button 
          onClick={handleExport}
          className="bg-entropy-acid text-black font-bold px-6 py-3 hover:bg-white hover:text-black transition-colors border border-transparent hover:border-entropy-acid"
        >
          [ DISK WRITE ]
        </button>
      </div>
    </div>
  )
}
