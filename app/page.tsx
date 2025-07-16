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
  Shield,
  Zap,
  Settings,
  Award,
  CheckCircle,
  Star,
  Users,
  Factory,
  Wrench,
  Clock,
  Target,
  Building,
  Home,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { InteractiveCarousel } from "@/components/interactive-carousel";
import {
  ScrollAnimation,
  StaggerAnimation,
} from "@/components/scroll-animations";
import {
  AluminumBackground,
  AluminumShapes,
} from "@/components/aluminum-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ketar Aluminum - Premium Aluminum Profiles & Technical Services in Ethiopia",
  description:
    "Leading aluminum supplier in Ethiopia since 2006. Specializing in anodized and powder coating aluminum profiles, doors, windows, curtain walls, and technical services. Founded by Anteneh Darsema.",
  keywords:
    "aluminum profiles Ethiopia, anodized aluminum, powder coating, aluminum doors, aluminum windows, curtain wall, Ketar Aluminum, Ethiopian aluminum supplier",
  openGraph: {
    title: "Ketar Aluminum - Premium Aluminum Profiles & Technical Services",
    description:
      "Leading aluminum supplier in Ethiopia since 2006. Quality aluminum profiles and technical services.",
    url: "https://ketaraluminum.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ketar Aluminum Homepage",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AluminumBackground />
      <AluminumShapes />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-red-100 rounded-lg opacity-30 transform -rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-2 bg-gradient-to-r from-green-200 to-transparent opacity-40"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 border-2 border-red-200 rounded-full opacity-25"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-50 to-red-50 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <ScrollAnimation animation="slideUp">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2 text-sm font-semibold">
                    🏭 Premium Aluminum Solutions Since 2006
                  </Badge>
                  <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    Excellence in
                    <span className="text-green-600 block"> Aluminum</span>
                    <span className="text-red-600">Profiles</span>
                  </h1>
                  <p className="text-xl text-gray-600 mt-8 leading-relaxed max-w-lg">
                    Ethiopia's trusted aluminum supplier offering premium
                    anodized and powder coating profiles, technical services,
                    and complete aluminum solutions for over 18 years.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl px-8 py-4 text-lg font-semibold"
                  >
                    Explore Products
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-red-500 text-red-600 hover:bg-red-50 shadow-lg bg-transparent px-8 py-4 text-lg font-semibold"
                  >
                    Request Quote
                    <Phone className="ml-3 h-5 w-5" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-8 pt-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      Trusted Quality
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      TIN: 00 53 39 59 97
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      500+ Projects
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      18+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/placeholder.svg?height=700&width=600"
                    alt="Ketar Aluminum premium aluminum profiles and manufacturing facility in Ethiopia"
                    width={600}
                    height={700}
                    className="rounded-3xl shadow-2xl"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          Ethiopian Leader
                        </div>
                        <div className="text-xs text-gray-600">
                          Aluminum Solutions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl opacity-80 shadow-xl animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-xl opacity-80 shadow-xl"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideLeft">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Ketar Aluminum manufacturing process and quality aluminum profiles"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-2xl font-bold text-green-600">2006</div>
                  <div className="text-sm text-gray-700 font-medium">
                    Founded in Ethiopia
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4 px-3 py-1">
                    About Ketar Aluminum
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Building Excellence in
                    <span className="text-green-600"> Aluminum</span> Since 2006
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Founded by Anteneh Darsema, Ketar Aluminum is a privately
                    owned Ethiopian company specializing in premium aluminum
                    profiles and technical services. Our ambition is to offer
                    customers the finest quality aluminum products with the
                    quickest service.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We believe good service is worrying about the details so our
                    customers don't have to. With over 18 years of experience,
                    we've built lasting relationships with clients across
                    Ethiopia's private and public sectors.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Quality Assured
                      </div>
                      <div className="text-sm text-gray-600">
                        Premium Standards
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Industry Leader
                      </div>
                      <div className="text-sm text-gray-600">
                        Ethiopian Market
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services and Products Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 px-4 py-2">
              Our Expertise
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive aluminum solutions including anodized and powder
              coating profiles, technical services, and complete project
              implementation
            </p>
          </div>

          <StaggerAnimation animation="slideUp" staggerDelay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Aluminum Profiles */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Layers className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Aluminum Profiles
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Premium anodized and powder coating aluminum profiles with
                      superior quality and finish.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Anodized Profiles
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Powder Coating
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Custom Profiles
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Doors & Windows */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Home className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Doors & Windows
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      High-quality aluminum doors and windows with modern
                      designs and excellent durability.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Aluminum Doors
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Aluminum Windows
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Custom Designs
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Curtain Wall & Cladding */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Building className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Curtain Wall & Cladding
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Professional curtain wall systems and aluminum cladding
                      for modern architectural projects.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Curtain Wall Systems
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Aluminum Cladding
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Composite Panels
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </StaggerAnimation>

          {/* Additional Services */}
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Services
              </h3>
              <p className="text-lg text-gray-600">
                Complete aluminum solutions for all your needs
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Shield className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Handrails & Guardrails
                </h4>
                <p className="text-sm text-gray-600">
                  Safety and aesthetic solutions
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Layers className="h-12 w-12 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Partitions
                </h4>
                <p className="text-sm text-gray-600">
                  Modern space division solutions
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Settings className="h-12 w-12 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Skylights
                </h4>
                <p className="text-sm text-gray-600">
                  Natural lighting solutions
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                  <Shield className="h-12 w-12 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Sun Barkers
                </h4>
                <p className="text-sm text-gray-600">
                  Solar protection systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4 px-4 py-2">
              Why Choose Ketar
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what sets us apart as Ethiopia's leading aluminum
              solutions provider
            </p>
          </div>

          <ScrollAnimation animation="scaleIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Assured
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium aluminum profiles with superior anodizing and powder
                  coating finishes for lasting durability.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quick Service
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast delivery and responsive customer service. We worry about
                  the details so you don't have to.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Technical Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete technical services including installation,
                  maintenance, and custom fabrication solutions.
                </p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Trusted Partner
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  18+ years of building lasting relationships with clients
                  across Ethiopia's private and public sectors.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Company Pledges */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Pledges to You
              </h3>
              <p className="text-gray-600">
                The commitments that guide our business relationships
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Integrity & Honesty
                  </h4>
                  <p className="text-gray-600">
                    We pledge to guide all our actions with the utmost in
                    integrity and honesty in every business interaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Ready to Assist
                  </h4>
                  <p className="text-gray-600">
                    We pledge to always be ready to assist and help provide
                    solutions in any way possible for our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section - Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-20">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 px-4 py-2">
                Client Testimonials
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hear from satisfied customers who trust Ketar Aluminum for their
                projects across Ethiopia
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={300}>
            <InteractiveCarousel />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-red-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-lg transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge className="bg-white/20 text-white hover:bg-white/20 mb-6 px-4 py-2 backdrop-blur-sm">
            Ready to Get Started?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Transform Your Project with
            <span className="block">Premium Aluminum</span>
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of satisfied customers who trust Ketar Aluminum for
            their most important projects. Get your personalized quote today and
            experience Ethiopian aluminum excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg font-semibold"
            >
              Get Free Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl bg-transparent px-10 py-4 text-lg font-semibold"
            >
              Call: +251-911-123456
              <Phone className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-12 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-200" />
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-200" />
              <span className="font-medium">Competitive Pricing</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-200" />
              <span className="font-medium">Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-200" />
              <span className="font-medium">18+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
