import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, Percent } from "lucide-react"

interface FinancialMetricsProps {
  data: any
}

export function FinancialMetrics({ data }: FinancialMetricsProps) {
  const metrics = [
    {
      title: "Ingresos Totales",
      value: `$${data.totalRevenue.toLocaleString()}`,
      change: `+${data.revenueGrowth}%`,
      changeType: "positive",
      icon: DollarSign,
      description: "vs mes anterior",
    },
    {
      title: "Gastos Totales",
      value: `$${data.totalExpenses.toLocaleString()}`,
      change: `${data.expenseGrowth}%`,
      changeType: "positive",
      icon: TrendingDown,
      description: "reducción de gastos",
    },
    {
      title: "Ganancia Neta",
      value: `$${data.netProfit.toLocaleString()}`,
      change: `+${((data.netProfit / (data.totalRevenue - data.netProfit)) * 100).toFixed(1)}%`,
      changeType: "positive",
      icon: TrendingUp,
      description: "margen de ganancia",
    },
    {
      title: "Margen de Beneficio",
      value: `${data.profitMargin}%`,
      change: "+2.3%",
      changeType: "positive",
      icon: Percent,
      description: "vs mes anterior",
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
