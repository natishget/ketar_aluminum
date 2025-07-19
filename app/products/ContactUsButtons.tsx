"use client";

import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ButtonSize = "sm" | "lg";

interface ContactUsButtonsProps {
  size?: ButtonSize;
}

export default function ContactUsButtons({ size = "lg" }: ContactUsButtonsProps) {
  const router = useRouter();

  // Define size-based styles
  const sizeStyles = {
    sm: {
      padding: "px-4 py-2",
      fontSize: "text-sm",
      iconSize: "h-4 w-4",
    },
    lg: {
      padding: "px-10 py-4",
      fontSize: "text-lg",
      iconSize: "h-6 w-6",
    },
  };

  const { padding, fontSize, iconSize } = sizeStyles[size];

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button
        onClick={() => router.push("/contact")}
        className={`bg-white text-green-600 hover:bg-gray-100 shadow-2xl ${padding} ${fontSize} font-semibold`}
      >
        <Mail className={`${iconSize} mr-3`} />
        Contact Us
      </Button>

      <a href="tel:+251930329599">
        <Button
          variant="outline"
          className={`border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl bg-transparent ${padding} ${fontSize} font-semibold`}
        >
          <PhoneCall className={`${iconSize} mr-3`} />
          Call: +251 930 329599
        </Button>
      </a>
    </div>
  );
}