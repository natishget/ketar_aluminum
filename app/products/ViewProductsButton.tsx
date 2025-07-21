"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, FileText } from "lucide-react";
import ContactUsButtons from "./ContactUsButtons";

interface ScrollButtonProps {
  color?: "green" | "red";
  label?: string;
type?: "product" | "categories";
}

export function ViewProductsButton({ type = "categories", color = "green", label = "View Products" }: ScrollButtonProps) {
  const handleClick = () => {
    const section = document.getElementById("product-gallery");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {type === "categories" ? (
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
      ) : (
        <div className="flex space-x-2">
            <Button
                onClick={handleClick}
                size="sm"
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
            <FileText className="h-4 w-4 mr-2" />
            {label}
            </Button>
            <Button 
                onClick={handleClick}
                variant="outline" 
                size="sm">

                <Eye className="h-4 w-4" />
            </Button>
        </div>
      )}
    </div>
  );
}
