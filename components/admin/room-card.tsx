"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Bed, User, Calendar, Eye, Settings } from "lucide-react"

interface RoomCardProps {
  room: any
  viewMode: "grid" | "list"
  onStatusChange: (roomId: string, newStatus: string) => void
  onViewDetails: () => void
}

const statusConfig = {
  occupied: { label: "Ocupada", color: "bg-green-100 text-green-800" },
  available: { label: "Disponible", color: "bg-blue-100 text-blue-800" },
  reserved: { label: "Reservada", color: "bg-yellow-100 text-yellow-800" },
  maintenance: { label: "Mantenimiento", color: "bg-red-100 text-red-800" },
}

export function RoomCard({ room, viewMode, onStatusChange, onViewDetails }: RoomCardProps) {
  const statusInfo = statusConfig[room.status as keyof typeof statusConfig]

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bed className="h-5 w-5 text-slate-600" />
                <span className="font-semibold text-slate-800">Habitación {room.id}</span>
              </div>
              <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
              <span className="text-slate-600">{room.type}</span>
            </div>
            <div className="flex items-center space-x-4">
              {room.guest && (
                <div className="flex items-center space-x-1 text-sm text-slate-600">
                  <User className="h-4 w-4" />
                  <span>{room.guest}</span>
                </div>
              )}
              <span className="font-semibold text-slate-800">${room.price}/noche</span>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={onViewDetails}>
                  <Eye className="h-4 w-4" />
                </Button>
                <Select value={room.status} onValueChange={(value) => onStatusChange(room.id, value)}>
                  <SelectTrigger className="w-32">
                    <Settings className="h-4 w-4 mr-1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Disponible</SelectItem>
                    <SelectItem value="occupied">Ocupada</SelectItem>
                    <SelectItem value="reserved">Reservada</SelectItem>
                    <SelectItem value="maintenance">Mantenimiento</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Habitación {room.id}</CardTitle>
          <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
        </div>
        <p className="text-sm text-slate-600">{room.type}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-800">${room.price}</span>
          <span className="text-sm text-slate-600">por noche</span>
        </div>

        {room.guest && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-slate-600" />
              <span className="text-sm font-medium">{room.guest}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <Calendar className="h-4 w-4" />
              <span>
                {room.checkIn} - {room.checkOut}
              </span>
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={onViewDetails} className="flex-1 bg-transparent">
            <Eye className="h-4 w-4 mr-1" />
            Ver Detalles
          </Button>
          <Select value={room.status} onValueChange={(value) => onStatusChange(room.id, value)}>
            <SelectTrigger className="w-32">
              <Settings className="h-4 w-4 mr-1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="available">Disponible</SelectItem>
              <SelectItem value="occupied">Ocupada</SelectItem>
              <SelectItem value="reserved">Reservada</SelectItem>
              <SelectItem value="maintenance">Mantenimiento</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
