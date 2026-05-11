import { resultMetrics } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function BeforeAfter() {
  return (
    <section className="section-pad bg-white" id="results">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Project outcomes"
              title="From active worksite to inspection-ready finish"
              text="Post-build dust, trade debris, amenities, glass, floors and presentation surfaces all need a different standard of attention. ClearSiteCo plans the clean around what the site needs to become next."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {resultMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" key={metric.label}>
                    <Icon className="size-6 text-[#ec1f72]" />
                    <p className="mt-5 text-3xl font-black text-[#071827]">{metric.value}</p>
                    <p className="mt-1 text-sm font-bold uppercase leading-5 text-slate-500">{metric.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-5 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-[1.6rem] bg-[#071827] text-white">
                <img
                  alt="Construction area before final cleaning with active site materials"
                  className="h-80 w-full object-cover opacity-86"
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=82"
                />
                <figcaption className="p-5 text-sm font-black">Before: active site residue</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-[1.6rem] bg-[#0877c9] text-white sm:translate-y-10">
                <img
                  alt="Finished commercial interior ready for handover after cleaning"
                  className="h-80 w-full object-cover"
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82"
                />
                <figcaption className="p-5 text-sm font-black">After: handover presentation</figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#071827] p-8 text-white lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2ac8d4]">Priority workstream</p>
              <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Post-construction cleaning plus commercial gym contracts, with strata and lease cleans supporting recurring work.
              </h3>
            </div>
            <CTAButton href="#quote">Plan My Scope</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
