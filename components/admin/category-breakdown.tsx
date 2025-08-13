"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

interface CategoryBreakdownProps {
  data: any
}

export function CategoryBreakdown({ data }: CategoryBreakdownProps) {
  const categoryData = [
    { name: "Habitaciones", value: data.roomRevenue, color: "#3b82f6" },
    { name: "Talleres", value: data.workshopRevenue, color: "#10b981" },
    { name: "Otros", value: 0, color: "#f59e0b" },
  ]

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
