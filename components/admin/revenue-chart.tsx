"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface RevenueChartProps {
  data: any[]
}

export function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs" />
          <YAxis axisLine={false} tickLine={false} className="text-xs" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, "Ingresos"]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#10b981", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
