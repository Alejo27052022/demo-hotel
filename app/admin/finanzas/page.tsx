"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { FinancialMetrics } from "@/components/admin/financial-metrics"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { ExpenseChart } from "@/components/admin/expense-chart"
import { CategoryBreakdown } from "@/components/admin/category-breakdown"
import { TransactionsList } from "@/components/admin/transactions-list"
import { Download, Calendar, TrendingUp, TrendingDown } from "lucide-react"

export default function FinanzasPage() {
  const [timeRange, setTimeRange] = useState("month")
  const [category, setCategory] = useState("all")

  // Mock financial data
  const financialData = {
    totalRevenue: 45680,
    totalExpenses: 18420,
    netProfit: 27260,
    revenueGrowth: 12.5,
    expenseGrowth: -3.2,
    profitMargin: 59.7,
    roomRevenue: 32450,
    workshopRevenue: 13230,
    averageRoomRate: 185,
    occupancyRate: 78,
  }

  const monthlyData = [
    { month: "Ene", revenue: 38500, expenses: 15200, profit: 23300 },
    { month: "Feb", revenue: 42100, expenses: 16800, profit: 25300 },
    { month: "Mar", revenue: 39800, expenses: 15900, profit: 23900 },
    { month: "Abr", revenue: 45200, expenses: 17100, profit: 28100 },
    { month: "May", revenue: 48900, expenses: 18200, profit: 30700 },
    { month: "Jun", revenue: 45680, expenses: 18420, profit: 27260 },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Reportes Financieros</h1>
              <p className="text-slate-600">Análisis detallado de ingresos, egresos y rentabilidad</p>
            </div>
            <div className="flex gap-3">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-40">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Esta Semana</SelectItem>
                  <SelectItem value="month">Este Mes</SelectItem>
                  <SelectItem value="quarter">Este Trimestre</SelectItem>
                  <SelectItem value="year">Este Año</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Exportar Reporte
              </Button>
            </div>
          </div>
        </div>

        {/* Financial Metrics */}
        <FinancialMetrics data={financialData} />

        {/* Revenue vs Expenses Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Tendencia de Ingresos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RevenueChart data={monthlyData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-600" />
                Análisis de Gastos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ExpenseChart data={monthlyData} />
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown and Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Desglose por Categorías</CardTitle>
            </CardHeader>
            <CardContent>
              <CategoryBreakdown data={financialData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Métricas Clave</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Tarifa Promedio</span>
                  <span className="font-semibold">${financialData.averageRoomRate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Ocupación</span>
                  <span className="font-semibold">{financialData.occupancyRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">RevPAR</span>
                  <span className="font-semibold">
                    ${Math.round(financialData.averageRoomRate * (financialData.occupancyRate / 100))}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Ingresos Habitaciones</span>
                  <span className="font-semibold">${financialData.roomRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Ingresos Talleres</span>
                  <span className="font-semibold">${financialData.workshopRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Otros Ingresos</span>
                  <span className="font-semibold">$0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Transacciones Recientes</CardTitle>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filtrar por categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las categorías</SelectItem>
                  <SelectItem value="rooms">Habitaciones</SelectItem>
                  <SelectItem value="workshops">Talleres</SelectItem>
                  <SelectItem value="expenses">Gastos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <TransactionsList category={category} />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
