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
  Award,
  Target,
  Lightbulb,
  Handshake,
  Users,
  Building,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollAnimation } from "@/components/scroll-animations";
import { SimpleAnimations } from "@/components/simple-animations";
import type { Metadata } from "next";
import product2 from "@/assets/aboutImg.png";

export const metadata: Metadata = {
  title: "About Ketar Aluminum - Ethiopian Aluminum Leader Since 2006",
  description:
    "Learn about Ketar Aluminum's journey since 2006. Founded by Anteneh Darsema, we're Ethiopia's trusted aluminum supplier specializing in anodized profiles, powder coating, and technical services.",
  keywords:
    "Ketar Aluminum history, Anteneh Darsema, Ethiopian aluminum company, aluminum supplier Ethiopia, company founded 2006",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <ScrollAnimation animation="slideUp" delay={500}>
        <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <SimpleAnimations />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6 px-4 py-2">
                About Ketar Aluminum
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Excellence in
                <span className="text-green-600 block mt-6">
                  Ethiopian Aluminum
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                For over 12+ years, Ketar Aluminum has been Ethiopia's trusted
                partner in premium aluminum solutions, delivering quality
                products and exceptional service across the nation.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Company Story */}
      <ScrollAnimation animation="slideLeft" delay={500}>
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <Image
                  src={product2}
                  alt="Ketar Aluminum founder Anteneh Darsema and company facility in Ethiopia"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    2006
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Founded in Ethiopia
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Ketar Aluminum was founded on October 7, 2006 E.C by{" "}
                    <strong>Anteneh Darsema</strong>, who serves as our General
                    Manager and Owner. What began as a vision to provide
                    Ethiopia with the finest quality aluminum products has grown
                    into the nation's leading aluminum solutions provider.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    As a privately owned and operated company, we specialize in
                    the supply of premium aluminum profiles and comprehensive
                    technical services. Our foundation is built on tried and
                    true family values, ensuring we never compromise on quality
                    or service to our customers.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Over the years, Ketar Aluminum has earned the respect and
                    loyalty of many local businesses in both the private and
                    public sectors, establishing ourselves as a company you can
                    trust and depend upon for all aluminum needs.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      12+
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      Years of Excellence
                    </div>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-xl">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-gray-700 font-medium">
                      Satisfied Clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Mission, Vision, Values */}

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and drive our
                commitment to excellence
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation animation="slideRight">
              {/* Mission */}
              <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    To connect and build a lifelong relationship with our
                    customers by supplying high quality aluminum profiles and
                    technical services at a reasonable price. We believe good
                    service is worrying about the details so our customers don't
                    have to.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="slideLeft">
              {/* Vision */}
              <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    To see Ketar Aluminum as one of the top aluminum supplier
                    industries in Ethiopia and the region with a visible brand
                    image, recognized for quality, reliability, and exceptional
                    customer service.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="slideUp">
            {/* Company Pledges */}
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
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
                    <Handshake className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Ready to Assist
                    </h4>
                    <p className="text-gray-600">
                      We pledge to always be ready to assist and help provide
                      solutions in any way possible for our valued customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leadership
              </h2>
              <p className="text-xl text-gray-600">
                Meet the visionary behind Ketar Aluminum's success
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <ScrollAnimation animation="scaleIn">
                      <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-white font-bold text-4xl">
                          AD
                        </span>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="md:col-span-2">
                    <ScrollAnimation animation="slideUp">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Anteneh Darsema
                      </h3>
                      <p className="text-green-600 font-medium mb-6 text-lg">
                        General Manager & Owner
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        As the founder and visionary leader of Ketar Aluminum,
                        Anteneh Darsema has dedicated over 12 years to building
                        Ethiopia's premier aluminum solutions company. His
                        commitment to quality, integrity, and customer
                        satisfaction has established Ketar as a trusted name
                        across the nation.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Under his leadership, Ketar Aluminum has grown from a
                        small family business to a company that serves both
                        private and public sectors, always maintaining the core
                        values of excellence and reliability.
                      </p>
                    </ScrollAnimation>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <ScrollAnimation>
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-gray-600">
                The values that make Ketar Aluminum Ethiopia's trusted choice
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ScrollAnimation>
                    <Users className="h-10 w-10 text-white" />
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="slideUp">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Family Values
                  </h3>
                  <p className="text-gray-600 text-sm">
                    As a family-owned business, we maintain personal
                    relationships and never compromise on quality.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ScrollAnimation>
                    <Award className="h-10 w-10 text-white" />
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="slideUp">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Proven Excellence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    12+ years of consistent quality and service excellence in
                    the Ethiopian market.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ScrollAnimation>
                    <Building className="h-10 w-10 text-white" />
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="slideUp">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Deep understanding of Ethiopian construction needs and
                    building requirements.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <ScrollAnimation>
                    <CheckCircle className="h-10 w-10 text-white" />
                  </ScrollAnimation>
                </div>
                <ScrollAnimation animation="slideUp">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Reliable Service
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dependable partner for all aluminum needs with consistent
                    quality and timely delivery.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work with Ethiopia's Best?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the Ketar Aluminum difference. Let's discuss how we can
            help bring your aluminum projects to life with quality and
            reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 shadow-xl bg-transparent"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
