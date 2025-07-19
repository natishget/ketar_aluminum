"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ScrollButtonProps {
  color?: "green" | "red";
  label?: string;
}

export function ViewProductsButton({ color = "green", label = "View Products" }: ScrollButtonProps) {
  const handleClick = () => {
    const section = document.getElementById("product-gallery");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      onClick={handleClick}
      variant="outline"
      size="sm"
      className={`${
        color === "green"
          ? "text-green-600 border-green-600 hover:bg-green-50"
          : "text-red-600 border-red-600 hover:bg-red-50"
      } bg-transparent`}
    >
      {label}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
