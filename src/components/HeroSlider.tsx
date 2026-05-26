"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { heroServiceTiles, heroSlides } from "@/data/siteContent";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const currentSlide = heroSlides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => setActive((index) => (index === 0 ? heroSlides.length - 1 : index - 1));
  const goToNext = () => setActive((index) => (index + 1) % heroSlides.length);

  return (
    <div className="grid gap-5">
      <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-[#171313] soft-shadow lg:min-h-[460px]">
        {heroSlides.map((slide, index) => (
          <img
            alt={slide.title}
            className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
              active === index ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
            key={slide.title}
            src={slide.image}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171313]/84 via-[#171313]/16 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <div className="rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#6f584d] shadow-lg backdrop-blur">
            Commercial cleaning
          </div>
          <div className="flex gap-2">
            <button
              aria-label="Previous cleaning image"
              className="grid size-10 place-items-center rounded-full border border-white/28 bg-white/88 text-[#171313] shadow-lg backdrop-blur transition hover:bg-white"
              onClick={goToPrevious}
              type="button"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              aria-label="Next cleaning image"
              className="grid size-10 place-items-center rounded-full border border-white/28 bg-white/88 text-[#171313] shadow-lg backdrop-blur transition hover:bg-white"
              onClick={goToNext}
              type="button"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/18 bg-white/94 p-5 shadow-xl backdrop-blur">
          <p className="text-lg font-black text-[#171313]">{currentSlide.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{currentSlide.text}</p>
          <div className="mt-4 flex gap-2">
            {heroSlides.map((slide, index) => (
              <button
                aria-label={`Show ${slide.title}`}
                className={`h-2.5 rounded-full transition ${
                  active === index ? "w-9 bg-[#ec1f72]" : "w-2.5 bg-slate-300 hover:bg-[#d8c4a6]"
                }`}
                key={slide.title}
                onClick={() => setActive(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {heroServiceTiles.map((tile) => (
          <article className="group relative min-h-40 overflow-hidden rounded-[1.4rem] bg-[#171313] p-5 text-white shadow-sm" key={tile.title}>
            <img
              alt={tile.title}
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-68"
              src={tile.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171313]/92 via-[#171313]/54 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <h2 className="text-lg font-black">{tile.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/82">{tile.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
