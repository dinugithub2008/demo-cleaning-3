"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";
import { business, faqs } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-white" id="faq">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              text={`Can't find an answer? Call us at ${business.phone} or email ${business.email}.`}
            />
            <div className="mt-8">
              <CTAButton href={business.phoneHref}>Call Now</CTAButton>
            </div>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => {
              const isOpen = active === index;
              return (
                <article className="rounded-2xl border border-[#0877c9]/30 bg-white" key={faq.question}>
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-black text-slate-950"
                    onClick={() => setActive(isOpen ? -1 : index)}
                    type="button"
                  >
                    {faq.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#edf7ff] text-[#0877c9]">
                      {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                  {isOpen ? <p className="px-5 pb-5 text-sm leading-7 text-slate-600">{faq.answer}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
