import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  changeType: "positive" | "negative"
  icon: LucideIcon
  description: string
}

export function MetricCard({ title, value, change, changeType, icon: Icon, description }: MetricCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        <Icon className="h-4 w-4 text-blue-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-800 mb-1">{value}</div>
        <div className="flex items-center space-x-2">
          <Badge
            className={`text-xs ${
              changeType === "positive" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {change}
          </Badge>
          <p className="text-xs text-slate-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
