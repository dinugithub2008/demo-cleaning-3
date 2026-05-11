"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, navItems } from "@/data/siteContent";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/94 backdrop-blur-xl">
      <div className="container-x flex min-h-18 items-center justify-between gap-5 py-3">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a className="text-sm font-bold text-slate-700 transition hover:text-[#ec1f72]" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href="#quote">Request Site Quote</CTAButton>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          className="grid size-11 place-items-center rounded-full border border-slate-200 text-slate-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-x grid gap-1 py-5" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-2 py-3 text-sm font-semibold text-slate-800"
                href={item.href}
                key={item.label}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-3">
              <CTAButton href="#quote">Request Site Quote</CTAButton>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900"
                href={business.phoneHref}
              >
                <Phone className="size-4 text-[#0877c9]" />
                Call Now
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
