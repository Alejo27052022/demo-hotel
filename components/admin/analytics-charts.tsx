"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface AnalyticsChartsProps {
  dateRange: string
}

export function AnalyticsCharts({ dateRange }: AnalyticsChartsProps) {
  const occupancyData = [
    { date: "01/01", occupancy: 65, revenue: 12500 },
    { date: "01/08", occupancy: 72, revenue: 14200 },
    { date: "01/15", occupancy: 78, revenue: 15800 },
    { date: "01/22", occupancy: 85, revenue: 17200 },
    { date: "01/29", occupancy: 82, revenue: 16800 },
  ]

  const workshopData = [
    { month: "Oct", participants: 45, revenue: 2250 },
    { month: "Nov", participants: 62, revenue: 3100 },
    { month: "Dic", participants: 78, revenue: 3900 },
    { month: "Ene", participants: 89, revenue: 4450 },
    { month: "Feb", participants: 95, revenue: 4750 },
    { month: "Mar", participants: 102, revenue: 5100 },
  ]

  const guestTypeData = [
    { type: "Turismo", count: 145 },
    { type: "Negocios", count: 89 },
    { type: "Bienestar", count: 156 },
    { type: "Eventos", count: 67 },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Occupancy Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Tendencia de Ocupación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value, name) => [
                    name === "occupancy" ? `${value}%` : `$${value}`,
                    name === "occupancy" ? "Ocupación" : "Ingresos",
                  ]}
                />
                <Line type="monotone" dataKey="occupancy" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Workshop Growth */}
      <Card>
        <CardHeader>
          <CardTitle>Crecimiento de Talleres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={workshopData}>
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
                  formatter={(value, name) => [
                    name === "participants" ? `${value} personas` : `$${value}`,
                    name === "participants" ? "Participantes" : "Ingresos",
                  ]}
                />
                <Area type="monotone" dataKey="participants" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Guest Types */}
      <Card>
        <CardHeader>
          <CardTitle>Tipos de Huéspedes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={guestTypeData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="type" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value) => [`${value} huéspedes`, "Total"]}
                />
                <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Tendencia de Ingresos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} className="text-xs" />
                <YAxis axisLine={false} tickLine={false} className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value) => [`$${value}`, "Ingresos"]}
                />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
