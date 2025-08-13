"use client"

import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownRight, Bed, Users, Coffee } from "lucide-react"

interface TransactionsListProps {
  category: string
}

export function TransactionsList({ category }: TransactionsListProps) {
  const allTransactions = [
    {
      id: "1",
      type: "income",
      category: "rooms",
      description: "Reserva Suite Deluxe - María González",
      amount: 540,
      date: "2024-01-18",
      time: "14:30",
      status: "completed",
    },
    {
      id: "2",
      type: "income",
      category: "workshops",
      description: "Taller Meditación - 12 participantes",
      amount: 540,
      date: "2024-01-18",
      time: "10:00",
      status: "completed",
    },
    {
      id: "3",
      type: "expense",
      category: "expenses",
      description: "Suministros de limpieza",
      amount: 180,
      date: "2024-01-18",
      time: "09:15",
      status: "completed",
    },
    {
      id: "4",
      type: "income",
      category: "rooms",
      description: "Reserva Suite Premium - Carlos Mendoza",
      amount: 750,
      date: "2024-01-17",
      time: "16:45",
      status: "completed",
    },
    {
      id: "5",
      type: "income",
      category: "workshops",
      description: "Taller Sanación Energética - 8 participantes",
      amount: 480,
      date: "2024-01-17",
      time: "14:00",
      status: "completed",
    },
    {
      id: "6",
      type: "expense",
      category: "expenses",
      description: "Mantenimiento habitación 205",
      amount: 320,
      date: "2024-01-17",
      time: "11:30",
      status: "completed",
    },
  ]

  const filteredTransactions = allTransactions.filter((transaction) => {
    if (category === "all") return true
    return transaction.category === category
  })

  const getIcon = (category: string) => {
    switch (category) {
      case "rooms":
        return Bed
      case "workshops":
        return Users
      default:
        return Coffee
    }
  }

  return (
    <div className="space-y-4">
      {filteredTransactions.map((transaction) => {
        const IconComponent = getIcon(transaction.category)
        return (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${transaction.type === "income" ? "bg-green-100" : "bg-red-100"}`}>
                <IconComponent
                  className={`h-4 w-4 ${transaction.type === "income" ? "text-green-600" : "text-red-600"}`}
                />
              </div>
              <div>
                <h4 className="font-medium text-slate-800">{transaction.description}</h4>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <span>{transaction.date}</span>
                  <span>•</span>
                  <span>{transaction.time}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div
                  className={`flex items-center font-semibold ${
                    transaction.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  ${transaction.amount}
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Completado</Badge>
            </div>
          </div>
        )
      })}

      {filteredTransactions.length === 0 && (
        <div className="text-center py-8 text-slate-500">No se encontraron transacciones para esta categoría.</div>
      )}
    </div>
  )
}
