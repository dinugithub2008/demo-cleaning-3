import { CheckCircle2 } from "lucide-react";
import { packages } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  return (
    <section className="section-pad bg-[#eaf5ff]" id="pricing">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              align="left"
              eyebrow="Packages"
              title="Choose the right service structure"
              text="Clear Site Co. quotes based on site scope, access and project deadlines. These service structures reflect the most common ways clients work with us."
            />
            <ul className="mt-8 grid gap-3 text-sm font-bold text-slate-800">
              <li className="flex items-center gap-2"><CheckCircle2 className="size-5 text-[#ec1f72]" /> Scope-first quoting</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-5 text-[#ec1f72]" /> Site-aware scheduling</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="size-5 text-[#ec1f72]" /> Commercial Presentation Standards</li>
            </ul>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {packages.map((plan) => (
              <article
                className={`rounded-[1.5rem] p-6 ${
                  plan.featured ? "bg-[#071827] text-white shadow-2xl shadow-slate-950/20" : "bg-white text-[#071827] shadow-sm shadow-slate-950/5"
                }`}
                key={plan.name}
              >
                <p className={`text-xs font-black uppercase tracking-[0.16em] ${plan.featured ? "text-[#2ac8d4]" : "text-[#ec1f72]"}`}>{plan.eyebrow}</p>
                <h3 className="mt-4 text-2xl font-black">{plan.name}</h3>
                <p className={`mt-3 text-sm leading-6 ${plan.featured ? "text-white/82" : "text-slate-600"}`}>{plan.text}</p>
                <p className="mt-7 text-3xl font-black">{plan.price}</p>
                <ul className="mt-7 grid gap-3">
                  {plan.features.map((feature) => (
                    <li className="flex items-start gap-2 text-sm font-semibold" key={feature}>
                      <CheckCircle2 className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-[#2ac8d4]" : "text-[#0877c9]"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton className="mt-8 w-full" href="#quote-form" variant={plan.featured ? "light" : "primary"}>
                  Request a Scoped Quote
                </CTAButton>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
