import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, MapPin, Calendar, Star } from "lucide-react"

interface GuestAnalyticsProps {
  dateRange: string
}

export function GuestAnalytics({ dateRange }: GuestAnalyticsProps) {
  const guestData = {
    totalGuests: 342,
    returningGuests: 129,
    newGuests: 213,
    averageStay: 2.8,
    topCountries: [
      { country: "Ecuador", percentage: 65, count: 222 },
      { country: "Colombia", percentage: 15, count: 51 },
      { country: "Perú", percentage: 12, count: 41 },
      { country: "Estados Unidos", percentage: 5, count: 17 },
      { country: "Otros", percentage: 3, count: 11 },
    ],
    ageGroups: [
      { group: "25-34", percentage: 35, count: 120 },
      { group: "35-44", percentage: 28, count: 96 },
      { group: "45-54", percentage: 20, count: 68 },
      { group: "55+", percentage: 12, count: 41 },
      { group: "18-24", percentage: 5, count: 17 },
    ],
    purposes: [
      { purpose: "Bienestar/Relajación", percentage: 45, count: 154 },
      { purpose: "Turismo", percentage: 30, count: 103 },
      { purpose: "Negocios", percentage: 15, count: 51 },
      { purpose: "Eventos", percentage: 10, count: 34 },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Guest Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Total Huéspedes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">{guestData.totalGuests}</div>
            <p className="text-xs text-slate-600">en el período</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Huéspedes Nuevos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{guestData.newGuests}</div>
            <p className="text-xs text-slate-600">
              {Math.round((guestData.newGuests / guestData.totalGuests) * 100)}% del total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600">Huéspedes Repetidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{guestData.returningGuests}</div>
            <p className="text-xs text-slate-600">
              {Math.round((guestData.returningGuests / guestData.totalGuests) * 100)}% del total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-slate-600 flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Estadía Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-800">{guestData.averageStay}</div>
            <p className="text-xs text-slate-600">días por huésped</p>
          </CardContent>
        </Card>
      </div>

      {/* Demographics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Countries */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Países de Origen
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {guestData.topCountries.map((country, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">{country.country}</span>
                  <span className="text-sm text-slate-600">{country.count} huéspedes</span>
                </div>
                <Progress value={country.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Age Groups */}
        <Card>
          <CardHeader>
            <CardTitle>Grupos de Edad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {guestData.ageGroups.map((group, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">{group.group} años</span>
                  <span className="text-sm text-slate-600">{group.count} huéspedes</span>
                </div>
                <Progress value={group.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Purpose of Visit */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Star className="h-5 w-5 mr-2" />
            Propósito de la Visita
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guestData.purposes.map((purpose, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-slate-800 mb-1">{purpose.percentage}%</div>
                <div className="text-sm font-medium text-slate-700 mb-1">{purpose.purpose}</div>
                <div className="text-xs text-slate-600">{purpose.count} huéspedes</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
