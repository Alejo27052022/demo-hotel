"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bed, User, Calendar, MapPin, Wifi, Tv, Coffee, Bath, Star } from "lucide-react"

interface RoomDetailsProps {
  room: any
  onStatusChange: (roomId: string, newStatus: string) => void
}

const statusConfig = {
  occupied: { label: "Ocupada", color: "bg-green-100 text-green-800" },
  available: { label: "Disponible", color: "bg-blue-100 text-blue-800" },
  reserved: { label: "Reservada", color: "bg-yellow-100 text-yellow-800" },
  maintenance: { label: "Mantenimiento", color: "bg-red-100 text-red-800" },
}

const amenityIcons = {
  WiFi: Wifi,
  TV: Tv,
  Minibar: Coffee,
  Balcón: MapPin,
  Jacuzzi: Bath,
  "Sala de estar": Star,
}

export function RoomDetails({ room, onStatusChange }: RoomDetailsProps) {
  const statusInfo = statusConfig[room.status as keyof typeof statusConfig]

  return (
    <div className="space-y-6">
      {/* Room Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">Habitación {room.id}</h3>
          <p className="text-slate-600">
            {room.type} - Piso {room.floor}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-800">${room.price}</div>
          <div className="text-sm text-slate-600">por noche</div>
        </div>
      </div>

      {/* Status and Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Estado y Acciones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-slate-700">Estado actual:</span>
              <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
            </div>
            <Select value={room.status} onValueChange={(value) => onStatusChange(room.id, value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
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

      {/* Guest Information */}
      {room.guest && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <User className="h-5 w-5 mr-2" />
              Información del Huésped
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-slate-700">Nombre:</span>
                <p className="text-slate-800">{room.guest}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700">Check-in:</span>
                <p className="text-slate-800">{room.checkIn}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700">Check-out:</span>
                <p className="text-slate-800">{room.checkOut}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700">Noches:</span>
                <p className="text-slate-800">
                  {Math.ceil(
                    (new Date(room.checkOut).getTime() - new Date(room.checkIn).getTime()) / (1000 * 60 * 60 * 24),
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Room Amenities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Bed className="h-5 w-5 mr-2" />
            Amenidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {room.amenities.map((amenity: string) => {
              const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Star
              return (
                <div key={amenity} className="flex items-center space-x-2 p-2 bg-slate-50 rounded-lg">
                  <IconComponent className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-slate-700">{amenity}</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex space-x-3">
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
          <Calendar className="h-4 w-4 mr-2" />
          Ver Calendario
        </Button>
        <Button variant="outline" className="flex-1 bg-transparent">
          <User className="h-4 w-4 mr-2" />
          Historial de Huéspedes
        </Button>
      </div>
    </div>
  )
}
