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

export default function ProductsPage() {
  const productCategories = [
    {
      id: 1,
      name: "Aluminum Sheets",
      description: "High-quality sheets in various thicknesses",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 24,
      color: "green",
    },
    {
      id: 2,
      name: "Aluminum Bars",
      description: "Round, square, and rectangular bars",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 18,
      color: "red",
    },
    {
      id: 3,
      name: "Aluminum Tubes",
      description: "Seamless and welded tube options",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 15,
      color: "green",
    },
    {
      id: 4,
      name: "Custom Extrusions",
      description: "Engineered to your specifications",
      image: "/placeholder.svg?height=300&width=400",
      productCount: 32,
      color: "red",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "6061-T6 Aluminum Sheet",
      description:
        "Premium grade aluminum sheet with excellent corrosion resistance",
      price: "$12.50",
      unit: "per sq ft",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=300&width=300",
      specs: ['Thickness: 0.125"', "Size: 4' x 8'", "Alloy: 6061-T6"],
      inStock: true,
      category: "Sheets",
    },
    {
      id: 2,
      name: "Custom Aluminum Extrusion",
      description:
        "Precision-engineered custom profiles for your specific needs",
      price: "Quote",
      unit: "per linear ft",
      rating: 5.0,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      specs: ["Custom Design", "Various Alloys", "Any Length"],
      inStock: true,
      category: "Extrusions",
    },
    {
      id: 3,
      name: "6063 Aluminum Tube",
      description: "Seamless aluminum tubing for structural applications",
      price: "$8.75",
      unit: "per linear ft",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      specs: ['OD: 2"', 'Wall: 0.125"', "Length: 20'"],
      inStock: true,
      category: "Tubes",
    },
    {
      id: 4,
      name: "Anodized Aluminum Bar",
      description: "Premium anodized finish for enhanced durability",
      price: "$15.25",
      unit: "per linear ft",
      rating: 4.7,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      specs: ['Size: 1" x 2"', "Length: 12'", "Finish: Clear Anodized"],
      inStock: false,
      category: "Bars",
    },
    {
      id: 5,
      name: "5052 Marine Grade Sheet",
      description: "Corrosion-resistant aluminum for marine applications",
      price: "$18.90",
      unit: "per sq ft",
      rating: 4.9,
      reviews: 94,
      image: "/placeholder.svg?height=300&width=300",
      specs: ['Thickness: 0.190"', "Size: 4' x 10'", "Marine Grade"],
      inStock: true,
      category: "Sheets",
    },
    {
      id: 6,
      name: "Powder Coated Profile",
      description: "Custom powder coating in various colors",
      price: "Quote",
      unit: "per linear ft",
      rating: 4.8,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      specs: ["Custom Colors", "Durable Finish", "Various Profiles"],
      inStock: true,
      category: "Finishes",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AluminumBackground />
      <AluminumShapes />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">
              Premium Products
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aluminum <span className="text-green-600">Products</span>
              <span className="text-red-600 block">Catalog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of premium aluminum products,
              from standard sheets and bars to custom extrusions and specialized
              alloys.
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
                Browse our extensive catalog organized by product type
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
                      <div
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${
                          category.color === "green"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {category.productCount} items
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`${
                          category.color === "green"
                            ? "text-green-600 border-green-600 hover:bg-green-50"
                            : "text-red-600 border-red-600 hover:bg-red-50"
                        } bg-transparent`}
                      >
                        View Products
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
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
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {product.price === "Quote"
                            ? "Get Quote"
                            : "Add to Cart"}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative z-10">
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

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg font-semibold"
              >
                <Download className="mr-3 h-6 w-6" />
                Download Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl bg-transparent px-10 py-4 text-lg font-semibold"
              >
                Request Custom Quote
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
