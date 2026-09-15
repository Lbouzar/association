"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Enveloppe un bouton/lien pour lui donner un léger effet "magnétique" :
 * il suit très légèrement le curseur au survol, puis revient à sa place.
 */
export default function MagneticButton({ children, className = "" }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    node.style.setProperty("--mx", `${x * 0.18}px`);
    node.style.setProperty("--my", `${y * 0.35}px`);
  }

  function handlePointerLeave() {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--mx", "0px");
    node.style.setProperty("--my", "0px");
  }

  return (
    <div
      ref={ref}
      className={`btn-magnetic ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </div>
  );
}
