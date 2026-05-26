import { Star } from "lucide-react";
import { testimonials } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="section-pad bg-[#f4eee9]" id="reviews">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client reviews"
          title="Trusted by site managers, commercial fitness facilities and property teams"
          text="The work is judged by readiness: handover, members, tenants and inspections"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((review) => (
            <article className="rounded-[1.5rem] bg-white p-7 shadow-sm shadow-slate-950/5" key={review.name}>
              <div className="flex gap-1 text-yellow-400" aria-label={`${review.rating} star review`}>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star className="size-5 fill-current" key={index} />
                ))}
              </div>
              <blockquote className="mt-6 text-lg font-semibold leading-8 text-slate-900">
                “{review.quote}”
              </blockquote>
              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="font-black text-slate-950">{review.name}</p>
                <p className="text-sm font-semibold text-[#6f584d]">{review.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
