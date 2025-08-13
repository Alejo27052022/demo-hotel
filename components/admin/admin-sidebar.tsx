"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Bed,
  Users,
  DollarSign,
  BarChart3,
  Calendar,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin", active: true },
    { icon: Bed, label: "Habitaciones", href: "/admin/habitaciones", badge: "9" },
    { icon: Users, label: "Inscripciones", href: "/admin/inscripciones", badge: "23" },
    { icon: DollarSign, label: "Finanzas", href: "/admin/finanzas" },
    { icon: BarChart3, label: "Reportes", href: "/admin/reportes" },
    { icon: Calendar, label: "Historial", href: "/admin/historial" },
  ]

  return (
    <div className={`bg-white border-r border-slate-200 transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-slate-800">Admin Panel</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="p-1 h-8 w-8">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start ${collapsed ? "px-2" : "px-3"} ${
                  item.active ? "bg-blue-600 hover:bg-blue-700 text-white" : "hover:bg-slate-100"
                }`}
              >
                <item.icon className={`h-4 w-4 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && (
                  <>
                    <span>{item.label}</span>
                    {item.badge && <Badge className="ml-auto bg-blue-100 text-blue-800 text-xs">{item.badge}</Badge>}
                  </>
                )}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button variant="ghost" className={`w-full justify-start ${collapsed ? "px-2" : "px-3"}`}>
            <Settings className={`h-4 w-4 ${collapsed ? "" : "mr-3"}`} />
            {!collapsed && <span>Configuración</span>}
          </Button>
          <Button
            variant="ghost"
            className={`w-full justify-start ${collapsed ? "px-2" : "px-3"} text-red-600 hover:text-red-700 hover:bg-red-50`}
          >
            <LogOut className={`h-4 w-4 ${collapsed ? "" : "mr-3"}`} />
            {!collapsed && <span>Cerrar Sesión</span>}
          </Button>
        </div>
      </div>
    </div>
  )
}
