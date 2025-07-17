import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import {
  ScrollAnimation,
  StaggerAnimation,
} from "@/components/scroll-animations";
import { SimpleAnimations } from "@/components/simple-animations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Aluminum Services - Anodizing, Powder Coating & Technical Services | Ketar Aluminum",
  description:
    "Professional aluminum services in Ethiopia: anodized profiles, powder coating, doors, windows, curtain walls, handrails, skylights, and complete technical installation services.",
  keywords:
    "aluminum services Ethiopia, anodizing services, powder coating, aluminum doors, aluminum windows, curtain wall installation, handrails, skylights, technical services",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <SimpleAnimations />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive
              <span className="text-green-600 block">Aluminum Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From anodized and powder-coated aluminum profiles to complete technical works, 
              Ketar Aluminum provides a full range of aluminum solutions tailored to Ethiopia's 
              construction and architectural demands.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Anodized Aluminum Profiles
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        High-quality anodized aluminum profiles designed for durability, 
                        aesthetics, and corrosion resistance — a trusted choice by public 
                        and private sector clients.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Powder Coating <br /> Services
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Durable powder coating finishes in a wide color selection. 
                        Enhance appearance and protection with our professionally 
                        coated aluminum profiles.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Aluminum Doors & Windows
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Custom aluminum doors and windows, combining modern aesthetics, 
                        reliable performance, and expert installation for both residential 
                        and commercial needs.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Curtain Wall Systems
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Advanced curtain wall solutions including structural glazing, 
                        aluminum cladding, and weatherproof sealing — installed with 
                        precision and care.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Handrails & Guardrails
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Functional and stylish aluminum handrails and guardrails for stairs, 
                        balconies, and walkways — crafted for safety and built to last.
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Additional Services
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        We also offer expert installation of aluminum 
                        partitions, skylights, sun barkers, aluminum 
                        cladding, and composite panels.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ketar's Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of working with Ethiopia's most trusted
              aluminum service provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Integrity & Honesty
              </h3>
              <p className="text-gray-600">
                We conduct all our business with honesty and integrity 
                to build lasting trust with every client.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Helpful Support
              </h3>
              <p className="text-gray-600">
                Our team is always ready to assist and provide practical 
                solutions at every stage of your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Proven Track Record
              </h3>
              <p className="text-gray-600">
                Trusted by both private and public sectors across Ethiopia 
                for consistent quality and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Family-Owned Quality
              </h3>
              <p className="text-gray-600">
                Built on strong family values, we deliver reliable service with a personal touch and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From consultation to completion, we ensure quality and precision
              at every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Consultation
              </h3>
              <p className="text-gray-600">
                We discuss your requirements and provide expert guidance on the
                best aluminum solutions for your project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design & Planning
              </h3>
              <p className="text-gray-600">
                Our team creates detailed plans and specifications tailored to
                your specific needs and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Production
              </h3>
              <p className="text-gray-600">
                Quality manufacturing and finishing processes using premium
                materials and proven techniques.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Installation
              </h3>
              <p className="text-gray-600">
                Professional installation and quality assurance to ensure
                perfect results and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our experts today to discuss your aluminum service needs and
            get a personalized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl"
            >
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
    </div>
  );
}
