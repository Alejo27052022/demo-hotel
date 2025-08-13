"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail, Phone, DollarSign, Download, Plus } from "lucide-react"

interface ParticipantsListProps {
  workshop: any
}

export function ParticipantsList({ workshop }: ParticipantsListProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [paymentFilter, setPaymentFilter] = useState("all")

  // Extended mock data for demonstration
  const allParticipants = [
    {
      id: "1",
      name: "María González",
      email: "maria@email.com",
      phone: "+593 99 123 4567",
      paymentStatus: "paid",
      registrationDate: "2024-01-10",
    },
    {
      id: "2",
      name: "Carlos Mendoza",
      email: "carlos@email.com",
      phone: "+593 99 234 5678",
      paymentStatus: "paid",
      registrationDate: "2024-01-11",
    },
    {
      id: "3",
      name: "Ana Rodríguez",
      email: "ana@email.com",
      phone: "+593 99 345 6789",
      paymentStatus: "pending",
      registrationDate: "2024-01-12",
    },
    {
      id: "4",
      name: "Luis Herrera",
      email: "luis@email.com",
      phone: "+593 99 456 7890",
      paymentStatus: "paid",
      registrationDate: "2024-01-13",
    },
    {
      id: "5",
      name: "Sofia Vargas",
      email: "sofia@email.com",
      phone: "+593 99 567 8901",
      paymentStatus: "paid",
      registrationDate: "2024-01-14",
    },
    {
      id: "6",
      name: "Diego Morales",
      email: "diego@email.com",
      phone: "+593 99 678 9012",
      paymentStatus: "pending",
      registrationDate: "2024-01-15",
    },
    {
      id: "7",
      name: "Carmen Silva",
      email: "carmen@email.com",
      phone: "+593 99 789 0123",
      paymentStatus: "paid",
      registrationDate: "2024-01-16",
    },
    {
      id: "8",
      name: "Roberto Paz",
      email: "roberto@email.com",
      phone: "+593 99 890 1234",
      paymentStatus: "paid",
      registrationDate: "2024-01-17",
    },
  ]

  const participants = allParticipants.slice(0, workshop.enrolled)

  const filteredParticipants = participants.filter((participant) => {
    const matchesSearch =
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesPayment = paymentFilter === "all" || participant.paymentStatus === paymentFilter

    return matchesSearch && matchesPayment
  })

  const paymentStats = {
    paid: participants.filter((p) => p.paymentStatus === "paid").length,
    pending: participants.filter((p) => p.paymentStatus === "pending").length,
    total: participants.length,
  }

  return (
    <div className="space-y-6">
      {/* Workshop Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen del Taller</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-slate-600">Capacidad:</span>
              <p className="font-semibold">{workshop.capacity} personas</p>
            </div>
            <div>
              <span className="text-slate-600">Inscritos:</span>
              <p className="font-semibold">{workshop.enrolled} personas</p>
            </div>
            <div>
              <span className="text-slate-600">Ingresos:</span>
              <p className="font-semibold">${workshop.enrolled * workshop.price}</p>
            </div>
            <div>
              <span className="text-slate-600">Disponibles:</span>
              <p className="font-semibold">{workshop.capacity - workshop.enrolled} espacios</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Status Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{paymentStats.paid}</div>
            <div className="text-sm text-slate-600">Pagos Confirmados</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{paymentStats.pending}</div>
            <div className="text-sm text-slate-600">Pagos Pendientes</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-slate-800">{paymentStats.total}</div>
            <div className="text-sm text-slate-600">Total Participantes</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-1 gap-4 items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Buscar participante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Estado de pago" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los pagos</SelectItem>
                  <SelectItem value="paid">Pagados</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Exportar Lista
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Participante
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Participants Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lista de Participantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredParticipants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="font-medium text-slate-800">{participant.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mt-1">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{participant.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{participant.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right text-sm">
                    <div className="text-slate-600">Inscrito:</div>
                    <div>{participant.registrationDate}</div>
                  </div>
                  <Badge
                    className={
                      participant.paymentStatus === "paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {participant.paymentStatus === "paid" ? "Pagado" : "Pendiente"}
                  </Badge>
                  <div className="flex items-center space-x-1 text-sm font-medium">
                    <DollarSign className="h-4 w-4 text-slate-600" />
                    <span>${workshop.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredParticipants.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              No se encontraron participantes que coincidan con los filtros.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
