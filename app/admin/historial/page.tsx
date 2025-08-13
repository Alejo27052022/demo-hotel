"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { HistoryTable } from "@/components/admin/history-table"
import { AnalyticsCharts } from "@/components/admin/analytics-charts"
import { PerformanceMetrics } from "@/components/admin/performance-metrics"
import { GuestAnalytics } from "@/components/admin/guest-analytics"
import { Search, Filter, Download, Calendar, TrendingUp, Users, Star } from "lucide-react"

export default function HistorialPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [dateRange, setDateRange] = useState("month")
  const [recordType, setRecordType] = useState("all")

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Historial y Analytics</h1>
              <p className="text-slate-600">Análisis histórico y métricas de rendimiento del Centro Macas</p>
            </div>
            <div className="flex gap-3">
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="w-40">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Última Semana</SelectItem>
                  <SelectItem value="month">Último Mes</SelectItem>
                  <SelectItem value="quarter">Último Trimestre</SelectItem>
                  <SelectItem value="year">Último Año</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="h-4 w-4 mr-2" />
                Exportar Datos
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <PerformanceMetrics dateRange={dateRange} />

        {/* Main Content Tabs */}
        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Historial
            </TabsTrigger>
            <TabsTrigger value="guests" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Huéspedes
            </TabsTrigger>
            <TabsTrigger value="satisfaction" className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              Satisfacción
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsCharts dateRange={dateRange} />
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Buscar por huésped, habitación..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={recordType} onValueChange={setRecordType}>
                    <SelectTrigger className="w-48">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Tipo de registro" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los registros</SelectItem>
                      <SelectItem value="reservations">Reservas</SelectItem>
                      <SelectItem value="workshops">Talleres</SelectItem>
                      <SelectItem value="payments">Pagos</SelectItem>
                      <SelectItem value="cancellations">Cancelaciones</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <HistoryTable searchTerm={searchTerm} recordType={recordType} dateRange={dateRange} />
          </TabsContent>

          <TabsContent value="guests" className="space-y-6">
            <GuestAnalytics dateRange={dateRange} />
          </TabsContent>

          <TabsContent value="satisfaction" className="space-y-6">
            {/* Satisfaction Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Puntuación Promedio</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-800">4.8</div>
                  <p className="text-xs text-slate-600">de 5.0 estrellas</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Total Reseñas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-800">247</div>
                  <p className="text-xs text-slate-600">últimos 6 meses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Recomendación</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-800">94%</div>
                  <p className="text-xs text-slate-600">recomendarían</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-slate-600">Huéspedes Repetidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-slate-800">38%</div>
                  <p className="text-xs text-slate-600">tasa de retorno</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Reseñas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      guest: "María González",
                      rating: 5,
                      comment:
                        "Experiencia increíble. Los talleres de Rosa son transformadores y las habitaciones muy cómodas.",
                      date: "2024-01-15",
                    },
                    {
                      guest: "Carlos Mendoza",
                      rating: 5,
                      comment: "Excelente servicio y ubicación. El personal muy atento y profesional.",
                      date: "2024-01-12",
                    },
                    {
                      guest: "Ana Rodríguez",
                      rating: 4,
                      comment: "Muy buena experiencia en general. Los talleres de bienestar son únicos.",
                      date: "2024-01-10",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-slate-800">{review.guest}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-400 fill-current" : "text-slate-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-slate-600">{review.date}</span>
                      </div>
                      <p className="text-slate-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
