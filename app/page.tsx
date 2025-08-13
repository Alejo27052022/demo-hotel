import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Star, Calendar, Users, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-rose-600" />
              <h1 className="text-2xl font-bold text-slate-800">Centro Macas</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-slate-600 hover:text-rose-600 transition-colors">
                Inicio
              </a>
              <a href="#habitaciones" className="text-slate-600 hover:text-rose-600 transition-colors">
                Habitaciones
              </a>
              <Link href="/turismo" className="text-slate-600 hover:text-rose-600 transition-colors">
                Turismo
              </Link>
              <Link href="/talleres" className="text-slate-600 hover:text-rose-600 transition-colors">
                Talleres
              </Link>
              <Button className="bg-rose-600 hover:bg-rose-700">Reservar Ahora</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-rose-100 text-rose-800 hover:bg-rose-200">Experiencia Premium de Bienestar</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Descubre Serenidad y<br />
            <span className="text-rose-600">Elegancia</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tu viaje hacia el bienestar y la relajación comienza aquí. Disfruta de nuestras habitaciones de lujo y
            talleres transformadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservas">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Reservar Habitación
              </Button>
            </Link>
            <Link href="/talleres">
              <Button
                size="lg"
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 text-lg px-8 py-3 bg-transparent"
              >
                <Users className="mr-2 h-5 w-5" />
                Ver Talleres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">¿Por qué elegir Centro Macas?</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Ofrecemos una experiencia única que combina hospitalidad de lujo con bienestar integral
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-slate-800">Ubicación Privilegiada</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  En el corazón de la zona turística, cerca de las mejores atracciones y paisajes naturales.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-slate-800">Talleres de Bienestar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Sesiones transformadoras que nutren tu cuerpo y alma con técnicas de relajación y sanación.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-rose-600" />
                </div>
                <CardTitle className="text-slate-800">Servicio Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Atención personalizada las 24 horas con el más alto estándar de calidad y comodidad.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section id="habitaciones" className="py-16 px-4 bg-rose-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">Reserva tu Estadía Hoy</h3>
              <p className="text-slate-600">Pagos seguros y fáciles vía PayPal y transferencias bancarias</p>
            </div>

            <Card className="border-rose-200">
              <CardHeader>
                <CardTitle className="text-center text-slate-800">Formulario de Reserva Rápida</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Fecha de Entrada</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Fecha de Salida</label>
                      <input
                        type="date"
                        className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Huéspedes</label>
                      <select className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                        <option>1 Huésped</option>
                        <option>2 Huéspedes</option>
                        <option>3 Huéspedes</option>
                        <option>4+ Huéspedes</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de Habitación</label>
                      <select className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                        <option>Suite Estándar</option>
                        <option>Suite Deluxe</option>
                        <option>Suite Premium</option>
                        <option>Suite Presidencial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Método de Pago</label>
                      <select className="w-full p-3 border border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                        <option>PayPal</option>
                        <option>Transferencia Bancaria</option>
                      </select>
                    </div>
                    <Link href="/reservas">
                      <Button className="w-full bg-rose-600 hover:bg-rose-700 text-lg py-3">
                        Ver Todas las Opciones
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Talleres Section Preview */}
      <section id="talleres" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-200">Sección Especial</Badge>
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Talleres de Bienestar</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Revitaliza tu espíritu con nuestros talleres transformadores que nutren tu cuerpo y alma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-800">Libera y Sana con Rosa</CardTitle>
                <CardDescription>Sesiones de 90 minutos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Aprende técnicas de meditación para encontrar paz interior y claridad mental.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-600">$45</span>
                  <Link href="/talleres">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                    >
                      Inscribirse
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-800">Yoga Restaurativo</CardTitle>
                <CardDescription>Sesiones de 75 minutos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Posturas suaves y relajantes para restaurar tu energía vital.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-600">$40</span>
                  <Link href="/talleres">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                    >
                      Inscribirse
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-slate-800">Terapia de Sonido</CardTitle>
                <CardDescription>Sesiones de 60 minutos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Sanación a través de frecuencias y vibraciones terapéuticas.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-600">$50</span>
                  <Link href="/talleres">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-500 text-pink-600 hover:bg-pink-50 bg-transparent"
                    >
                      Inscribirse
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/talleres">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Ver Todos los Talleres
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-rose-400" />
                <h4 className="text-xl font-bold">Centro Macas</h4>
              </div>
              <p className="text-slate-300">Tu destino de bienestar y relajación en el corazón de la zona turística.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@liberaysana.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Wellness Ave, Paradise City</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <div className="space-y-2 text-slate-300">
                <a href="#habitaciones" className="block hover:text-rose-400 transition-colors">
                  Reservas
                </a>
                <Link href="/turismo" className="block hover:text-rose-400 transition-colors">
                  Información Turística
                </Link>
                <Link href="/talleres" className="block hover:text-rose-400 transition-colors">
                  Talleres de Bienestar
                </Link>
                <a href="#" className="block hover:text-rose-400 transition-colors">
                  Políticas
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Hotel Centro Macas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
