"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  Camera,
  Utensils,
  Mountain,
  Waves,
  TreePine,
  Building2,
  Car,
  Plane,
  Phone,
  Globe,
  Compass,
} from "lucide-react"
import Link from "next/link"

const atracciones = [
  {
    id: "cotopaxi",
    name: "Volcán Cotopaxi",
    category: "Naturaleza",
    rating: 4.9,
    distance: "2 horas desde Macas",
    price: "$35",
    icon: Mountain,
    color: "green",
    description:
      "El volcán activo más alto del mundo (5,897m). Una experiencia única para contemplar uno de los picos más perfectos del planeta en el Parque Nacional Cotopaxi.",
    highlights: [
      "Volcán activo más alto del mundo",
      "Paisajes andinos únicos",
      "Fauna silvestre diversa",
      "Lagunas glaciares",
    ],
    hours: "6:00 AM - 6:00 PM",
    image: "/cotopaxi-ecuador.jpg",
    tips: "Lleva ropa abrigada y protector solar. La altura puede afectar, hidrátate bien.",
  },
  {
    id: "amazonia-macas",
    name: "Selva Amazónica de Macas",
    category: "Aventura",
    rating: 4.8,
    distance: "En la ciudad",
    price: "$45",
    icon: TreePine,
    color: "emerald",
    description:
      "Puerta de entrada a la Amazonía ecuatoriana. Hogar del 10% de todas las especies conocidas del planeta y culturas ancestrales milenarias.",
    highlights: [
      "10% de especies mundiales",
      "Culturas Shuar y Achuar",
      "Cascadas espectaculares",
      "Medicina ancestral",
    ],
    hours: "Tours desde 7:00 AM",
    image: "/amazonia-macas.jpg",
    tips: "Usa repelente biodegradable y ropa de manga larga. Respeta las comunidades indígenas.",
  },
  {
    id: "cascadas-macas",
    name: "Cascadas de Macas",
    category: "Naturaleza",
    rating: 4.7,
    distance: "30 min caminando",
    price: "$15",
    icon: Waves,
    color: "blue",
    description:
      "Sistema de cascadas naturales en plena selva amazónica. Aguas cristalinas que caen desde 40 metros de altura en un entorno prístino.",
    highlights: ["Cascadas de 40 metros", "Aguas cristalinas", "Piscinas naturales", "Biodiversidad única"],
    hours: "8:00 AM - 5:00 PM",
    image: "/cascadas-macas.jpg",
    tips: "Perfecto para nadar. Lleva zapatos antideslizantes y cámara resistente al agua.",
  },
  {
    id: "centro-shuar",
    name: "Centro Cultural Shuar",
    category: "Cultura",
    rating: 4.9,
    distance: "45 min en auto",
    price: "$25",
    icon: Building2,
    color: "amber",
    description:
      "Experiencia auténtica con la cultura Shuar, una de las etnias amazónicas más preservadas. Conoce sus tradiciones, artesanías y cosmovisión ancestral.",
    highlights: ["Cultura milenaria Shuar", "Artesanías auténticas", "Ceremonias tradicionales", "Medicina ancestral"],
    hours: "9:00 AM - 4:00 PM",
    image: "/cultura-shuar.jpg",
    tips: "Muestra respeto por las tradiciones. Pregunta antes de fotografiar personas.",
  },
  {
    id: "cueva-tayos",
    name: "Cueva de los Tayos",
    category: "Aventura",
    rating: 4.6,
    distance: "1.5 horas en auto",
    price: "$55",
    icon: Mountain,
    color: "purple",
    description:
      "Sistema de cuevas legendario que inspiró teorías sobre civilizaciones perdidas. Hogar de los tayos (aves nocturnas) y formaciones geológicas únicas.",
    highlights: ["Cuevas legendarias", "Aves tayos únicas", "Formaciones milenarias", "Expedición arqueológica"],
    hours: "Tours guiados 8:00 AM",
    image: "/cueva-tayos.jpg",
    tips: "Requiere buena condición física. Equipo de espeleología incluido en el tour.",
  },
  {
    id: "sangay",
    name: "Parque Nacional Sangay",
    category: "Naturaleza",
    rating: 4.8,
    distance: "1 hora en auto",
    price: "$20",
    icon: TreePine,
    color: "green",
    description:
      "Patrimonio de la Humanidad UNESCO. Ecosistemas únicos desde páramos andinos hasta selva amazónica con especies endémicas extraordinarias.",
    highlights: ["Patrimonio UNESCO", "Ecosistemas únicos", "Especies endémicas", "Volcán Sangay activo"],
    hours: "6:00 AM - 6:00 PM",
    image: "/sangay-ecuador.jpg",
    tips: "Clima variable, lleva ropa para diferentes temperaturas. Guías obligatorios.",
  },
]

const restaurantes = [
  {
    name: "Sabores de la Selva",
    cuisine: "Amazónica",
    rating: 4.8,
    priceRange: "$$",
    distance: "5 min caminando",
    specialty: "Maito de pescado amazónico",
    description:
      "Auténtica gastronomía amazónica con ingredientes locales. Especialidad en pescados de río y frutas exóticas de la región.",
    image: "/restaurante-amazonico.jpg",
  },
  {
    name: "El Mirador Andino",
    cuisine: "Ecuatoriana",
    rating: 4.7,
    priceRange: "$$$",
    distance: "10 min en auto",
    specialty: "Cuy asado tradicional",
    description:
      "Cocina tradicional ecuatoriana con vista panorámica. Platos típicos preparados con recetas ancestrales de la sierra.",
    image: "/restaurante-andino.jpg",
  },
  {
    name: "Café de la Cascada",
    cuisine: "Café & Postres",
    rating: 4.9,
    priceRange: "$",
    distance: "15 min caminando",
    specialty: "Café orgánico ecuatoriano",
    description:
      "Café de especialidad con granos cultivados en las montañas ecuatorianas. Postres artesanales y vista a las cascadas.",
    image: "/cafe-cascada.jpg",
  },
]

const paquetes = [
  {
    id: "ecuador-completo",
    name: "Ecuador Mágico Completo",
    duration: "5 días",
    price: 599,
    includes: ["Transporte 4x4", "Guía bilingüe", "Todas las comidas", "Alojamiento", "Equipo especializado"],
    activities: ["Volcán Cotopaxi", "Amazonía Macas", "Cultura Shuar", "Cascadas naturales", "Cueva de los Tayos"],
    image: "/paquete-ecuador-completo.jpg",
  },
  {
    id: "amazonia-cultural",
    name: "Inmersión Amazónica Cultural",
    duration: "3 días",
    price: 399,
    includes: ["Alojamiento en comunidad", "Guía indígena", "Ceremonias tradicionales", "Comida típica"],
    activities: ["Convivencia Shuar", "Medicina ancestral", "Artesanías tradicionales", "Navegación río Upano"],
    image: "/paquete-amazonico.jpg",
  },
  {
    id: "aventura-extrema",
    name: "Aventura Extrema Ecuatoriana",
    duration: "4 días",
    price: 499,
    includes: ["Equipo técnico", "Instructor certificado", "Seguro de aventura", "Transporte especializado"],
    activities: ["Espeleología Tayos", "Trekking Sangay", "Rapel cascadas", "Canopy amazónico"],
    image: "/paquete-aventura.jpg",
  },
]

export default function TurismoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos")

  const filteredAtracciones =
    selectedCategory === "todos"
      ? atracciones
      : atracciones.filter((atraccion) => atraccion.category.toLowerCase() === selectedCategory)

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      amber: "bg-amber-100 text-amber-800 border-amber-200",
      emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
    }
    return colors[color as keyof typeof colors] || colors.green
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-slate-600 hover:text-green-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver al inicio</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Compass className="h-6 w-6 text-green-600" />
              <h1 className="text-xl font-bold text-slate-800">Turismo en Ecuador</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">🇪🇨 País de los Cuatro Mundos</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Descubre
            <br />
            <span className="text-green-600">Ecuador Mágico</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong>Ecuador: El país más biodiverso del planeta por km².</strong> Desde la Amazonía más rica del mundo
            hasta volcanes que tocan el cielo, culturas milenarias y el 10% de todas las especies conocidas en solo
            256,370 km².
            <span className="text-green-700 font-semibold">¡Cuatro mundos en un solo destino!</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-2">
              🌿 10% de especies mundiales
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
              🏔️ Volcán activo más alto del mundo
            </Badge>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 px-4 py-2">
              🏛️ Patrimonio UNESCO
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 px-4 py-2">
              🌺 Culturas ancestrales vivas
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <Tabs defaultValue="atracciones" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
            <TabsTrigger value="atracciones">Atracciones</TabsTrigger>
            <TabsTrigger value="gastronomia">Gastronomía</TabsTrigger>
            <TabsTrigger value="paquetes">Paquetes</TabsTrigger>
          </TabsList>

          <TabsContent value="atracciones" className="space-y-8">
            {/* Filter Categories */}
            <div className="flex justify-center flex-wrap gap-3">
              <Badge
                variant={selectedCategory === "todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-green-50"
                onClick={() => setSelectedCategory("todos")}
              >
                Todos
              </Badge>
              <Badge
                variant={selectedCategory === "naturaleza" ? "default" : "outline"}
                className="cursor-pointer hover:bg-green-50"
                onClick={() => setSelectedCategory("naturaleza")}
              >
                Naturaleza
              </Badge>
              <Badge
                variant={selectedCategory === "aventura" ? "default" : "outline"}
                className="cursor-pointer hover:bg-emerald-50"
                onClick={() => setSelectedCategory("aventura")}
              >
                Aventura
              </Badge>
              <Badge
                variant={selectedCategory === "cultura" ? "default" : "outline"}
                className="cursor-pointer hover:bg-amber-50"
                onClick={() => setSelectedCategory("cultura")}
              >
                Cultura
              </Badge>
            </div>

            {/* Atracciones Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredAtracciones.map((atraccion) => {
                const IconComponent = atraccion.icon
                return (
                  <Card key={atraccion.id} className="hover:shadow-lg transition-shadow border-green-100">
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={atraccion.image || `/placeholder.svg?height=300&width=500&query=${atraccion.name} Ecuador`}
                        alt={atraccion.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={getColorClasses(atraccion.color)}>{atraccion.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <IconComponent className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{atraccion.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-slate-800 mb-2">{atraccion.name}</CardTitle>
                          <CardDescription className="mb-3">{atraccion.description}</CardDescription>
                          <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{atraccion.distance}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{atraccion.hours}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold text-green-600">{atraccion.price}</div>
                          <div className="text-sm text-slate-500">por persona</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Destacados:</h4>
                        <div className="grid grid-cols-1 gap-1 text-sm">
                          {atraccion.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-1">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                              <span className="text-slate-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-1">Consejo del experto:</h4>
                        <p className="text-sm text-green-700">{atraccion.tips}</p>
                      </div>

                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Camera className="mr-2 h-4 w-4" />
                        Reservar Tour
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="gastronomia" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Gastronomía Ecuatoriana Auténtica</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Descubre los sabores únicos de Ecuador: desde la exótica cocina amazónica hasta los platos tradicionales
                andinos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {restaurantes.map((restaurante, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={
                        restaurante.image ||
                        `/placeholder.svg?height=200&width=300&query=${restaurante.cuisine} ecuatoriana restaurant`
                      }
                      alt={restaurante.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{restaurante.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-slate-800">{restaurante.name}</CardTitle>
                        <CardDescription className="mb-2">{restaurante.cuisine}</CardDescription>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4" />
                          <span>{restaurante.distance}</span>
                        </div>
                      </div>
                      <Badge variant="outline">{restaurante.priceRange}</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-slate-600 text-sm">{restaurante.description}</p>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-amber-800 mb-1">Especialidad:</h4>
                      <p className="text-sm text-amber-700">{restaurante.specialty}</p>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-600 hover:bg-amber-50 bg-transparent"
                    >
                      <Utensils className="mr-2 h-4 w-4" />
                      Ver Menú
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paquetes" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Paquetes Turísticos Ecuador</h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Experiencias completas para descubrir la magia de Ecuador: desde la Amazonía hasta los Andes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {paquetes.map((paquete) => (
                <Card key={paquete.id} className="hover:shadow-lg transition-shadow border-green-100">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={
                        paquete.image ||
                        `/placeholder.svg?height=200&width=300&query=${paquete.name} Ecuador tourism package`
                      }
                      alt={paquete.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-green-100 text-green-800">{paquete.duration}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-slate-800 mb-2">{paquete.name}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4" />
                          <span>{paquete.duration}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">${paquete.price}</div>
                        <div className="text-sm text-slate-500">por persona</div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Incluye:</h4>
                      <div className="space-y-1">
                        {paquete.includes.map((item, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-slate-600">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Experiencias:</h4>
                      <div className="flex flex-wrap gap-1">
                        {paquete.activities.map((activity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-green-50 text-green-700">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Reservar Paquete</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-100 to-emerald-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">¿Listo para tu Aventura Ecuatoriana?</h3>
              <p className="text-slate-600">
                Nuestro equipo especializado en turismo ecuatoriano está aquí para crear tu experiencia perfecta
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800">Llámanos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-2">Atención especializada</p>
                  <p className="font-semibold text-green-600">+593 7 270 0123</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800">Visítanos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-2">Centro Macas</p>
                  <p className="font-semibold text-green-600">Macas, Morona Santiago</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Car className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-slate-800">Transporte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-2">4x4 especializado</p>
                  <p className="font-semibold text-green-600">Tours seguros</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Plane className="mr-2 h-5 w-5" />
                Planificar Mi Aventura Ecuatoriana
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
