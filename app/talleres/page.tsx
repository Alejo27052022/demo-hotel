"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Clock, Users, Sparkles, Star } from "lucide-react"
import Link from "next/link"

const tallerPrincipal = {
  id: "libera-sana-rosa",
  name: "Libera y Sana con Rosa",
  instructor: "Rosa Cárdenas",
  description:
    "Un espacio transformador donde encontrarás paz interior, equilibrio emocional y herramientas para una vida más plena a través de técnicas holísticas de sanación.",
  image: "/libera-sana-rosa.jpg",
  eventos: [
    {
      id: "meditacion-mindfulness",
      name: "Meditación y Mindfulness",
      duration: 90,
      price: 45,
      description:
        "Aprende técnicas de meditación para encontrar paz interior y claridad mental a través de prácticas milenarias adaptadas al mundo moderno.",
      benefits: [
        "Reducción del estrés y ansiedad",
        "Mejora de la concentración",
        "Mayor autoconocimiento",
        "Equilibrio emocional",
      ],
      schedule: [
        { day: "Lunes", time: "09:00 - 10:30", date: "15 Enero" },
        { day: "Miércoles", time: "18:00 - 19:30", date: "17 Enero" },
        { day: "Sábado", time: "10:00 - 11:30", date: "20 Enero" },
      ],
      maxParticipants: 12,
    },
    {
      id: "sanacion-energetica",
      name: "Sanación Energética",
      duration: 75,
      price: 55,
      description:
        "Sesiones de sanación que trabajan con la energía vital para liberar bloqueos emocionales y restaurar el equilibrio natural del cuerpo.",
      benefits: [
        "Liberación de bloqueos energéticos",
        "Restauración del equilibrio",
        "Sanación emocional profunda",
        "Renovación de la energía vital",
      ],
      schedule: [
        { day: "Martes", time: "16:00 - 17:15", date: "16 Enero" },
        { day: "Jueves", time: "18:30 - 19:45", date: "18 Enero" },
        { day: "Domingo", time: "09:00 - 10:15", date: "21 Enero" },
      ],
      maxParticipants: 8,
    },
    {
      id: "terapia-sonido",
      name: "Terapia de Sonido Curativo",
      duration: 60,
      price: 50,
      description:
        "Sanación a través de frecuencias y vibraciones terapéuticas usando cuencos tibetanos, gongs y otros instrumentos ancestrales.",
      benefits: ["Equilibrio de chakras", "Relajación profunda", "Armonización energética", "Liberación de tensiones"],
      schedule: [
        { day: "Miércoles", time: "19:00 - 20:00", date: "17 Enero" },
        { day: "Viernes", time: "17:00 - 18:00", date: "19 Enero" },
        { day: "Sábado", time: "16:00 - 17:00", date: "20 Enero" },
      ],
      maxParticipants: 10,
    },
    {
      id: "respiracion-consciente",
      name: "Respiración Consciente",
      duration: 45,
      price: 35,
      description:
        "Aprende el poder transformador de la respiración consciente para manejar emociones, reducir estrés y encontrar calma interior.",
      benefits: ["Control del estrés", "Mayor energía vital", "Mejora del sistema inmune", "Claridad mental"],
      schedule: [
        { day: "Lunes", time: "18:00 - 18:45", date: "15 Enero" },
        { day: "Jueves", time: "12:00 - 12:45", date: "18 Enero" },
        { day: "Viernes", time: "08:00 - 08:45", date: "19 Enero" },
      ],
      maxParticipants: 15,
    },
    {
      id: "circulo-mujeres",
      name: "Círculo de Mujeres Sagradas",
      duration: 120,
      price: 65,
      description:
        "Un espacio sagrado para mujeres donde compartir, sanar y conectar con la sabiduría femenina ancestral a través de rituales y ceremonias.",
      benefits: [
        "Conexión con la feminidad sagrada",
        "Sanación del linaje femenino",
        "Empoderamiento personal",
        "Hermandad y apoyo mutuo",
      ],
      schedule: [
        { day: "Sábado", time: "14:00 - 16:00", date: "20 Enero" },
        { day: "Domingo", time: "15:00 - 17:00", date: "28 Enero" },
      ],
      maxParticipants: 12,
    },
  ],
}

const instructora = {
  name: "Rosa Cárdenas",
  specialty: "Terapeuta Holística y Facilitadora de Sanación",
  experience: "15 años",
  certifications: [
    "Certificada en Mindfulness-Based Stress Reduction",
    "Instructora de Meditación Vipassana",
    "Terapeuta de Sanación Energética Reiki Master",
    "Facilitadora de Círculos de Mujeres",
  ],
  bio: "Rosa Cárdenas es una pionera en técnicas de sanación holística en Latinoamérica. Con más de 15 años de experiencia, ha ayudado a miles de personas a encontrar paz interior, equilibrio emocional y conexión espiritual. Su enfoque integra sabiduría ancestral con técnicas modernas de bienestar.",
  image: "/instructora-rosa.jpg",
}

export default function TalleresPage() {
  const [selectedEvento, setSelectedEvento] = useState<string>("")
  const [showInscription, setShowInscription] = useState<boolean>(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    specialRequests: "",
  })

  const selectedEventoData = tallerPrincipal.eventos.find((evento) => evento.id === selectedEvento)

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInscription = (eventoId: string) => {
    setSelectedEvento(eventoId)
    setShowInscription(true)
  }

  if (showInscription && selectedEventoData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        <header className="bg-white border-b border-pink-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setShowInscription(false)}
                className="flex items-center space-x-2 text-slate-600 hover:text-pink-600"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Volver a Eventos</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-pink-600" />
                <h1 className="text-xl font-bold text-slate-800">Inscripción a Evento</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Inscríbete a {selectedEventoData.name}</h2>
              <p className="text-slate-600">Completa tus datos para reservar tu lugar en este evento transformador</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Detalles del Evento Seleccionado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-slate-600">Evento:</span>
                    <p className="font-medium">{selectedEventoData.name}</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Facilitadora:</span>
                    <p className="font-medium">{tallerPrincipal.instructor}</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Duración:</span>
                    <p className="font-medium">{selectedEventoData.duration} minutos</p>
                  </div>
                  <div>
                    <span className="text-slate-600">Precio:</span>
                    <p className="font-medium text-pink-600">${selectedEventoData.price}</p>
                  </div>
                </div>
                <div>
                  <span className="text-slate-600">Próximas fechas:</span>
                  <div className="mt-2 space-y-1">
                    {selectedEventoData.schedule.map((horario, index) => (
                      <div key={index} className="flex justify-between text-sm bg-pink-50 p-2 rounded">
                        <span className="font-medium">
                          {horario.day} {horario.date}
                        </span>
                        <span>{horario.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
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
                    placeholder="+593 99 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">Experiencia Previa en Sanación</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleFormChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="principiante">Principiante</SelectItem>
                      <SelectItem value="intermedio">Intermedio</SelectItem>
                      <SelectItem value="avanzado">Avanzado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="requests">Intenciones o Comentarios (Opcional)</Label>
                  <Textarea
                    id="requests"
                    value={formData.specialRequests}
                    onChange={(e) => handleFormChange("specialRequests", e.target.value)}
                    placeholder="Comparte tus intenciones para esta sesión o cualquier información que consideres importante..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full bg-pink-600 hover:bg-pink-700"
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
            >
              Confirmar Inscripción - ${selectedEventoData.price}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-pink-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-pink-600" />
              <h1 className="text-xl font-bold text-slate-800">Libera y Sana con Rosa</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200">Taller de Sanación Holística</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Libera y Sana
            <br />
            <span className="text-pink-600">con Rosa</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un espacio sagrado de transformación donde encontrarás herramientas poderosas para sanar, liberar y conectar
            con tu esencia más auténtica a través de técnicas holísticas milenarias.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="eventos" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="eventos">Eventos</TabsTrigger>
            <TabsTrigger value="facilitadora">Facilitadora</TabsTrigger>
          </TabsList>

          <TabsContent value="eventos" className="space-y-8">
            {/* Eventos Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {tallerPrincipal.eventos.map((evento) => (
                <Card key={evento.id} className="hover:shadow-lg transition-shadow border-pink-100">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-slate-800 mb-2">{evento.name}</CardTitle>
                        <CardDescription className="mb-3">{evento.description}</CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{evento.duration} min</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>Max {evento.maxParticipants}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-3xl font-bold text-pink-600">${evento.price}</div>
                        <div className="text-sm text-slate-500">por sesión</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Beneficios:</h4>
                      <div className="grid grid-cols-1 gap-1 text-sm">
                        {evento.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                            <span className="text-slate-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Próximas Fechas:</h4>
                      <div className="space-y-1">
                        {evento.schedule.slice(0, 3).map((schedule, index) => (
                          <div key={index} className="flex justify-between text-sm bg-pink-50 p-2 rounded">
                            <span className="text-slate-600">
                              {schedule.day} {schedule.date}
                            </span>
                            <span className="font-medium">{schedule.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-pink-600 hover:bg-pink-700"
                      onClick={() => handleInscription(evento.id)}
                    >
                      Inscribirse a este Evento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilitadora" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={
                        instructora.image ||
                        "/placeholder.svg?height=300&width=300&query=Rosa Cárdenas facilitadora sanación" ||
                        "/placeholder.svg"
                      }
                      alt={instructora.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-3xl text-slate-800">{instructora.name}</CardTitle>
                  <CardDescription className="text-xl text-pink-600 font-medium">
                    {instructora.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                      {instructora.experience} de experiencia
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-center text-lg leading-relaxed max-w-3xl mx-auto">
                    {instructora.bio}
                  </p>

                  <div className="bg-pink-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-800 mb-4 text-center text-lg">
                      Certificaciones y Formación:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {instructora.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-slate-800 mb-3">Filosofía de Sanación</h4>
                    <p className="text-slate-600 italic max-w-2xl mx-auto">
                      "Creo profundamente que cada ser humano tiene dentro de sí la capacidad innata de sanarse y
                      transformarse. Mi rol es ser un puente que te conecte con esa sabiduría interior, creando un
                      espacio sagrado donde puedas liberar lo que ya no te sirve y abrazar tu verdadero poder."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">¿Lista para tu Transformación?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Únete a este viaje sagrado de sanación y descubre el poder transformador que reside en tu interior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Ver Todos los Eventos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
            >
              Contactar a Rosa Cárdenas
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
