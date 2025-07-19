"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type LearnMoreButtonProps = {
  color?: "green" | "red";
  label?: string;
};

export default function LearnMoreButton({
  color = "green",
}: LearnMoreButtonProps) {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className={`${
        color === "green"
          ? "text-green-600 border-green-600 hover:bg-green-50"
          : "text-red-600 border-red-600 hover:bg-red-50"
      } bg-transparent w-full flex items-center justify-center`}
      onClick={() => router.push('/products')}
    >
      Learn More
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}