import { BadgeCheck, CalendarCheck, ShieldCheck, Sparkles } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

const aboutStats = [
  { value: "180+", label: "projects and sites supported" },
  { value: "24h", label: "quote response target" },
  { value: "3", label: "focused cleaning services" },
];

const aboutValues = [
  {
    icon: CalendarCheck,
    title: "Deadline Aware",
    text: "Cleaning is planned around handover dates, gym opening hours, inspections and property access windows.",
  },
  {
    icon: ShieldCheck,
    title: "Site-Safe Teams",
    text: "Teams are briefed for active construction, commercial fitness and managed property environments.",
  },
  {
    icon: Sparkles,
    title: "Presentation Focused",
    text: "Dust, debris, amenities, surfaces and final details are handled so the space is ready for its next use.",
  },
];

export function AboutUs() {
  return (
    <section className="section-pad bg-white" id="about">
      <div className="container-x">
        <SectionHeading
          eyebrow="About us"
          title="We make site handovers, openings and property cleans easier to manage"
          text="ClearSiteCo is built for practical cleaning work where the finish matters: post-construction sites, commercial gym facilities, strata common areas and end-of-lease handovers."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              alt="ClearSiteCo cleaner preparing a commercial space for handover"
              className="h-[420px] w-full rounded-[2rem] object-cover soft-shadow"
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=84"
            />
            <div className="absolute -bottom-6 right-5 rounded-3xl bg-white px-5 py-4 shadow-2xl shadow-slate-950/15">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#ec1f72] text-white">
                  <BadgeCheck className="size-6" />
                </span>
                <div>
                  <p className="text-2xl font-black text-[#0877c9]">4.9</p>
                  <p className="text-xs font-bold uppercase text-slate-500">client rating</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-2xl font-black leading-snug text-[#071827] sm:text-3xl">
              We combine clear scopes, reliable scheduling and detail-led cleaning so builders, facility managers and property teams can hand over with confidence.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Every job starts with the site type, access, deadline and presentation standard. From fine dust and builder residue to high-touch gym zones and strata common areas, the work is planned around what the space needs to become next.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Our focus stays intentionally simple: post-construction cleaning, commercial gym cleaning, and strata or end-of-lease support across Sydney.
            </p>
            <CTAButton className="mt-7" href="#quote-form" variant="secondary">Discuss Your Site</CTAButton>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {aboutStats.map((stat) => (
            <div className="rounded-[1.4rem] border border-slate-200 bg-[#f7fbff] p-6" key={stat.label}>
              <p className="text-4xl font-black text-[#0877c9]">{stat.value}</p>
              <p className="mt-2 text-sm font-black uppercase leading-5 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {aboutValues.map((item) => {
            const Icon = item.icon;
            return (
              <article className="grid gap-4 rounded-[1.4rem] bg-[#edf7ff] p-6 sm:grid-cols-[220px_1fr] sm:items-center" key={item.title}>
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white text-[#0877c9] shadow-sm">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="text-lg font-black text-[#071827]">{item.title}</h3>
                </div>
                <p className="leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
