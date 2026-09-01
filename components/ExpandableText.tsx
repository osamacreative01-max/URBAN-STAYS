"use client";

import { useState, useRef, useEffect } from "react";

interface ExpandableTextProps {
  children: string;
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ExpandableText({
  children,
  lines = 2,
  className = "",
  style = {},
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>("auto");

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const lh = parseFloat(getComputedStyle(el.querySelector("p")!).lineHeight) || 24;
    setHeight(expanded ? el.scrollHeight + "px" : Math.ceil(lh * lines) + "px");
  }, [expanded, lines, children]);

  return (
    <div className={className}>
      <div
        ref={contentRef}
        style={{
          maxHeight: height,
          overflow: "hidden",
          transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <p
          className="font-lato text-sm leading-relaxed"
          style={{
            color: style.color || "rgba(255,255,255,0.70)",
            ...style,
          }}
        >
          {children}
        </p>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="font-montserrat text-xs tracking-wider uppercase mt-2 transition-colors duration-300"
        style={{
          color: "#C5A46D",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        {expanded ? "Read Less ↑" : "Read More ↓"}
      </button>
    </div>
  );
}
