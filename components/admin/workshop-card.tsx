"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Users, DollarSign, Eye, Edit, Trash2 } from "lucide-react"

interface WorkshopCardProps {
  workshop: any
  onViewParticipants: () => void
}

const statusConfig = {
  active: { label: "Activo", color: "bg-green-100 text-green-800" },
  full: { label: "Completo", color: "bg-yellow-100 text-yellow-800" },
  cancelled: { label: "Cancelado", color: "bg-red-100 text-red-800" },
}

export function WorkshopCard({ workshop, onViewParticipants }: WorkshopCardProps) {
  const statusInfo = statusConfig[workshop.status as keyof typeof statusConfig]
  const occupancyPercentage = (workshop.enrolled / workshop.capacity) * 100

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{workshop.name}</CardTitle>
            <p className="text-sm text-slate-600">Facilitadora: {workshop.instructor}</p>
          </div>
          <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-slate-600" />
            <span>{workshop.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-slate-600" />
            <span>
              {workshop.time} ({workshop.duration})
            </span>
          </div>
        </div>

        {/* Enrollment Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-slate-600" />
              <span>
                {workshop.enrolled}/{workshop.capacity} inscritos
              </span>
            </div>
            <span className="font-medium">{Math.round(occupancyPercentage)}%</span>
          </div>
          <Progress value={occupancyPercentage} className="h-2" />
        </div>

        {/* Price and Revenue */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-slate-600" />
            <span className="text-sm">${workshop.price} por persona</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-slate-800">${workshop.enrolled * workshop.price}</div>
            <div className="text-xs text-slate-600">ingresos</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <Button variant="outline" size="sm" onClick={onViewParticipants} className="flex-1 bg-transparent">
            <Eye className="h-4 w-4 mr-1" />
            Ver Participantes
          </Button>
          <Button variant="outline" size="sm" className="bg-transparent">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
