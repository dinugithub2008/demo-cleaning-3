import { Phone } from "lucide-react";
import { business } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="bg-white pb-16" id="quote">
      <div className="container-x">
        <div className="tile-grid overflow-hidden rounded-[2rem] p-8 text-white lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white/78">Need a site-ready finish?</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Bring ClearSiteCo in before handover, opening day or the next inspection.
              </h2>
              <p className="mt-4 max-w-2xl text-white/82">
                Send the site type, location, deadline and scope. We will recommend the right cleaning plan for construction, gym, strata or vacate work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CTAButton href={`mailto:${business.email}`} variant="light">Request Site Quote</CTAButton>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white bg-white px-6 py-3 text-sm font-black text-[#071827] shadow-lg shadow-slate-950/10 transition hover:brightness-95"
                href={business.phoneHref}
              >
                <Phone className="size-4 text-[#0877c9]" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
