"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, navItems } from "@/data/siteContent";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

const contactActions = [
  { label: "Call ClearSiteCo", href: business.phoneHref, icon: Phone, className: "text-[#0877c9]" },
  { label: "Email ClearSiteCo", href: `mailto:${business.email}`, icon: Mail, className: "text-[#ec1f72]" },
  { label: "Message ClearSiteCo on WhatsApp", href: business.whatsappHref, icon: WhatsAppIcon, className: "text-[#25d366]" },
  { label: "Follow ClearSiteCo on Instagram", href: business.instagramHref, icon: InstagramIcon, className: "text-[#dd2a7b]" },
  { label: "Follow ClearSiteCo on Facebook", href: business.facebookHref, icon: FacebookIcon, className: "text-[#1877f2]" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/94 backdrop-blur-xl">
      <div className="container-x flex min-h-[6.5rem] items-center justify-between gap-4 py-2 sm:min-h-28">
        <Logo />

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a className="text-sm font-bold text-slate-700 transition hover:text-[#ec1f72]" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1 shadow-sm">
            {contactActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  aria-label={action.label}
                  className={`grid size-10 place-items-center rounded-full transition hover:bg-[#edf7ff] hover:text-[#071827] ${action.className}`}
                  href={action.href}
                  key={action.label}
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
          <CTAButton href="#quote-form">Request Site Quote</CTAButton>
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

      <div className="container-x grid grid-cols-5 gap-2 pb-3 lg:hidden">
        {contactActions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              aria-label={action.label}
              className={`inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-[#edf7ff] hover:text-[#071827] ${action.className}`}
              href={action.href}
              key={action.label}
            >
              <Icon className="size-[18px]" />
            </a>
          );
        })}
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
              <CTAButton href="#quote-form" onClick={() => setOpen(false)}>Request Site Quote</CTAButton>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900"
                href={business.phoneHref}
                onClick={() => setOpen(false)}
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
