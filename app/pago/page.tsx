"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Building2, Check, Shield, Clock, Copy } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function PagoPage() {
  const searchParams = useSearchParams()
  const [paymentMethod, setPaymentMethod] = useState<string>("paypal")
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false)
  const [reservationData, setReservationData] = useState<any>(null)

  // Simular datos de reserva (en una app real, estos vendrían del estado global o API)
  useEffect(() => {
    // Simular datos de reserva
    setReservationData({
      roomName: "Suite Deluxe",
      checkIn: "15 de Enero, 2024",
      checkOut: "18 de Enero, 2024",
      nights: 3,
      guests: 2,
      pricePerNight: 180,
      totalPrice: 540,
      guestName: "Juan Pérez",
      email: "juan@email.com",
      phone: "+1 (555) 123-4567",
    })
  }, [])

  const handlePayment = async () => {
    setIsProcessing(true)

    // Simular procesamiento de pago
    await new Promise((resolve) => setTimeout(resolve, 3000))

    setIsProcessing(false)
    setPaymentComplete(true)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-2xl w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-slate-800">¡Pago Confirmado!</CardTitle>
            <CardDescription>Tu reserva ha sido procesada exitosamente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">Número de Confirmación</h3>
              <p className="text-2xl font-mono text-green-700">#HTL-2024-001</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-slate-800">Detalles de tu Reserva:</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Habitación:</span>
                  <p className="font-medium">{reservationData?.roomName}</p>
                </div>
                <div>
                  <span className="text-slate-600">Huéspedes:</span>
                  <p className="font-medium">{reservationData?.guests}</p>
                </div>
                <div>
                  <span className="text-slate-600">Check-in:</span>
                  <p className="font-medium">{reservationData?.checkIn}</p>
                </div>
                <div>
                  <span className="text-slate-600">Check-out:</span>
                  <p className="font-medium">{reservationData?.checkOut}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-600 mb-2">
                Hemos enviado la confirmación a <strong>{reservationData?.email}</strong>
              </p>
              <p className="text-sm text-slate-600">
                También recibirás un SMS de confirmación en <strong>{reservationData?.phone}</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Volver al Inicio
                </Button>
              </Link>
              <Button className="flex-1 bg-rose-600 hover:bg-rose-700">Descargar Confirmación</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!reservationData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando información de pago...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/reservas" className="flex items-center space-x-2 text-slate-600 hover:text-rose-600">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver a Reservas</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-rose-600" />
              <h1 className="text-xl font-bold text-slate-800">Pago Seguro</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Método de Pago</h2>
                <p className="text-slate-600 mb-6">Selecciona tu método de pago preferido</p>
              </div>

              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                {/* PayPal Option */}
                <Card
                  className={`cursor-pointer transition-all ${
                    paymentMethod === "paypal" ? "ring-2 ring-rose-500 border-rose-500" : "hover:shadow-md"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <Label htmlFor="paypal" className="text-lg font-semibold cursor-pointer">
                            PayPal
                          </Label>
                          <p className="text-sm text-slate-500">Pago rápido y seguro</p>
                        </div>
                      </div>
                      <Badge className="ml-auto bg-green-100 text-green-800">Recomendado</Badge>
                    </div>
                  </CardHeader>
                  {paymentMethod === "paypal" && (
                    <CardContent className="pt-0">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-3">
                          <Shield className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium text-blue-800">Protección del Comprador PayPal</span>
                        </div>
                        <p className="text-sm text-blue-700">
                          Serás redirigido a PayPal para completar tu pago de forma segura. No necesitas tener una
                          cuenta PayPal.
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>

                {/* Bank Transfer Option */}
                <Card
                  className={`cursor-pointer transition-all ${
                    paymentMethod === "transfer" ? "ring-2 ring-rose-500 border-rose-500" : "hover:shadow-md"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-slate-600" />
                        </div>
                        <div>
                          <Label htmlFor="transfer" className="text-lg font-semibold cursor-pointer">
                            Transferencia Bancaria
                          </Label>
                          <p className="text-sm text-slate-500">Pago directo desde tu banco</p>
                        </div>
                      </div>
                      <div className="ml-auto flex items-center space-x-1 text-amber-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">1-3 días</span>
                      </div>
                    </div>
                  </CardHeader>
                  {paymentMethod === "transfer" && (
                    <CardContent className="pt-0">
                      <div className="bg-slate-50 p-4 rounded-lg space-y-4">
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Datos Bancarios:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Banco:</span>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">Banco Nacional</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard("Banco Nacional")}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Cuenta:</span>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium font-mono">1234-5678-9012-3456</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard("1234-5678-9012-3456")}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Titular:</span>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">Hotel Centro Macas S.A.</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard("Hotel Centro Macas S.A.")}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">Concepto:</span>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium">Reserva #{reservationData.guestName}</span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-6 w-6 p-0"
                                  onClick={() => copyToClipboard(`Reserva #${reservationData.guestName}`)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-amber-50 p-3 rounded border border-amber-200">
                          <p className="text-sm text-amber-800">
                            <strong>Importante:</strong> Envía el comprobante de pago a{" "}
                            <strong>pagos@centromacas.com</strong> para confirmar tu reserva.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </RadioGroup>

              {/* Payment Button */}
              <Button
                size="lg"
                className="w-full bg-rose-600 hover:bg-rose-700 text-lg py-3"
                onClick={handlePayment}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Procesando Pago...</span>
                  </div>
                ) : (
                  <>
                    {paymentMethod === "paypal" ? "Pagar con PayPal" : "Confirmar Transferencia"}
                    <span className="ml-2">${reservationData.totalPrice}</span>
                  </>
                )}
              </Button>

              {/* Security Notice */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Pago 100% Seguro</h4>
                    <p className="text-sm text-green-700">
                      Utilizamos encriptación SSL de 256 bits para proteger tu información. Tus datos están
                      completamente seguros.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-slate-800">Resumen de tu Reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Habitación:</span>
                      <span className="font-medium">{reservationData.roomName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Check-in:</span>
                      <span className="font-medium">{reservationData.checkIn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Check-out:</span>
                      <span className="font-medium">{reservationData.checkOut}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Huéspedes:</span>
                      <span className="font-medium">{reservationData.guests}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Noches:</span>
                      <span className="font-medium">{reservationData.nights}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">
                        ${reservationData.pricePerNight} × {reservationData.nights} noches
                      </span>
                      <span className="font-medium">${reservationData.totalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Impuestos y tasas</span>
                      <span className="font-medium">Incluidos</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-rose-600">${reservationData.totalPrice}</span>
                  </div>

                  <div className="bg-rose-50 p-3 rounded-lg">
                    <p className="text-sm text-rose-800">
                      <strong>Política de Cancelación:</strong> Cancelación gratuita hasta 24 horas antes del check-in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
