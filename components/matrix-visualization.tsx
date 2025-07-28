"use client"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface Leader {
  name: string
  strategicScore: number
  leadScore: number
  profile: string
  risk: string
}

interface MatrixVisualizationProps {
  leaders: Leader[]
  highlightLeader?: string
}

export function MatrixVisualization({ leaders, highlightLeader }: MatrixVisualizationProps) {
  const [hoveredLeader, setHoveredLeader] = useState<string | null>(null)

  const getRiskGradient = (risk: string) => {
    switch (risk) {
      case "High": return "from-red-500 to-red-600"
      case "Medium": return "from-yellow-500 to-orange-500"
      case "Low": return "from-green-500 to-emerald-600"
      default: return "from-gray-500 to-gray-600"
    }
  }

  // Positions as %
  const getPositionStyle = (strategicScore: number, leadScore: number) => {
    const x = (leadScore / 3) * 100
    const y = 100 - (strategicScore / 3) * 100
    // leave space for axis labels (padding ~32px)
    return {
      left: `calc(${8 + x * 0.84}% )`,  // 8% left padding, 84% for plot
      top: `calc(${8 + y * 0.80}% )`,   // 8% top padding, 80% for plot
      transform: "translate(-50%, -50%)",
    }
  }

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <Card className="relative w-full max-w-xl mx-auto min-h-[480px] bg-white border border-gray-200 shadow-lg rounded-2xl px-0 py-0">
          {/* Padded plotting area */}
          <div className="relative w-full h-[420px] px-10 py-10">
            {/* Background zones */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-0">
              <div className="absolute bg-red-100/40" style={{ left: "0%", top: "66.67%", width: "33.33%", height: "33.33%" }} />
              <div className="absolute bg-yellow-100/40" style={{ left: "33.33%", top: "66.67%", width: "66.67%", height: "33.33%" }} />
              <div className="absolute bg-yellow-100/30" style={{ left: "0%", top: "33.33%", width: "33.33%", height: "33.33%" }} />
              <div className="absolute bg-green-100/40" style={{ left: "66.67%", top: "0%", width: "33.33%", height: "66.67%" }} />
            </div>
            {/* Grid lines */}
            {[1, 2].map(i => (
              <div key={`v-${i}`}
                className="absolute top-0 bottom-0 border-l-2 border-gray-200/70 z-10"
                style={{ left: `${(i / 3) * 100}%` }} />
            ))}
            {[1, 2].map(i => (
              <div key={`h-${i}`}
                className="absolute left-0 right-0 border-t-2 border-gray-200/70 z-10"
                style={{ top: `${(i / 3) * 100}%` }} />
            ))}
            {/* Quadrant Labels */}
            <div className="absolute top-4 left-4 text-xs font-semibold text-gray-700 bg-white/80 px-3 py-2 rounded shadow-sm z-20">
              High Strategic<br />Low Culture
            </div>
            <div className="absolute top-4 right-4 text-xs font-semibold text-gray-700 bg-white/80 px-3 py-2 rounded shadow-sm z-20 text-right">
              High Strategic<br />High Culture
            </div>
            <div className="absolute bottom-4 left-4 text-xs font-semibold text-gray-700 bg-white/80 px-3 py-2 rounded shadow-sm z-20">
              Low Strategic<br />Low Culture
            </div>
            <div className="absolute bottom-4 right-4 text-xs font-semibold text-gray-700 bg-white/80 px-3 py-2 rounded shadow-sm z-20 text-right">
              Low Strategic<br />High Culture
            </div>
            {/* Axis labels (INSIDE container, bottom and left) */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold text-[#201C50] bg-white/80 px-2 py-1 rounded shadow z-20">
              L.E.A.D.Better Score →
            </div>
            <div className="absolute top-1/2 left-2 -translate-y-1/2 -rotate-90 text-sm font-bold text-[#201C50] bg-white/80 px-2 py-1 rounded shadow z-20">
              Strategic Execution Score ↑
            </div>
            {/* Scale ticks, left and bottom INSIDE container */}
            {[3, 2, 1, 0].map((v, i) => (
              <div key={v}
                className="absolute left-2"
                style={{ top: `calc(${(i / 3) * 100}% - 8px)` }}>
                <span className="text-xs font-bold text-[#201C50] bg-white px-2 py-0.5 rounded shadow">{v}</span>
              </div>
            ))}
            {[0, 1, 2, 3].map((v, i) => (
              <div key={v}
                className="absolute bottom-2"
                style={{ left: `calc(${(i / 3) * 100}% - 8px)` }}>
                <span className="text-xs font-bold text-[#201C50] bg-white px-2 py-0.5 rounded shadow">{v}</span>
              </div>
            ))}
            {/* Leader dots */}
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="absolute z-20 group"
                style={getPositionStyle(leader.strategicScore, leader.leadScore)}
                onMouseEnter={() => setHoveredLeader(leader.name)}
                onMouseLeave={() => setHoveredLeader(null)}
              >
                <div
                  className={`
                    w-7 h-7 rounded-full border-4 border-white
                    transition-all duration-300
                    shadow-lg cursor-pointer
                    ${highlightLeader === leader.name ? "ring-4 ring-[#EDA820] ring-offset-2 scale-110" : ""}
                    ${hoveredLeader === leader.name ? "scale-125 z-30" : ""}
                    bg-gradient-to-br ${getRiskGradient(leader.risk)}
                  `}
                  title={`${leader.name}: Strategic ${leader.strategicScore}, L.E.A.D. ${leader.leadScore}`}
                />
                {/* Always show name for highlightLeader, tooltip for hover */}
                {highlightLeader === leader.name || hoveredLeader === leader.name ? (
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-40">
                    <div className="bg-white px-3 py-2 rounded-lg shadow-lg border text-center min-w-[96px]">
                      <div className="text-xs font-bold text-[#201C50] whitespace-nowrap">{leader.name}</div>
                      <div className="text-xs text-gray-600">({leader.strategicScore}, {leader.leadScore})</div>
                      {hoveredLeader === leader.name && (
                        <div className="mt-2 bg-[#201C50] text-white text-xs px-2 py-1 rounded font-medium">
                          {leader.profile}<br />
                          <span className="opacity-80">Risk Level: {leader.risk}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Card>
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-5 justify-center">
        {["High", "Medium", "Low"].map((risk) => (
          <div key={risk} className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl shadow border">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${getRiskGradient(risk)} shadow-sm`} />
            <span className="text-xs font-medium text-gray-700">{risk} Risk</span>
          </div>
        ))}
      </div>
    </div>
  )
}
