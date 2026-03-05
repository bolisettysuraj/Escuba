"use client";
import { useEffect, useState } from "react";

interface BubbleData {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
}

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);

  useEffect(() => {
    const arr: BubbleData[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
    }));
    setBubbles(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
