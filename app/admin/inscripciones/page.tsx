"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { WorkshopCard } from "@/components/admin/workshop-card"
import { ParticipantsList } from "@/components/admin/participants-list"
import { Search, Users, Calendar, DollarSign, Plus, Filter } from "lucide-react"

// Mock data for workshops and participants
const workshopsData = [
  {
    id: "1",
    name: "Meditación y Mindfulness",
    date: "2024-01-18",
    time: "10:00 AM",
    duration: "90 min",
    instructor: "Rosa Cárdenas",
    price: 45,
    capacity: 15,
    enrolled: 12,
    status: "active",
    participants: [
      { id: "1", name: "María González", email: "maria@email.com", phone: "+593 99 123 4567", paymentStatus: "paid" },
      { id: "2", name: "Carlos Mendoza", email: "carlos@email.com", phone: "+593 99 234 5678", paymentStatus: "paid" },
      { id: "3", name: "Ana Rodríguez", email: "ana@email.com", phone: "+593 99 345 6789", paymentStatus: "pending" },
    ],
  },
  {
    id: "2",
    name: "Sanación Energética",
    date: "2024-01-19",
    time: "2:00 PM",
    duration: "120 min",
    instructor: "Rosa Cárdenas",
    price: 60,
    capacity: 12,
    enrolled: 8,
    status: "active",
    participants: [
      { id: "4", name: "Luis Herrera", email: "luis@email.com", phone: "+593 99 456 7890", paymentStatus: "paid" },
      { id: "5", name: "Sofia Vargas", email: "sofia@email.com", phone: "+593 99 567 8901", paymentStatus: "paid" },
    ],
  },
  {
    id: "3",
    name: "Terapia de Sonido Curativo",
    date: "2024-01-20",
    time: "4:00 PM",
    duration: "75 min",
    instructor: "Rosa Cárdenas",
    price: 50,
    capacity: 10,
    enrolled: 15,
    status: "full",
    participants: [],
  },
  {
    id: "4",
    name: "Respiración Consciente",
    date: "2024-01-21",
    time: "9:00 AM",
    duration: "60 min",
    instructor: "Rosa Cárdenas",
    price: 40,
    capacity: 20,
    enrolled: 5,
    status: "active",
    participants: [],
  },
  {
    id: "5",
    name: "Círculo de Mujeres Sagradas",
    date: "2024-01-22",
    time: "6:00 PM",
    duration: "150 min",
    instructor: "Rosa Cárdenas",
    price: 70,
    capacity: 8,
    enrolled: 8,
    status: "full",
    participants: [],
  },
]

export default function InscripcionesPage() {
  const [workshops, setWorkshops] = useState(workshopsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedWorkshop, setSelectedWorkshop] = useState<any>(null)

  const filteredWorkshops = workshops.filter((workshop) => {
    const matchesSearch =
      workshop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || workshop.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const totalStats = {
    totalWorkshops: workshops.length,
    totalParticipants: workshops.reduce((sum, w) => sum + w.enrolled, 0),
    totalRevenue: workshops.reduce((sum, w) => sum + w.enrolled * w.price, 0),
    averageOccupancy: Math.round(
      workshops.reduce((sum, w) => sum + (w.enrolled / w.capacity) * 100, 0) / workshops.length || 0,
    ),
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Sistema de Inscripciones</h1>
          <p className="text-slate-600">Gestiona los talleres "Libera y Sana con Rosa" y sus participantes</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Talleres</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{totalStats.totalWorkshops}</div>
              <p className="text-xs text-slate-600">Eventos programados</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Participantes</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{totalStats.totalParticipants}</div>
              <p className="text-xs text-slate-600">Inscritos activos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Ingresos Talleres</CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">${totalStats.totalRevenue}</div>
              <p className="text-xs text-slate-600">Esta semana</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Ocupación Promedio</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-800">{totalStats.averageOccupancy}%</div>
              <p className="text-xs text-slate-600">Capacidad utilizada</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Controls */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-1 gap-4 items-center">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input
                    placeholder="Buscar talleres o instructor..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filtrar por estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los estados</SelectItem>
                    <SelectItem value="active">Activos</SelectItem>
                    <SelectItem value="full">Completos</SelectItem>
                    <SelectItem value="cancelled">Cancelados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Taller
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {filteredWorkshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              onViewParticipants={() => setSelectedWorkshop(workshop)}
            />
          ))}
        </div>

        {filteredWorkshops.length === 0 && (
          <Card className="p-8 text-center">
            <CardContent>
              <p className="text-slate-500">No se encontraron talleres que coincidan con los filtros.</p>
            </CardContent>
          </Card>
        )}

        {/* Participants Modal */}
        {selectedWorkshop && (
          <Dialog open={!!selectedWorkshop} onOpenChange={() => setSelectedWorkshop(null)}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{selectedWorkshop.name}</DialogTitle>
                <DialogDescription>
                  {selectedWorkshop.date} a las {selectedWorkshop.time} - {selectedWorkshop.enrolled} participantes
                </DialogDescription>
              </DialogHeader>
              <ParticipantsList workshop={selectedWorkshop} />
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  )
}
