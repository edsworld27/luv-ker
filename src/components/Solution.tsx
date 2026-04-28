"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INGREDIENTS, type IngredientDetail } from "@/lib/ingredients";

export default function Solution() {
  const [active, setActive] = useState<IngredientDetail | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="heritage" className="w-full py-20 sm:py-24 lg:py-32 2xl:py-40 bg-brand-black-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple-muted/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl xl:max-w-screen-xl mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">

        {/* Two-column split — text left, orbital visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-center mb-20 sm:mb-24 lg:mb-28">

          {/* Left column — copy */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="adinkra-line w-10" />
              <span className="text-xs tracking-[0.28em] uppercase text-brand-purple-light">The Answer</span>
            </div>
            <h2 className="font-display font-bold text-brand-cream leading-tight mb-5
              text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
              max-w-xl">
              A gift carried across <span className="gradient-text">generations</span>
            </h2>
            <p className="text-brand-cream/60 text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl mb-5">
              Odo is the Twi word for love. It is more than a name — it is the philosophy behind every bar.
              Created by Felicia, drawing on centuries of Ghanaian skincare wisdom passed from grandmother
              to daughter, generation to generation.
            </p>
            <p className="text-brand-cream/60 text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl mb-8">
              Every ingredient is sourced directly from Ghanaian farmers. No middlemen. No shortcuts.
              No compromises. Just the earth in its purest form, pressed into your palms.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3">
              {["Hormone-Safe","Fertility-Friendly","100% Natural","Vegan","Ethically Sourced","Cruelty-Free"].map((tag) => (
                <span key={tag} className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm tracking-wide border border-brand-orange/30 text-brand-orange bg-brand-orange/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — orbital visual */}
          <div className="flex items-center justify-center order-first lg:order-last">
            <OrbitalVisual />
          </div>
        </div>

        {/* Ingredients */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <h3 className="font-display font-bold text-brand-cream mb-3
            text-2xl sm:text-3xl xl:text-4xl max-w-2xl mx-auto">
            Every ingredient has a name, a region, a story
          </h3>
          <p className="text-brand-cream/40 text-sm sm:text-base max-w-lg mx-auto">
            We don&apos;t hide behind &ldquo;fragrance&rdquo;. We celebrate every element.
          </p>
          <Link
            href="/ingredients"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white transition-colors text-xs tracking-[0.2em] uppercase font-semibold"
          >
            View All Ingredients
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6">
          {INGREDIENTS.slice(0, 6).map((ing) => (
            <div key={ing.slug} className="flex flex-col items-center text-center p-6 sm:p-7 xl:p-8 rounded-xl bg-brand-black-card border border-white/5 hover:border-brand-amber/25 transition-all duration-300 group">
              <div className="flex items-center justify-between w-full gap-3 mb-3">
                <h4 className="font-display text-base sm:text-lg font-semibold text-brand-cream group-hover:text-brand-amber transition-colors">
                  {ing.name}
                </h4>
                <span className="shrink-0 text-[10px] tracking-wide text-brand-cream/30 bg-white/5 px-2.5 py-1 rounded-full whitespace-nowrap">
                  {ing.origin}
                </span>
              </div>
              <p className="text-sm xl:text-base text-brand-cream/50 leading-relaxed w-full">{ing.oneLiner}</p>
              <button
                onClick={() => setActive(ing)}
                aria-label={`Open ${ing.name} details`}
                className="mt-4 w-9 h-9 rounded-full border border-brand-orange/35 text-brand-orange hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
      {active && <IngredientModal ingredient={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function IngredientModal({
  ingredient,
  onClose,
}: {
  ingredient: IngredientDetail;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ingredient.name}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-brand-black-soft border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        <div className="relative aspect-[16/9] sm:aspect-[2/1] shrink-0">
          <Image
            src={ingredient.image}
            alt={ingredient.imageAlt}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black-soft via-brand-black-soft/40 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-5 left-5 right-5 sm:left-7 sm:right-7">
            <p className="text-[10px] tracking-[0.28em] uppercase text-brand-amber mb-2">{ingredient.origin}</p>
            <h2 className="font-display font-bold text-brand-cream text-2xl sm:text-3xl xl:text-4xl leading-tight">
              {ingredient.name}
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-6 sm:py-7 space-y-6">
          <p className="text-brand-cream/80 text-base sm:text-lg italic leading-relaxed">{ingredient.oneLiner}</p>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-brand-orange mb-3">Why we use it</p>
            <ul className="space-y-2.5">
              {ingredient.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-brand-cream/75 leading-relaxed">
                  <span className="text-brand-amber shrink-0 mt-0.5">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-brand-purple-light mb-2">Where it&apos;s from</p>
            <p className="font-display text-brand-cream font-medium mb-2">{ingredient.partner}</p>
            <p className="text-sm sm:text-base text-brand-cream/65 leading-relaxed">{ingredient.sourcing}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.28em] uppercase text-brand-purple-light mb-2">How it&apos;s processed</p>
            <p className="text-sm sm:text-base text-brand-cream/65 leading-relaxed">{ingredient.processing}</p>
          </div>
          <div className="pt-2">
            <p className="text-[10px] tracking-[0.28em] uppercase text-brand-cream/40 mb-3">Found in</p>
            <div className="flex flex-wrap gap-2">
              {ingredient.usedIn.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 text-xs rounded-full border border-brand-orange/25 bg-brand-orange/5 text-brand-orange"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrbitalVisual() {
  return (
    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] 2xl:w-[30rem] 2xl:h-[30rem]">
      <div className="absolute inset-0 rounded-full border border-dashed border-brand-purple/20 animate-spin" style={{ animationDuration: "30s" }} />
      <div className="absolute inset-6 xl:inset-8 rounded-full bg-gradient-to-br from-brand-purple-dark via-brand-black-card to-brand-purple-muted flex flex-col items-center justify-center border border-brand-purple/20 shadow-2xl">
        <div className="text-center px-8">
          <p className="font-display text-4xl xl:text-5xl font-bold text-brand-cream mb-1">ODO</p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-brand-amber to-transparent mx-auto mb-2" />
          <p className="text-brand-cream/40 text-xs tracking-[0.3em] uppercase">by Felicia</p>
          <p className="text-brand-amber/60 text-[10px] tracking-widest uppercase mt-3">Crafted in Ghana</p>
        </div>
      </div>
      {[0,60,120,180,240,300].map((deg, i) => (
        <div key={i} className="absolute w-2.5 h-2.5 rounded-full"
          style={{
            background: deg % 120 === 0 ? "#E8621A" : deg % 60 === 0 ? "#6B2D8B" : "#F2A23C",
            top:  `calc(50% + ${Math.sin((deg*Math.PI)/180)*48}% - 5px)`,
            left: `calc(50% + ${Math.cos((deg*Math.PI)/180)*48}% - 5px)`,
          }} />
      ))}
    </div>
  );
}
