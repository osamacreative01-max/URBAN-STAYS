import { useEffect, useRef, RefObject, useState } from "react";

interface UseScrollObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollObserver<T extends HTMLElement>(
  options: UseScrollObserverOptions = {}
): [RefObject<T | null>, boolean] {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px" } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return [elementRef, isVisible];
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return position;
}

export function useCustomCursor() {
  const mousePos = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };
    
    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const cursorRing = document.querySelector<HTMLElement>("[data-cursor='ring']");
      const cursorDot = document.querySelector<HTMLElement>("[data-cursor='dot']");

      if (cursorRing && cursorDot) {
        cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const ring = document.querySelector<HTMLElement>("[data-cursor='ring']");
      if (!ring) return;

      if (e.target instanceof HTMLElement) {
        if (
          e.target.tagName === "A" ||
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "INPUT" ||
          e.target.tagName === "SELECT" ||
          e.target.tagName === "TEXTAREA" ||
          e.target.closest("a") ||
          e.target.closest("button") ||
          e.target.closest('svg[role="img"]')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return { mousePos, isHovering, isClicking };
}
