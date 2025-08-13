import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Bed, DollarSign, Calendar } from "lucide-react"

interface PerformanceMetricsProps {
  dateRange: string
}

export function PerformanceMetrics({ dateRange }: PerformanceMetricsProps) {
  const metrics = [
    {
      title: "Ocupación Promedio",
      value: "78.5%",
      change: "+5.2%",
      changeType: "positive",
      icon: Bed,
      description: "vs período anterior",
    },
    {
      title: "Huéspedes Únicos",
      value: "342",
      change: "+12.8%",
      changeType: "positive",
      icon: Users,
      description: "nuevos huéspedes",
    },
    {
      title: "Ingresos por Habitación",
      value: "$185",
      change: "+8.4%",
      changeType: "positive",
      icon: DollarSign,
      description: "ADR promedio",
    },
    {
      title: "Estadía Promedio",
      value: "2.8 días",
      change: "-0.3 días",
      changeType: "negative",
      icon: Calendar,
      description: "duración promedio",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-800 mb-1">{metric.value}</div>
            <div className="flex items-center space-x-2">
              <Badge
                className={`text-xs ${
                  metric.changeType === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {metric.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.change}
              </Badge>
              <p className="text-xs text-slate-600">{metric.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
