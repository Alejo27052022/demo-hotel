"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ArrowLeft, CalendarIcon, Users, Sparkles, Check } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import Link from "next/link"

const roomTypes = [
  {
    id: "standard",
    name: "Suite Estándar",
    price: 120,
    description: "Habitación cómoda con todas las comodidades básicas",
    features: ["Wi-Fi gratuito", "TV por cable", "Aire acondicionado", "Baño privado"],
    image: "/elegant-hotel-standard-suite.png",
    maxGuests: 2,
  },
  {
    id: "deluxe",
    name: "Suite Deluxe",
    price: 180,
    description: "Habitación espaciosa con vista al jardín y amenidades premium",
    features: ["Wi-Fi gratuito", "TV Smart", "Minibar", "Balcón privado", "Servicio a la habitación"],
    image: "/luxury-hotel-suite.png",
    maxGuests: 3,
  },
  {
    id: "premium",
    name: "Suite Premium",
    price: 250,
    description: "Suite de lujo con jacuzzi y vista panorámica",
    features: [
      "Wi-Fi gratuito",
      'TV Smart 55"',
      "Jacuzzi",
      "Vista panorámica",
      "Servicio de conserjería",
      "Desayuno incluido",
    ],
    image: "/premium-hotel-suite.png",
    maxGuests: 4,
  },
  {
    id: "presidential",
    name: "Suite Presidencial",
    price: 400,
    description: "La experiencia más exclusiva con sala de estar separada",
    features: [
      "Wi-Fi gratuito",
      "Sala de estar",
      "Cocina completa",
      "Terraza privada",
      "Mayordomo personal",
      "Spa privado",
    ],
    image: "/presidential-suite.png",
    maxGuests: 6,
  },
]

export default function ReservasPage() {
  const [selectedRoom, setSelectedRoom] = useState<string>("")
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState<string>("1")
  const [step, setStep] = useState<number>(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const selectedRoomData = roomTypes.find((room) => room.id === selectedRoom)
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0
  const totalPrice = selectedRoomData && nights > 0 ? selectedRoomData.price * nights : 0

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-rose-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-rose-600" />
              <h1 className="text-xl font-bold text-slate-800">Sistema de Reservas</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber ? "bg-rose-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > stepNumber ? <Check className="h-5 w-5" /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-16 h-1 mx-2 ${step > stepNumber ? "bg-rose-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <div className="text-center">
              <p className="text-sm text-slate-600">
                Paso {step} de 3:{" "}
                {step === 1 ? "Seleccionar Habitación" : step === 2 ? "Información Personal" : "Confirmación"}
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Room Selection */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Selecciona tu Habitación</h2>
              <p className="text-slate-600">Elige la suite perfecta para tu estadía</p>
            </div>

            {/* Date and Guest Selection */}
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Detalles de tu Reserva</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="checkin">Fecha de Entrada</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP", { locale: es }) : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="checkout">Fecha de Salida</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP", { locale: es }) : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="guests">Huéspedes</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar huéspedes" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Huésped" : "Huéspedes"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Room Types */}
            <div className="grid md:grid-cols-2 gap-6">
              {roomTypes.map((room) => (
                <Card
                  key={room.id}
                  className={`cursor-pointer transition-all ${
                    selectedRoom === room.id
                      ? "ring-2 ring-rose-500 border-rose-500"
                      : "hover:shadow-lg border-rose-100"
                  }`}
                  onClick={() => setSelectedRoom(room.id)}
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                    {selectedRoom === room.id && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-rose-600">Seleccionada</Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-slate-800">{room.name}</CardTitle>
                        <CardDescription>{room.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-rose-600">${room.price}</div>
                        <div className="text-sm text-slate-500">por noche</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-4 w-4 mr-2" />
                        Hasta {room.maxGuests} huéspedes
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {room.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-rose-600 hover:bg-rose-700"
                onClick={handleNextStep}
                disabled={!selectedRoom || !checkIn || !checkOut}
              >
                Continuar con la Reserva
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Información Personal</h2>
              <p className="text-slate-600">Completa tus datos para la reserva</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Datos del Huésped Principal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleFormChange("firstName", e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleFormChange("lastName", e.target.value)}
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Correo Electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleFormChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="requests">Solicitudes Especiales (Opcional)</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleFormChange("specialRequests", e.target.value)}
                    placeholder="Cualquier solicitud especial o preferencia..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Volver
              </Button>
              <Button
                className="bg-rose-600 hover:bg-rose-700"
                onClick={handleNextStep}
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
              >
                Revisar Reserva
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && selectedRoomData && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Confirmar Reserva</h2>
              <p className="text-slate-600">Revisa los detalles antes de proceder al pago</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Resumen de tu Reserva</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Detalles de la Habitación</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Habitación:</span> {selectedRoomData.name}
                      </p>
                      <p>
                        <span className="font-medium">Huéspedes:</span> {guests}
                      </p>
                      <p>
                        <span className="font-medium">Entrada:</span>{" "}
                        {checkIn ? format(checkIn, "PPP", { locale: es }) : ""}
                      </p>
                      <p>
                        <span className="font-medium">Salida:</span>{" "}
                        {checkOut ? format(checkOut, "PPP", { locale: es }) : ""}
                      </p>
                      <p>
                        <span className="font-medium">Noches:</span> {nights}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Información Personal</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Nombre:</span> {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span> {formData.email}
                      </p>
                      <p>
                        <span className="font-medium">Teléfono:</span> {formData.phone}
                      </p>
                      {formData.specialRequests && (
                        <p>
                          <span className="font-medium">Solicitudes:</span> {formData.specialRequests}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-rose-600">${totalPrice}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    ${selectedRoomData.price} × {nights} noches
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Volver
              </Button>
              <Link href="/pago">
                <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                  Proceder al Pago
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
