"use client";

import { FamilyRxVisual, SchoolBusVisual } from "./ProductVisuals";

export function HeroStage() {
  return (
    <div className="relative z-[1] space-y-4">
      <div className="hero-card-shadow overflow-hidden rounded-2xl">
        <FamilyRxVisual />
      </div>
      <div className="hero-card-shadow overflow-hidden rounded-2xl lg:ml-10">
        <SchoolBusVisual />
      </div>
    </div>
  );
}
