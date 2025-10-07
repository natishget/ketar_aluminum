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
  Drill,
  FlaskConical,
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
import aluminumHeroImg from "@/assets/home/aluminum_home3.jpg";
import aluminumBodyImg from "@/assets/home/aluminum2-img.png";
import Hero from "@/components/home/hero";

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
  const products = [
    { id: 1, name: "Galvanizing Chemicals", src: "/chemical1.jpg" },
    {
      id: 2,
      name: "Composite panel",
      src: "AluminumCompositePanel.jpg",
    },
    { id: 3, name: "Dry Wall Screws", src: "/screw1.jpg" },
    { id: 4, name: "Curtain Wall System", src: "/CurtainWallSystem.jpg" },
    { id: 5, name: "Aluminum Profiles", src: "/AluminumProfiles.jpg" },
    { id: 6, name: "Self Drilling Screws", src: "/SelfDrillingScrews.avif" },
    { id: 7, name: "Fastening Screws", src: "/FasteningScrews.avif" },
    { id: 8, name: "Partitions", src: "/Partitions2.jpg" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <AluminumBackground />
      <AluminumShapes />

      {/* Hero Section (upgraded) */}
      <Hero />

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideLeft">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src={aluminumBodyImg}
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
                <Link href={`/about`}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent mt-6"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
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

              {/* Electroplastic Chemicals  */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <FlaskConical className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Electroplating (Galvanizing) Chemicals
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      High-performance electroplating and galvanizing chemicals
                      — engineered for superior coating, enhanced durability,
                      and long-lasting protection.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Corrosion-Resistant Formulas
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Consistent, Quality Finish
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Industrial-Grade Performance
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

              {/* Screws  */}
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                      <Drill className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Screw Production and Distribution
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We offer the best, high-quality screws with exceptional
                      strength, durability, and variety, ensuring reliable
                      performance and satisfaction for every project.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Self Screws
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Clipboard Screws
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                        Drywall Screws
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

          {/* Gallery Section */}
          <section className="px-6 py-10">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Some of Our Best Products
            </h2>
            <h3 className="text-lg text-green-600 mb-6 text-center">
              Product and Service at its Best
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 auto-rows-[200px]">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`
              relative group overflow-hidden rounded-xl shadow-xl
              ${
                index % 4 === 0
                  ? "sm:col-span-3 sm:row-span-2"
                  : "sm:col-span-2 sm:row-span-1"
              }
            `}
                >
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                  12+ years of building lasting relationships with clients
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
                Our Clients
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Some of Our Happy Clients
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We take pride in our long-standing relationships with clients
                across Ethiopia's private and public sectors. Here are some of
                the esteemed organizations we've had the pleasure to work with.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={300}>
            <InteractiveCarousel />
          </ScrollAnimation>
          <div className="w-full text-center mt-10 font-semibold text-xl">
            Product and Service at its best
          </div>
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
            {/* <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg font-semibold"
            >
              Get Free Quote
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button> */}
            <Link href={`tel:+251-911-123456`}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl bg-transparent px-10 py-4 text-lg font-semibold"
              >
                Call: +251-911-123456
                <Phone className="ml-3 h-5 w-5" />
              </Button>
            </Link>
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
              <span className="font-medium">12+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
