"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
      style={{
        background: `
          radial-gradient(
            600px circle at ${position.x}% ${position.y}%,
            rgba(56, 189, 248, 0.18),
            transparent 40%
          ),
          radial-gradient(
            800px circle at ${100 - position.x}% ${100 - position.y}%,
            rgba(168, 85, 247, 0.18),
            transparent 40%
          )
        `,
      }}
    />
  );
}
