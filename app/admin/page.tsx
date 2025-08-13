import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Bed, Users, DollarSign, Calendar, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { MetricCard } from "@/components/admin/metric-card"
import { RecentActivity } from "@/components/admin/recent-activity"
import { OccupancyChart } from "@/components/admin/occupancy-chart"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Centro Macas - Panel Administrativo</h1>
          <p className="text-slate-600">Resumen general del hotel y talleres de bienestar</p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Ocupación Actual"
            value="78%"
            change="+12%"
            changeType="positive"
            icon={Bed}
            description="32 de 41 habitaciones ocupadas"
          />
          <MetricCard
            title="Ingresos del Mes"
            value="$24,580"
            change="+8.2%"
            changeType="positive"
            icon={DollarSign}
            description="Comparado con el mes anterior"
          />
          <MetricCard
            title="Inscripciones Talleres"
            value="156"
            change="+23%"
            changeType="positive"
            icon={Users}
            description="Libera y Sana con Rosa"
          />
          <MetricCard
            title="Reservas Pendientes"
            value="18"
            change="-5%"
            changeType="negative"
            icon={Calendar}
            description="Para los próximos 7 días"
          />
        </div>

        {/* Charts and Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Occupancy Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Ocupación Semanal
              </CardTitle>
              <CardDescription>Porcentaje de ocupación por día</CardDescription>
            </CardHeader>
            <CardContent>
              <OccupancyChart />
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Actividad Reciente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </div>

        {/* Room Status Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Estado de Habitaciones</CardTitle>
              <CardDescription>Vista rápida del estado actual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-800">Ocupadas</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">32 habitaciones</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bed className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-800">Disponibles</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">9 habitaciones</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                    <span className="font-medium text-yellow-800">Mantenimiento</span>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">2 habitaciones</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Talleres Próximos</CardTitle>
              <CardDescription>Libera y Sana con Rosa - Esta semana</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">Meditación y Mindfulness</p>
                    <p className="text-sm text-slate-600">Hoy 10:00 AM</p>
                  </div>
                  <Badge>12 inscritos</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">Sanación Energética</p>
                    <p className="text-sm text-slate-600">Mañana 2:00 PM</p>
                  </div>
                  <Badge>8 inscritos</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-slate-800">Terapia de Sonido</p>
                    <p className="text-sm text-slate-600">Viernes 4:00 PM</p>
                  </div>
                  <Badge>15 inscritos</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Tareas administrativas frecuentes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 h-12">
                <Bed className="mr-2 h-4 w-4" />
                Gestionar Habitaciones
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-12 bg-transparent">
                <Users className="mr-2 h-4 w-4" />
                Ver Inscripciones
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 h-12 bg-transparent">
                <TrendingUp className="mr-2 h-4 w-4" />
                Generar Reporte
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
