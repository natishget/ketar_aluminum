import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Download,
  Calendar,
  MessageSquare,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactFormValidation } from "@/components/contact-form-validation"
import { ScrollAnimation } from "@/components/scroll-animations"
import { AluminumBackground, AluminumShapes } from "@/components/aluminum-background"

export default function ContactPage() {
  const faqs = [
    {
      question: "What is your minimum order quantity?",
      answer:
        "We don't have a minimum order quantity. Whether you need a single piece or thousands, we're here to help.",
    },
    {
      question: "How long does custom fabrication take?",
      answer:
        "Custom fabrication typically takes 5-10 business days depending on complexity. Rush orders can be accommodated.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide. International shipping costs and delivery times vary by destination.",
    },
    {
      question: "What aluminum alloys do you work with?",
      answer:
        "We work with all standard aluminum alloys including 6061, 6063, 5052, 3003, and specialty alloys upon request.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AluminumBackground />
      <AluminumShapes />

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
                  <span className="text-white font-bold text-sm">M</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">K & M Aluminum</h1>
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
              <Link href="/services" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Products
              </Link>
              <Link href="/contact" className="text-gray-900 font-semibold border-b-2 border-green-500 pb-1">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenu currentPage="contact" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">Get In Touch</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="text-green-600">K & M</span>
              <span className="text-red-600 block">Aluminum</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your aluminum needs? Our expert team is here to help you find the perfect solution for
              your project.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
                  <p className="text-gray-600 mb-4">Speak directly with our aluminum experts</p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-900">(555) 123-4567</div>
                    <div className="text-sm text-gray-600">Mon-Fri: 8AM-6PM EST</div>
                    <div className="text-sm text-gray-600">Emergency: 24/7</div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
                  <p className="text-gray-600 mb-4">Send us your detailed requirements</p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-900">info@kmaluminum.com</div>
                    <div className="text-sm text-gray-600">Response within 2 hours</div>
                    <div className="text-sm text-gray-600">quotes@kmaluminum.com</div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
                  <p className="text-gray-600 mb-4">Tour our state-of-the-art facility</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-900">
                      123 Industrial Drive
                      <br />
                      Manufacturing City, MC 12345
                    </div>
                    <div className="text-sm text-gray-600">By appointment only</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn">
            <ContactFormValidation />
          </ScrollAnimation>
        </div>
      </section>

      {/* Map and Business Hours */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map */}
            <ScrollAnimation animation="slideLeft">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Find Our Location</h3>
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Industrial Drive, Manufacturing City, MC 12345</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Visit
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Business Hours & Info */}
            <ScrollAnimation animation="slideRight">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Business Hours</h3>
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">Monday - Friday</span>
                          <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">Saturday</span>
                          <span className="text-gray-600">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">Sunday</span>
                          <span className="text-gray-600">Closed</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex items-center space-x-2 text-green-600">
                            <Clock className="h-5 w-5" />
                            <span className="font-medium">Currently Open</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-3" />
                      Download Product Catalog
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Calendar className="h-4 w-4 mr-3" />
                      Schedule Facility Tour
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <MessageSquare className="h-4 w-4 mr-3" />
                      Live Chat Support
                    </Button>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                      <Facebook className="h-6 w-6 text-gray-600 hover:text-green-600" />
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                      <Twitter className="h-6 w-6 text-gray-600 hover:text-green-600" />
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                      <Linkedin className="h-6 w-6 text-gray-600 hover:text-green-600" />
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors cursor-pointer">
                      <Instagram className="h-6 w-6 text-gray-600 hover:text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-12">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4 px-4 py-2">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Common Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to help you get started with K & M Aluminum</p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} animation="slideUp" delay={index * 100}>
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation animation="fadeIn" delay={600}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <div className="absolute -right-2 -bottom-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">K & M Aluminum</h3>
                  <p className="text-gray-400">Premium Aluminum Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
                Leading provider of high-quality aluminum products and services. Committed to excellence, precision, and
                customer satisfaction since 1998.
              </p>
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Facebook className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Twitter className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="h-6 w-6" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-8">Contact Info</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">(555) 123-4567</div>
                    <div className="text-gray-500 text-sm">Mon-Fri 8AM-6PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">info@kmaluminum.com</div>
                    <div className="text-gray-500 text-sm">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-300 font-medium">
                      123 Industrial Drive
                      <br />
                      Manufacturing City, MC 12345
                    </div>
                    <div className="text-gray-500 text-sm">Visit our facility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© {new Date().getFullYear()} K & M Aluminum. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-green-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
