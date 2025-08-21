"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Factory,
  Phone,
  Star,
  Users,
} from "lucide-react";
import aluminumHeroImg from "@/assets/home/aluminum_home3.jpg";

function TypewriterWords({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];
    const isWordComplete = subIndex === currentWord.length;
    const isWordStart = subIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (!isWordComplete) {
            setSubIndex((v) => v + 1);
          } else {
            // Pause when fully typed, then start deleting
            setDeleting(true);
          }
        } else {
          if (!isWordStart) {
            setSubIndex((v) => v - 1);
          } else {
            // Move to next word and start typing again
            setDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      !deleting ? (isWordComplete ? 1500 : 140) : 70
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words]);

  const text = words[wordIndex].slice(0, subIndex);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-500 to-red-600">
        {text}
      </span>
      <motion.span
        aria-hidden
        className="ml-0.5 h-[1.1em] w-[2px] bg-green-600"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </span>
  );
}

function StatCounter({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated gradient glow behind content */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-1/2 top-1/2 h-[60rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,0.18) 0%, rgba(239,68,68,0.12) 35%, rgba(255,255,255,0) 70%)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="space-y-8">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 w-fit">
              🏭 Premium Aluminum Since 2006
            </Badge>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900"
              >
                {/* <span className="block">Last Longer.</span> */}
                <span className="block mt-2">
                  Excellence in <span className="text-green-600">Aluminum</span>
                  <br />
                  <TypewriterWords
                    words={[
                      "Profiles",
                      "Doors",
                      "Partitions",
                      "Curtain Walls",
                      "Sheet Panel",
                      "Solutions",
                    ]}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-xl text-gray-600 max-w-xl"
              >
                Ethiopia's trusted aluminum supplier offering premium anodized
                and powder coating profiles, technical services, and complete
                aluminum solutions for over 12 years.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link href="/products" className="group">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base sm:text-lg font-semibold text-white shadow-xl bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]"
                >
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="tel:+251-930-329599" className="group">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base sm:text-lg font-semibold border-2 border-red-500 text-red-600 bg-transparent transition-all duration-300 group-hover:bg-red-50 group-hover:shadow-lg"
                >
                  Call Us
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-4 text-sm text-gray-600"
            >
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
            </motion.div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-8 pt-8">
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
            </div> */}

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-green-600 mb-1 flex items-center justify-center gap-2">
                  <StatCounter value={12} />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-1 flex items-center justify-center gap-2">
                  <StatCounter value={500} />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1 flex items-center justify-center gap-2">
                  <StatCounter value={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Floating accent blocks */}
            <motion.div
              aria-hidden
              className="absolute -top-6 -right-6 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-green-400 to-green-500 opacity-80 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="absolute -bottom-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-red-400 to-red-500 opacity-80 shadow-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Image
                src={aluminumHeroImg}
                alt="Premium aluminum profiles and facility"
                width={640}
                height={760}
                className="rounded-3xl shadow-2xl w-full h-auto"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg grid place-items-center">
                    <Factory className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">
                      Ethiopian Leader
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Aluminum Solutions
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
