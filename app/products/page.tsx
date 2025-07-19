import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Search,
  Filter,
  Star,
  ShoppingCart,
  Download,
  Eye,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  FileText,
  View,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { ExampleProductGallery } from "@/components/product-image-gallery";
import {
  ScrollAnimation,
  StaggerAnimation,
} from "@/components/scroll-animations";
import {
  AluminumBackground,
  AluminumShapes,
} from "@/components/aluminum-background";

import product1 from "@/assets/Products/aluminum-profiles.jpg";
import product2 from "@/assets/Products/composite-panels.jpg";
import product3 from "@/assets/Products/aluminum-accessories.jpg";
import product4 from "@/assets/Products/aluminum-doors-windows.jpg";
import product5 from "@/assets/Products/curtain-wall.avif";
import product6 from "@/assets/Products/handrails.webp";
import product7 from "@/assets/Products/sun-barkers.avif";
import product8 from "@/assets/Products/partitions.webp";

import Product1 from "@/assets/Products/AnodizedAluminumProfile.jpg";
import Product2 from "@/assets/Products/PowderCoatedProfile.jpg";
import Product3 from "@/assets/Products/AluminumCompositePanel.jpg";
import Product4 from "@/assets/Products/AluminumDoorWindow.jpg";
import Product5 from "@/assets/Products/CurtainWallSystem.jpg";
import { ViewProductsButton } from "./ViewProductsButton";
import ContactUsButtons from "./ContactUsButtons";


export default function ProductsPage() {

  const productCategories = [
  {
    id: 1,
    name: "Aluminum Profiles",
    description: "Anodized and powder-coated profiles in various shapes.",
    image: product1,
    color: "green",
  },
  {
    id: 2,
    name: "Composite Panels",
    description: "Durable and aesthetic panels for cladding and facades.",
    image: product2,
    color: "red",
  },
  {
    id: 3,
    name: "Aluminum Accessories",
    description: "Fittings and accessories for aluminum installations.",
    image: product3,
    color: "green",
  },
  {
    id: 4,
    name: "Doors & Windows",
    description: "Custom aluminum doors and windows for all building types.",
    image: product4,
    color: "red",
  },
  {
    id: 5,
    name: "Curtain Wall & Cladding",
    description: "Advanced aluminum systems for modern architectural facades.",
    image: product5,
    color: "green",
  },
  {
    id: 6,
    name: "Handrails & Guardrails",
    description: "Safe and stylish handrail systems for stairs and balconies.",
    image: product6,
    color: "red",
  },
  {
    id: 7,
    name: "Sun Barkers & Skylights",
    description: "Functional aluminum systems for shading and daylighting.",
    image: product7,
    color: "green",
  },
  {
    id: 8,
    name: "Aluminum Partitions",
    description: "Elegant aluminum partition systems for interior layouts.",
    image: product8,
    color: "red",
  },
];


const featuredProducts = [
  {
    id: 1,
    name: "Anodized Aluminum Profile",
    description: "Durable aluminum profile with corrosion-resistant anodized finish.",
    price: "Quote",
    unit: "per meter",
    rating: 4.9,
    reviews: 98,
    image: Product1,
    specs: ["Finish: Clear or Colored Anodizing", "Length: Custom sizes", "Use: Windows, Doors, Curtain Walls"],
    inStock: true,
    category: "Profiles",
  },
  {
    id: 2,
    name: "Powder Coated Profile",
    description: "Aluminum profile with high-quality powder coating for enhanced aesthetics.",
    price: "Quote",
    unit: "per meter",
    rating: 4.8,
    reviews: 76,
    image: Product2,
    specs: ["Colors: Wide range available", "Use: Frames, Partitions", "Finish: Durable and Weather-Resistant"],
    inStock: true,
    category: "Finishes",
  },
  {
    id: 3,
    name: "Aluminum Composite Panel",
    description: "Premium composite panels for cladding and architectural façades.",
    price: "Quote",
    unit: "per sq meter",
    rating: 4.7,
    reviews: 88,
    image: Product3,
    specs: ["Finish: Matte, Glossy, Brushed", "Size: Standard & Custom", "Use: Exterior Cladding"],
    inStock: true,
    category: "Panels",
  },
  {
    id: 4,
    name: "Aluminum Door & Window System",
    description: "Modern aluminum frames built for performance and style.",
    price: "Quote",
    unit: "per set",
    rating: 4.6,
    reviews: 64,
    image: Product4,
    specs: ["Types: Sliding, Hinged, Fixed", "Energy-Efficient", "Customizable Designs"],
    inStock: true,
    category: "Doors & Windows",
  },
  {
    id: 5,
    name: "Curtain Wall System",
    description: "Advanced curtain wall and structural glazing systems.",
    price: "Quote",
    unit: "per sq meter",
    rating: 4.8,
    reviews: 72,
    image: Product5,
    specs: ["Weather Sealing", "Thermal Performance", "Installation Included"],
    inStock: true,
    category: "Curtain Wall",
  },
];


  const alloySpecs = [
    {
      alloy: "6061-T6",
      strength: "High",
      corrosion: "Excellent",
      weldability: "Good",
      applications: "Structural, Marine",
    },
    {
      alloy: "6063-T5",
      strength: "Medium",
      corrosion: "Good",
      weldability: "Excellent",
      applications: "Extrusions, Trim",
    },
    {
      alloy: "5052-H32",
      strength: "Medium",
      corrosion: "Excellent",
      weldability: "Good",
      applications: "Marine, Tanks",
    },
    {
      alloy: "3003-H14",
      strength: "Low",
      corrosion: "Good",
      weldability: "Excellent",
      applications: "General Purpose",
    },
  ];
  
  const which = "product";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AluminumBackground />
      <AluminumShapes />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">
              Our Aluminum Products
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aluminum <span className="text-green-600">Products</span>
              <span className="text-red-600 block">Catalog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore a wide range of high-quality aluminum profiles, accessories, 
              and components designed to meet the needs of Ethiopia’s 
              construction industry.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <Button variant="outline" className="px-6 py-3 bg-transparent">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Product Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our extensive catalog by product type
              </p>
            </div>
          </ScrollAnimation>

          <StaggerAnimation animation="scaleIn" staggerDelay={150}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {productCategories.map((category) => (
                <Card
                  key={category.id}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden cursor-pointer"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.name.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            {index < category.name.split("\n").length - 1 && (
                              <br />
                            )}
                          </span>
                        ))}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <ViewProductsButton
                        color={category.color as "green" | "red"}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </StaggerAnimation>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4 px-4 py-2">
                Featured Products
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Popular Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most requested aluminum products with detailed
                specifications and pricing
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollAnimation
                key={product.id}
                animation="slideUp"
                delay={index * 100}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            product.inStock ? "bg-green-500" : "bg-red-500"
                          } text-white`}
                        >
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-800">
                          {product.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 ml-2">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Specifications:
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {product.specs.map((spec, index) => (
                            <li key={index}>• {spec}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Price and Actions */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            {product.price}
                          </span>
                          <span className="text-sm text-gray-600 ml-1">
                            {product.unit}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <ViewProductsButton type={which as "product" | "categories"} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Aluminum Alloy Specifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Technical specifications for our most common aluminum alloys
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={300}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-500 to-red-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">
                        Alloy
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Strength
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Corrosion Resistance
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Weldability
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Common Applications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {alloySpecs.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {spec.alloy}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.strength}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.corrosion}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.weldability}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {spec.applications}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section> */}

      {/* Product Gallery */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative z-10" id="product-gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4 px-4 py-2">
                Product Gallery
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                See Our Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                High-resolution images of our aluminum products and
                manufacturing processes
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeIn" delay={300}>
            <ExampleProductGallery />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-lg transform rotate-45"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animation="slideUp">
            <Badge className="bg-white/20 text-white hover:bg-white/20 mb-6 px-4 py-2 backdrop-blur-sm">
              Need Custom Products?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Can't Find What You Need?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our expert team can create custom aluminum products tailored to
              your exact specifications. Get a personalized quote today.
            </p>
            <ContactUsButtons size="lg" />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
