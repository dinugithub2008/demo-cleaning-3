import { reasons } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-slate-50" id="why-us">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built for sites where timing and presentation matter"
          text="The work is more operational than decorative: clear scopes, deadline-aware scheduling and cleaning teams briefed for construction, commercial fitness and property environments."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
            <article className="grid gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-6 sm:grid-cols-[240px_1fr] sm:items-center lg:p-8" key={reason.title}>
                <div className="flex items-center gap-4">
                  <span className="grid size-14 place-items-center rounded-2xl bg-[#071827] text-white">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="text-xl font-black text-[#071827]">{reason.title}</h3>
                </div>
                <p className="leading-7 text-slate-650 text-slate-600">{reason.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
