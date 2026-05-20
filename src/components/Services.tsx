import { primaryServices } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section className="section-pad bg-white" id="services">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our services"
          title="Specialist cleaning for construction projects, commercial facilities and property handovers."
          text="Clear Site Co. is specialised in post-construction cleaning, commercial fitness facility contracts, strata cleaning and end-of-lease cleaning across Sydney."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                className={`group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-sm shadow-slate-950/5 ${
                  index === 1 ? "lg:-translate-y-6" : ""
                }`}
                key={service.title}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={`${service.title} by ClearSiteCo`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={service.image}
                  />
                  <span className="absolute left-5 top-5 grid size-14 place-items-center rounded-2xl bg-white text-[#0877c9] shadow-lg">
                    <Icon className="size-7" />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ec1f72]">{service.subtitle}</p>
                  <h3 className="mt-3 text-2xl font-black text-[#071827]">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span className="rounded-full bg-[#edf7ff] px-3 py-2 text-xs font-black text-[#075f9f]" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <CTAButton href="#quote-form" variant="secondary">Discuss Your Site</CTAButton>
        </div>
      </div>
    </section>
  );
}
