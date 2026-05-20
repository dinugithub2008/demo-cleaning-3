import { reasons } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-slate-50" id="why-us">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title="Built for sites where timing and presentation matter"
              text="Defined scopes, deadline-driven scheduling and teams briefed for construction, commercial fitness and property."
            />
            <div className="mt-8 overflow-hidden rounded-[2rem] bg-[#071827] soft-shadow">
              <img
                alt="Professional cleaner disinfecting a corporate workspace"
                className="h-[420px] w-full object-cover opacity-92"
                src="https://images.pexels.com/photos/4176414/pexels-photo-4176414.jpeg?auto=compress&cs=tinysrgb&w=1100"
              />
            </div>
          </div>

          <div className="grid gap-5">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="grid gap-5 rounded-[1.4rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-950/5 sm:grid-cols-[220px_1fr] sm:items-center lg:p-8" key={reason.title}>
                  <div className="flex items-center gap-4">
                    <span className="grid size-14 place-items-center rounded-2xl bg-[#071827] text-white">
                      <Icon className="size-7" />
                    </span>
                    <h3 className="text-xl font-black text-[#071827]">{reason.title}</h3>
                  </div>
                  <p className="leading-7 text-slate-600">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
