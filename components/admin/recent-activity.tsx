import { CheckCircle, AlertCircle, Users, DollarSign } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "reservation",
      message: "Nueva reserva - Suite Deluxe",
      time: "Hace 5 min",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    {
      type: "workshop",
      message: "Inscripción a taller completada",
      time: "Hace 12 min",
      icon: Users,
      iconColor: "text-blue-600",
    },
    {
      type: "payment",
      message: "Pago recibido - $280",
      time: "Hace 25 min",
      icon: DollarSign,
      iconColor: "text-green-600",
    },
    {
      type: "maintenance",
      message: "Habitación 205 en mantenimiento",
      time: "Hace 1 hora",
      icon: AlertCircle,
      iconColor: "text-yellow-600",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start space-x-3 p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <activity.icon className={`h-4 w-4 mt-1 ${activity.iconColor}`} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 truncate">{activity.message}</p>
            <p className="text-xs text-slate-500">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
