import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { ContactFormValidation } from "@/components/contact-form-validation";
import { ScrollAnimation } from "@/components/scroll-animations";
import {
  AluminumBackground,
  AluminumShapes,
} from "@/components/aluminum-background";

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
      answer:
        "Yes, we ship worldwide. International shipping costs and delivery times vary by destination.",
    },
    {
      question: "What aluminum alloys do you work with?",
      answer:
        "We work with all standard aluminum alloys including 6061, 6063, 5052, 3003, and specialty alloys upon request.",
    },
  ];

  function isWithInBusinessHours(): boolean {
    const now = new Date();

    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const currentTime = hours * 60 + minutes;

    // Mon - Fri (1 to 5)
    if (day >= 1 && day <= 5) {
      const start = 2 * 60 + 30; // 2:30 AM => 150 minutes
      const end = 23 * 60 + 30; // 11:30 PM => 1410 minutes
      return currentTime >= start && currentTime <= end;
    }

    // Saturday (6)
    if (day === 6) {
      const start = 2 * 60; // 2:00 AM => 120 minutes
      const end = 10 * 60 + 30; // 10:30 AM => 630 minutes
      return currentTime >= start && currentTime <= end;
    }

    // Sunday (0) or out of range
    return false;
  }

  const checkTimeAndDate = isWithInBusinessHours();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      <AluminumBackground />
      <AluminumShapes />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="slideUp" delay={500}>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact <span className="text-green-600">Ketar</span>
              <span className="text-red-600 block">Aluminum</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your aluminum needs? Our expert team is here to
              help you find the perfect solution for your project.
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Call Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Speak directly with our aluminum experts
                  </p>
                  <div className="space-y-2">
                    <div className="text-lg font-semibold text-gray-900">
                      <a href="tel:0930329599">+251-930-32-9599</a> <br />
                      <a href="tel:0911690818">+251-911-69-0818</a>
                    </div>
                    <div className="text-sm text-gray-600">
                      Mon-Sun: 8AM-6PM EST
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Send us your detailed requirements
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:ketaraluminumplc@gmail.com"
                      className=" font-semibold text-gray-900 hover:text-red-300 transition-colors"
                    >
                      ketaraluminumplc@gmail.com
                    </a>
                    <div className="text-sm text-gray-600">
                      Response within 24 hours
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="text-center shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Visit Us and Experience True Satisfaction
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://maps.app.goo.gl/mQBxswnxp55V8FdT9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-900 hover:text-green-300 transition-colors"
                    >
                      Yeka Sub City Megenagna <br /> Shola infront of Sumeya
                      Mosque <br />
                      Addis Ababa, Ethiopia
                    </a>
                    <div className="text-sm text-gray-600">
                      No appointment needed
                    </div>
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
          <ScrollAnimation animation="fadeIn" delay={500}>
            <ContactFormValidation />
          </ScrollAnimation>
        </div>
      </section>

      {/* Map and Business Hours */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map */}
            <ScrollAnimation animation="slideLeft" delay={500}>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Find Our Location
                </h3>
                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4707933973123!2d38.79029539999999!3d9.0207451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850dc39395a1%3A0xf315000fbd08b55d!2sKETAR%20ALUMINUM%20TECHNICS%20PLC!5e0!3m2!1sen!2set!4v1752750410799!5m2!1sen!2set"
                    style={{ border: 0 }}
                    className="w-full h-full rounded-2xl border-gray-200"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* <div className="text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Yeka Sub City Megenagna Shola infront of Sumeya Mosque
                    </p>
                  </div> */}
                </div>
                {/* <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div> */}
              </div>
            </ScrollAnimation>

            {/* Business Hours & Info */}
            <ScrollAnimation animation="slideRight">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    Business Hours
                  </h3>
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            Monday - Friday
                          </span>
                          <span className="text-gray-600">
                            8:30 AM - 11:30 PM
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            Saturday
                          </span>
                          <span className="text-gray-600">
                            8:00 AM - 10:30 PM
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">
                            Sunday
                          </span>
                          <span className="text-gray-600">Closed</span>
                        </div>
                        <div className="border-t pt-4">
                          <div className="flex items-center space-x-2 ">
                            <Clock className="h-5 w-5" />
                            <span
                              className={`font-medium ${
                                checkTimeAndDate
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {checkTimeAndDate
                                ? "Currently Open"
                                : "Currently Closed"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                {/* <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Actions
                  </h4>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-3" />
                      Download Product Catalog
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <Calendar className="h-4 w-4 mr-3" />
                      Schedule Facility Tour
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent"
                    >
                      <MessageSquare className="h-4 w-4 mr-3" />
                      Live Chat Support
                    </Button>
                  </div>
                </div> */}

                {/* Social Media */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Follow Us
                  </h4>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to help you get started with K & M Aluminum
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollAnimation
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* <ScrollAnimation animation="fadeIn" delay={600}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg">
                Contact Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollAnimation> */}
        </div>
      </section>
    </div>
  );
}
