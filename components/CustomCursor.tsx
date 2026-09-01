"use client";

import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Create cursor elements dynamically
    const cursorDot = document.createElement("div");
    cursorDot.className = "cursor-dot";
    cursorDot.setAttribute("data-cursor", "dot");
    document.body.appendChild(cursorDot);

    const cursorRing = document.createElement("div");
    cursorRing.className = "cursor-ring";
    cursorRing.setAttribute("data-cursor", "ring");
    document.body.appendChild(cursorRing);

    // Handle mouse enter/leave
    const handleMouseEnter = () => {
      document.body.style.cursor = "none";
    };
    
    const handleMouseLeave = () => {
      document.body.style.cursor = "auto";
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const dot = document.querySelector<HTMLElement>("[data-cursor='dot']");
      const ring = document.querySelector<HTMLElement>("[data-cursor='ring']");

      if (dot && ring) {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    // Handle hover states
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
          ring.classList.add("hovering");
        } else {
          ring.classList.remove("hovering");
        }
      }
    };

    const handleMouseDown = () => {
      const ring = document.querySelector<HTMLElement>("[data-cursor='ring']");
      if (ring) ring.classList.add("clicking");
    };

    const handleMouseUp = () => {
      const ring = document.querySelector<HTMLElement>("[data-cursor='ring']");
      if (ring) ring.classList.remove("clicking");
    };

    // Clean up on unmount
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

      cursorDot.remove();
      cursorRing.remove();
    };
  }, []);

  return null;
}
