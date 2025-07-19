"use client";

import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactUsButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button
        size="lg"
        onClick={() => router.push("/contact")}
        className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl px-10 py-4 text-lg font-semibold"
      >
        <Mail className="mr-3 h-6 w-6" />
        Contact Us
      </Button>

      <a href="tel:+251912345678">
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl bg-transparent px-10 py-4 text-lg font-semibold"
        >
          <PhoneCall className="mr-3 h-6 w-6" />
          Call: +251 912 345 678
        </Button>
      </a>
    </div>
  );
}
