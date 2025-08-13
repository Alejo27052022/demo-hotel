"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { day: "Lun", occupancy: 65 },
  { day: "Mar", occupancy: 78 },
  { day: "Mié", occupancy: 82 },
  { day: "Jue", occupancy: 75 },
  { day: "Vie", occupancy: 88 },
  { day: "Sáb", occupancy: 95 },
  { day: "Dom", occupancy: 72 },
]

export function OccupancyChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="day" axisLine={false} tickLine={false} className="text-xs" />
          <YAxis axisLine={false} tickLine={false} className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value) => [`${value}%`, "Ocupación"]}
          />
          <Bar dataKey="occupancy" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
