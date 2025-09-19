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
  Shield,
  Award,
} from "lucide-react";
import { Card2 } from "@/components/ui/card2";
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url('/aluminum-manufacturing-industrial-background.png')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-r from-green-700/70 to-red-300/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 py-14 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-white/50 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                <Badge
                  variant="secondary"
                  className="w-fit bg-emerald-500/20 text-green-600 border-emerald-400/30 mb-6 mx-auto backdrop-blur-sm"
                >
                  <Award className="w-4 h-4 mr-2" />
                  Premium Aluminium Since 2008
                </Badge>

                <div className="space-y-6">
                  <div className="text-5xl lg:text-7xl font-bold text-balance leading-tight text-slate-900">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.6 }}
                      className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900"
                    >
                      {/* <span className="block">Last Longer.</span> */}
                      <span className="block mt-2">
                        Excellence in{" "}
                        <span className="text-green-700">Aluminum</span>
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
                  </div>

                  <p className="md:text-xl text-sm text-slate-700 text-pretty leading-relaxed max-w-3xl mx-auto">
                    Ethiopia's trusted aluminum supplier offering premium
                    anodized and powder coating profiles, technical services,
                    and complete aluminum solutions for over 12 years.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <Button
                    size="lg"
                    className="bg-green-700 hover:bg-green-800 text-white shadow-lg"
                  >
                    Explore Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-400 text-slate-800 hover:bg-green-100 bg-white/80 backdrop-blur-sm hidden md:flex"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-6 mt-6 border-t border-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-green-600 text-green-600"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-700">
                      Trusted Quality
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-700" />
                    <span className="text-sm text-slate-700">
                      TIN: 00 53 39 59 97
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-700" />
                    <span className="text-sm text-slate-700">
                      500+ Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row md:justify-evenly md:gap-8 gap-5 mt-10">
            <Card2 className="md:p-6 p-3 text-center bg-white/50 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-5xl font-bold text-green-700 mb-3">12+</div>
              <div className="text-slate-700 font-medium">Years Experience</div>
            </Card2>

            <Card2 className="md:p-6 p-3 text-center bg-white/50 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-5xl font-bold text-green-700 mb-3">500+</div>
              <div className="text-slate-700 font-medium">
                Projects Completed
              </div>
            </Card2>

            <Card2 className="md:p-6 p-3 text-center bg-white/50 backdrop-blur-sm border-white/30 shadow-2xl hover:shadow-3xl transition-shadow">
              <div className="text-5xl font-bold text-green-700 mb-3">100%</div>
              <div className="text-slate-700 font-medium">
                Client Satisfaction
              </div>
            </Card2>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
      <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-ping opacity-30 delay-500"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-15 delay-1000"></div>
    </section>
  );
}

export default Hero;
