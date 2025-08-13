"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ExpenseChartProps {
  data: any[]
}

export function ExpenseChart({ data }: ExpenseChartProps) {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
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
            formatter={(value) => [`$${value.toLocaleString()}`, "Gastos"]}
          />
          <Area type="monotone" dataKey="expenses" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
