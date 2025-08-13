"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { RoomCard } from "@/components/admin/room-card"
import { RoomDetails } from "@/components/admin/room-details"
import { Search, Filter, Grid, List } from "lucide-react"

// Mock data for rooms
const roomsData = [
  {
    id: "101",
    type: "Suite Estándar",
    status: "occupied",
    guest: "María González",
    checkIn: "2024-01-15",
    checkOut: "2024-01-18",
    price: 120,
    floor: 1,
    amenities: ["WiFi", "TV", "Minibar"],
  },
  {
    id: "102",
    type: "Suite Estándar",
    status: "available",
    guest: null,
    checkIn: null,
    checkOut: null,
    price: 120,
    floor: 1,
    amenities: ["WiFi", "TV", "Minibar"],
  },
  {
    id: "201",
    type: "Suite Deluxe",
    status: "reserved",
    guest: "Carlos Mendoza",
    checkIn: "2024-01-20",
    checkOut: "2024-01-23",
    price: 180,
    floor: 2,
    amenities: ["WiFi", "TV", "Minibar", "Balcón"],
  },
  {
    id: "202",
    type: "Suite Deluxe",
    status: "maintenance",
    guest: null,
    checkIn: null,
    checkOut: null,
    price: 180,
    floor: 2,
    amenities: ["WiFi", "TV", "Minibar", "Balcón"],
  },
  {
    id: "301",
    type: "Suite Premium",
    status: "occupied",
    guest: "Ana Rodríguez",
    checkIn: "2024-01-14",
    checkOut: "2024-01-19",
    price: 250,
    floor: 3,
    amenities: ["WiFi", "TV", "Minibar", "Balcón", "Jacuzzi"],
  },
  {
    id: "401",
    type: "Suite Presidencial",
    status: "available",
    guest: null,
    checkIn: null,
    checkOut: null,
    price: 400,
    floor: 4,
    amenities: ["WiFi", "TV", "Minibar", "Balcón", "Jacuzzi", "Sala de estar"],
  },
]

export default function HabitacionesPage() {
  const [rooms, setRooms] = useState(roomsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedRoom, setSelectedRoom] = useState<any>(null)

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (room.guest && room.guest.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesStatus = statusFilter === "all" || room.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const statusCounts = {
    all: rooms.length,
    occupied: rooms.filter((r) => r.status === "occupied").length,
    available: rooms.filter((r) => r.status === "available").length,
    reserved: rooms.filter((r) => r.status === "reserved").length,
    maintenance: rooms.filter((r) => r.status === "maintenance").length,
  }

  const updateRoomStatus = (roomId: string, newStatus: string) => {
    setRooms(rooms.map((room) => (room.id === roomId ? { ...room, status: newStatus } : room)))
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar />

      <main className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Gestión de Habitaciones</h1>
          <p className="text-slate-600">Administra el estado y disponibilidad de todas las habitaciones</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setStatusFilter("all")}>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-slate-800">{statusCounts.all}</div>
              <div className="text-sm text-slate-600">Total</div>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setStatusFilter("occupied")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{statusCounts.occupied}</div>
              <div className="text-sm text-slate-600">Ocupadas</div>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setStatusFilter("available")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{statusCounts.available}</div>
              <div className="text-sm text-slate-600">Disponibles</div>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setStatusFilter("reserved")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{statusCounts.reserved}</div>
              <div className="text-sm text-slate-600">Reservadas</div>
            </CardContent>
          </Card>
          <Card
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setStatusFilter("maintenance")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{statusCounts.maintenance}</div>
              <div className="text-sm text-slate-600">Mantenimiento</div>
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
                    placeholder="Buscar por habitación, tipo o huésped..."
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
                    <SelectItem value="occupied">Ocupadas</SelectItem>
                    <SelectItem value="available">Disponibles</SelectItem>
                    <SelectItem value="reserved">Reservadas</SelectItem>
                    <SelectItem value="maintenance">Mantenimiento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rooms Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredRooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              viewMode={viewMode}
              onStatusChange={updateRoomStatus}
              onViewDetails={() => setSelectedRoom(room)}
            />
          ))}
        </div>

        {filteredRooms.length === 0 && (
          <Card className="p-8 text-center">
            <CardContent>
              <p className="text-slate-500">No se encontraron habitaciones que coincidan con los filtros.</p>
            </CardContent>
          </Card>
        )}

        {/* Room Details Modal */}
        {selectedRoom && (
          <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Detalles de Habitación {selectedRoom.id}</DialogTitle>
                <DialogDescription>Información completa y opciones de gestión</DialogDescription>
              </DialogHeader>
              <RoomDetails room={selectedRoom} onStatusChange={updateRoomStatus} />
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  )
}
