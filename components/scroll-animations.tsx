"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scaleIn"
    | "rotateIn";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function ScrollAnimation({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 1000,
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        } else {
          setIsVisible(false); // Reset visibility when element goes out of view
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideUp":
          return `${baseClasses} opacity-0 transform translate-y-20`;
        case "slideDown":
          return `${baseClasses} opacity-0 transform -translate-y-20`;
        case "slideLeft":
          return `${baseClasses} opacity-0 transform translate-x-20`;
        case "slideRight":
          return `${baseClasses} opacity-0 transform -translate-x-20`;
        case "scaleIn":
          return `${baseClasses} opacity-0 transform scale-95`;
        case "rotateIn":
          return `${baseClasses} opacity-0 transform rotate-3 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    switch (animation) {
      case "fadeIn":
        return `${baseClasses} opacity-100`;
      case "slideUp":
        return `${baseClasses} opacity-100 transform translate-y-0`;
      case "slideDown":
        return `${baseClasses} opacity-100 transform -translate-y-0`;
      case "slideLeft":
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case "slideRight":
        return `${baseClasses} opacity-100 transform translate-x-0`;
      case "scaleIn":
        return `${baseClasses} opacity-100 transform scale-100`;
      case "rotateIn":
        return `${baseClasses} opacity-100 transform rotate-0 scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
}

// Stagger animation for multiple elements
interface StaggerAnimationProps {
  children: React.ReactNode;
  staggerDelay?: number;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  className?: string;
}

export function StaggerAnimation({
  children,
  staggerDelay = 100,
  animation = "slideUp",
  className = "",
}: StaggerAnimationProps) {
  // Convert children to array safely
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  );
}
