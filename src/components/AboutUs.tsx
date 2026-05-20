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
    text: "Cleaning is coordinated around handover dates, operating hours, inspections and property access windows.",
  },
  {
    icon: ShieldCheck,
    title: "Site-Safe Teams",
    text: "Teams are briefed for active construction sites, commercial fitness facilities and managed property environments, with a focus on safety and site compliance.",
  },
  {
    icon: Sparkles,
    title: "Presentation Focused",
    text: "Dust, debris, amenities, fixtures and final details are managed so the space is ready for its next stage.",
  },
];

export function AboutUs() {
  return (
    <section className="section-pad bg-white" id="about">
      <div className="container-x">
        <SectionHeading
          eyebrow="About us"
          title="We help manage site handovers and property cleans with flexible scheduling, clear site coordination and delivery to tight project deadlines."
          text="Clear Site Co. is built for high-detail cleaning work where presentation and finish matter: post-construction sites, commercial gym facilities, strata common areas and end-of-lease handovers."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <img
              alt="ClearSiteCo cleaner preparing a commercial space for handover"
              className="h-[460px] w-full rounded-[2rem] object-cover soft-shadow"
              src="https://images.pexels.com/photos/9462761/pexels-photo-9462761.jpeg?auto=compress&cs=tinysrgb&w=1100"
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
              We combine clear scopes, reliable scheduling and detail-led cleaning to support smooth handovers for builders, facility managers and property teams.
            </p>
            <p className="mt-5 leading-7 text-slate-600">
              Every job is planned around the scope of work, access requirements, project deadlines and the required presentation standard. From construction residue to high-touch commercial and strata spaces, the work is coordinated around what the site needs to be ready for next.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              We specialise in post-construction cleaning, commercial fitness facilities cleaning, and strata and end-of-lease support across Sydney.
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
