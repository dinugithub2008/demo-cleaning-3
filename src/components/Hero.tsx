import { ShieldCheck } from "lucide-react";
import { business, heroStats, projectTypes } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { HeroSlider } from "./HeroSlider";

export function Hero() {
  return (
    <section className="container-x pb-12 pt-6 lg:pb-18">
      <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="tile-grid relative overflow-hidden rounded-[2rem] px-5 py-8 text-white soft-shadow sm:px-8 lg:min-h-[650px] lg:px-12 lg:py-12">
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#171313] shadow-lg">
                <ShieldCheck className="size-4 text-[#ec1f72]" />
                Post-construction and commercial cleaning specialists
              </div>
              <h1 className="font-display max-w-4xl text-balance text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-8xl">
                Site-ready cleaning for handovers, gyms and strata properties.
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
                Clear Site Co. delivers detailed builders cleans, commercial gym facility cleaning, strata cleaning and vacate handovers across Sydney.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="#quote-form">Request Site Quote</CTAButton>
                <CTAButton href={business.phoneHref} variant="light">Call Now</CTAButton>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div className="rounded-2xl border border-white/18 bg-white/12 p-4 backdrop-blur" key={stat.label}>
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase leading-5 text-white/78">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="pointer-events-none absolute -bottom-4 left-4 text-[clamp(4rem,13vw,11rem)] font-black leading-none text-white/10">
            clear
          </p>
        </div>

        <HeroSlider />
      </div>

      <div className="mt-5 grid gap-3 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2 lg:grid-cols-6">
        {projectTypes.map((type) => {
          const Icon = type.icon;
          return (
            <div className="flex items-center gap-2 rounded-2xl bg-[#fff0f6] px-3 py-3 text-sm font-black text-[#342927]" key={type.label}>
              <Icon className="size-4 shrink-0 text-[#ec1f72]" />
              {type.label}
            </div>
          );
        })}
      </div>
    </section>
  );
}
