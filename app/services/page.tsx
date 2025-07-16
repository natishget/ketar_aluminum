import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Layers,
  Home,
  Building,
  Shield,
  CheckCircle,
  Settings,
  Wrench,
  Award,
  Target,
  Zap,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollAnimation, StaggerAnimation } from "@/components/scroll-animations"
import { SimpleAnimations } from "@/components/simple-animations"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aluminum Services - Anodizing, Powder Coating & Technical Services | Ketar Aluminum",
  description:
    "Professional aluminum services in Ethiopia: anodized profiles, powder coating, doors, windows, curtain walls, handrails, skylights, and complete technical installation services.",
  keywords:
    "aluminum services Ethiopia, anodizing services, powder coating, aluminum doors, aluminum windows, curtain wall installation, handrails, skylights, technical services",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-2 border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div className="absolute -right-2 -bottom-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Ketar Aluminum</h1>
                <p className="text-sm text-gray-600">Premium Aluminum Solutions</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-900 font-semibold border-b-2 border-green-500 pb-1">
                Services
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenu currentPage="services" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <SimpleAnimations />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">Our Services</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="text-green-600 block">Aluminum Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From premium anodized profiles to complete technical installations, we offer the full spectrum of aluminum
              services to meet Ethiopia's construction and architectural needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Anodized Aluminum Profiles */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4 w-16 h-16 border-2 border-white/30 rounded-lg transform rotate-12"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full"></div>
                        <Layers className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Anodized Aluminum Profiles</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Premium anodized aluminum profiles with superior corrosion resistance and exceptional finish
                        quality for long-lasting durability.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Clear & Colored Anodizing
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Superior Corrosion Resistance
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Various Profile Shapes
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Custom Specifications
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Powder Coating Services */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4 w-20 h-2 bg-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-2 bg-white/30 rounded-full"></div>
                        <Settings className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Powder Coating Services</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Professional powder coating services offering durable, attractive finishes in a wide range of
                        colors and textures for enhanced aesthetics.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Wide Color Selection
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Durable Finish Quality
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Weather Resistant
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Custom Color Matching
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Doors & Windows */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-lg transform rotate-45"></div>
                        <Home className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Aluminum Doors & Windows</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        High-quality aluminum doors and windows with modern designs, excellent security features, and
                        superior thermal performance.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Residential & Commercial
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Custom Designs Available
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Energy Efficient
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Professional Installation
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Curtain Wall Systems */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4 w-16 h-1 bg-white/40 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-12 h-1 bg-white/40 rounded-full"></div>
                        <Building className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Curtain Wall Systems</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Advanced curtain wall systems for modern commercial buildings, providing structural integrity,
                        weather protection, and architectural beauty.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Structural Glazing Systems
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Weather Sealing
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Thermal Performance
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Complete Installation
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Handrails & Guardrails */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4 w-10 h-10 border-2 border-white/30 rounded-lg"></div>
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white/30 rounded-full"></div>
                        <Shield className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Handrails & Guardrails</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Safety-focused handrail and guardrail systems combining functionality with aesthetic appeal for
                        stairs, balconies, and walkways.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Safety Compliant Design
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Various Styles Available
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Durable Construction
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          Professional Installation
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {/* Additional Services */}
              <ScrollAnimation>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="h-64 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4 w-14 h-14 border-2 border-white/30 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-10 h-10 border-2 border-white/30 rounded-lg transform rotate-12"></div>
                        <Wrench className="h-20 w-20 text-white relative z-10" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Complete range of aluminum solutions including partitions, skylights, sun barkers, and aluminum
                        cladding for comprehensive project needs.
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Aluminum Partitions
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Skylights & Sun Barkers
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Aluminum Cladding
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-3 flex-shrink-0" />
                          Composite Panels
                        </li>
                      </ul>
                      <Button
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent w-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </StaggerAnimation>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Ketar's Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Ethiopia's most trusted aluminum service provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">18+ Years Experience</h3>
              <p className="text-gray-600">
                Nearly two decades of expertise in aluminum solutions across Ethiopia's construction industry.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Focus</h3>
              <p className="text-gray-600">
                Commitment to delivering the finest quality aluminum products with superior finishes and durability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Service</h3>
              <p className="text-gray-600">
                Fast, responsive service delivery because we believe in worrying about the details for our customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Partner</h3>
              <p className="text-gray-600">
                Trusted by both private and public sectors across Ethiopia for consistent quality and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to completion, we ensure quality and precision at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your requirements and provide expert guidance on the best aluminum solutions for your
                project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Design & Planning</h3>
              <p className="text-gray-600">
                Our team creates detailed plans and specifications tailored to your specific needs and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production</h3>
              <p className="text-gray-600">
                Quality manufacturing and finishing processes using premium materials and proven techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">
                Professional installation and quality assurance to ensure perfect results and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss your aluminum service needs and get a personalized quote for your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl">
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-xl bg-transparent"
            >
              Call +251-911-123456
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">K</span>
                  </div>
                  <div className="absolute -right-1 -bottom-1 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">A</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Ketar Aluminum</h3>
                  <p className="text-gray-400 text-sm">Premium Aluminum Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of high-quality aluminum services in Ethiopia. Committed to excellence, precision, and
                customer satisfaction since 2006.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">+251-911-123456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-gray-300">info@ketaraluminum.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-400 mt-1" />
                  <span className="text-gray-300">
                    Addis Ababa, Ethiopia
                    <br />
                    Bole Sub City
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Ketar Aluminum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
