import { MessageCircle } from 'lucide-react'

export function PLayer() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex flex-col w-[1100px] gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="">Módulo &quot;Desvendando o Redux&quot;</span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600 transition-colors">
            <MessageCircle className="w-4 h-4" /> Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">video</div>
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]"></aside>
        </main>
      </div>
    </div>
  )
}
