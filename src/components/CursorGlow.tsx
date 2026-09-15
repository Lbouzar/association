"use client";

import { useRef, type PointerEvent } from "react";

type CursorGlowProps = {
  className?: string;
};

/**
 * Halo lumineux discret qui suit le curseur, destiné aux sections sombres
 * (héros en vert sapin). Purement décoratif, désactivé au clavier/tactile.
 */
export default function CursorGlow({ className = "" }: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    node.style.setProperty("--glow-x", `${x}%`);
    node.style.setProperty("--glow-y", `${y}%`);
    node.style.setProperty("--glow-opacity", "0.12");
  }

  function handlePointerLeave() {
    ref.current?.style.setProperty("--glow-opacity", "0");
  }

  return (
    <div
      ref={ref}
      className={`cursor-glow ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    />
  );
}
