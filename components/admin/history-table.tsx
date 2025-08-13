"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Download } from "lucide-react"

interface HistoryTableProps {
  searchTerm: string
  recordType: string
  dateRange: string
}

export function HistoryTable({ searchTerm, recordType, dateRange }: HistoryTableProps) {
  const historyData = [
    {
      id: "R-2024-001",
      type: "reservation",
      guest: "María González",
      description: "Reserva Suite Deluxe - 3 noches",
      amount: 540,
      date: "2024-01-18",
      status: "completed",
    },
    {
      id: "W-2024-012",
      type: "workshop",
      guest: "Carlos Mendoza",
      description: "Inscripción Taller Meditación",
      amount: 45,
      date: "2024-01-18",
      status: "completed",
    },
    {
      id: "R-2024-002",
      type: "reservation",
      guest: "Ana Rodríguez",
      description: "Reserva Suite Premium - 2 noches",
      amount: 500,
      date: "2024-01-17",
      status: "completed",
    },
    {
      id: "C-2024-003",
      type: "cancellation",
      guest: "Luis Herrera",
      description: "Cancelación Suite Estándar",
      amount: -240,
      date: "2024-01-17",
      status: "refunded",
    },
    {
      id: "W-2024-013",
      type: "workshop",
      guest: "Sofia Vargas",
      description: "Inscripción Sanación Energética",
      amount: 60,
      date: "2024-01-16",
      status: "completed",
    },
  ]

  const filteredData = historyData.filter((record) => {
    const matchesSearch =
      record.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType =
      recordType === "all" ||
      (recordType === "reservations" && record.type === "reservation") ||
      (recordType === "workshops" && record.type === "workshop") ||
      (recordType === "payments" && (record.type === "reservation" || record.type === "workshop")) ||
      (recordType === "cancellations" && record.type === "cancellation")

    return matchesSearch && matchesType
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completado</Badge>
      case "refunded":
        return <Badge className="bg-yellow-100 text-yellow-800">Reembolsado</Badge>
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800">Pendiente</Badge>
      default:
        return <Badge className="bg-slate-100 text-slate-800">{status}</Badge>
    }
  }

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "reservation":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Reserva
          </Badge>
        )
      case "workshop":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Taller
          </Badge>
        )
      case "cancellation":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Cancelación
          </Badge>
        )
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Historial de Transacciones</CardTitle>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredData.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-mono text-sm text-slate-600">{record.id}</span>
                  {getTypeBadge(record.type)}
                  {getStatusBadge(record.status)}
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium text-slate-800">{record.guest}</h4>
                    <p className="text-sm text-slate-600">{record.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className={`font-semibold ${record.amount >= 0 ? "text-green-600" : "text-red-600"}`}>
                    ${Math.abs(record.amount)}
                  </div>
                  <div className="text-sm text-slate-600">{record.date}</div>
                </div>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            No se encontraron registros que coincidan con los filtros.
          </div>
        )}
      </CardContent>
    </Card>
  )
}
