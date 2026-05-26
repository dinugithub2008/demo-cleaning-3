"use client";

import { Check, ChevronDown, Phone } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { business } from "@/data/siteContent";

const serviceOptions = [
  "Post-Construction Cleaning",
  "Commercial Fitness Facility Cleaning",
  "Strata Cleaning",
  "End of Lease Cleaning Services",
];

export function FinalCTA() {
  const [service, setService] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceError, setServiceError] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setServiceOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const fieldClass =
    "min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#171313] outline-none transition placeholder:text-slate-400 focus:border-[#ec1f72] focus:ring-4 focus:ring-[#ec1f72]/12";

  return (
    <section className="bg-white pb-16" id="quote">
      <div className="container-x">
        <div className="tile-grid overflow-hidden rounded-[2rem] p-6 text-white sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-white/78">Site-ready handover finishes</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                Engage Clear Site Co. before handover, opening day, or final inspection.
              </h2>
              <p className="mt-4 max-w-2xl text-white/82">
                Provide the site type, location, timeframe, and scope, and we’ll recommend the appropriate cleaning solution for construction, fitness facilities, strata, or vacate projects.
              </p>
              <a
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-[#171313] px-6 py-3 text-sm font-black text-white shadow-lg shadow-slate-950/20 transition hover:brightness-110"
                href={business.phoneHref}
              >
                <Phone className="size-4 text-[#d8c4a6]" />
                Call Now
              </a>
            </div>
            <form
              action={`mailto:${business.email}`}
              className="rounded-[1.5rem] bg-white p-5 text-[#171313] shadow-2xl shadow-slate-950/20 sm:p-6"
              encType="text/plain"
              id="quote-form"
              method="post"
              onSubmit={(event: FormEvent<HTMLFormElement>) => {
                if (!service) {
                  event.preventDefault();
                  setServiceError(true);
                  setServiceOpen(true);
                }
              }}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="sr-only" htmlFor="quote-name">Name</label>
                <input className={fieldClass} id="quote-name" name="Name" placeholder="Your name*" required />

                <label className="sr-only" htmlFor="quote-phone">Phone</label>
                <input className={fieldClass} id="quote-phone" name="Phone" placeholder="Phone number*" required type="tel" />

                <label className="sr-only" htmlFor="quote-email">Email</label>
                <input className={fieldClass} id="quote-email" name="Email" placeholder="Your email*" required type="email" />

                <label className="sr-only" htmlFor="quote-service">Service</label>
                <div className="relative" ref={dropdownRef}>
                  <input name="Service" required type="hidden" value={service} />
                  <button
                    aria-expanded={serviceOpen}
                    aria-haspopup="listbox"
                    aria-invalid={serviceError}
                    className={`${fieldClass} flex items-center justify-between gap-3 text-left ${
                      serviceError ? "border-[#ec1f72] ring-4 ring-[#ec1f72]/12" : serviceOpen ? "border-[#ec1f72] ring-4 ring-[#ec1f72]/12" : ""
                    } ${service ? "" : "text-slate-400"}`}
                    id="quote-service"
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setServiceOpen(true);
                      }

                      if (event.key === "Escape") {
                        setServiceOpen(false);
                      }
                    }}
                    onPointerDown={(event) => {
                      event.preventDefault();
                      setServiceOpen((value) => !value);
                    }}
                    type="button"
                  >
                    <span className="truncate">{service || "Type of service*"}</span>
                    <ChevronDown className={`size-4 shrink-0 text-[#6f584d] transition ${serviceOpen ? "rotate-180" : ""}`} />
                  </button>
                  {serviceOpen ? (
                    <div
                      aria-labelledby="quote-service"
                      className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl shadow-slate-950/14"
                      role="listbox"
                    >
                      {serviceOptions.map((option) => {
                        const selected = service === option;
                        return (
                          <button
                            aria-selected={selected}
                            className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3 text-left text-sm font-bold transition ${
                              selected ? "bg-[#fff0f6] text-[#6f584d]" : "text-slate-700 hover:bg-[#f4eee9] hover:text-[#171313]"
                            }`}
                            key={option}
                            onClick={() => {
                              setService(option);
                              setServiceError(false);
                              setServiceOpen(false);
                            }}
                            role="option"
                            type="button"
                          >
                            <span>{option}</span>
                            {selected ? <Check className="size-4 text-[#ec1f72]" /> : null}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                  {serviceError ? <p className="mt-2 px-1 text-xs font-bold text-[#ec1f72]">Please choose a service.</p> : null}
                </div>

                <label className="sr-only" htmlFor="quote-location">Location</label>
                <input className={fieldClass} id="quote-location" name="Location" placeholder="Suburb / site location" />

                <label className="sr-only" htmlFor="quote-deadline">Deadline</label>
                <input className={fieldClass} id="quote-deadline" name="Deadline" placeholder="Preferred date / deadline" />
              </div>

              <label className="sr-only" htmlFor="quote-message">Scope details</label>
              <textarea
                className={`${fieldClass} mt-3 min-h-32 resize-y py-3`}
                id="quote-message"
                name="Scope"
                placeholder="Tell us about the site, access, timing and cleaning scope"
              />

              <button
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ec1f72] px-6 py-3 text-sm font-black text-white shadow-lg shadow-pink-700/20 transition hover:brightness-95"
                type="submit"
              >
                Send Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
