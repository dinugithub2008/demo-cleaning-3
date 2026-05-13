import { Mail, MapPin, Phone } from "lucide-react";
import { business, footerLinks, socialLinks } from "@/data/siteContent";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import { Logo } from "./Logo";

const icons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

const socialHrefs = {
  Instagram: business.instagramHref,
  Facebook: business.facebookHref,
};

const socialStyles = {
  Instagram: "text-[#ff4fa3] hover:text-white",
  Facebook: "text-[#8fc2ff] hover:text-white",
};

export function Footer() {
  return (
    <footer className="bg-white pb-8">
      <div className="container-x tile-grid overflow-hidden rounded-[2rem] p-8 text-white lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="inline-flex rounded-2xl bg-white p-3">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-sm font-semibold leading-7 text-white/82">
              Specialist post-construction, commercial gym, strata and end-of-lease cleaning across Sydney. Scoped clearly, delivered carefully.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = icons[social as keyof typeof icons];
                return (
                  <a
                    aria-label={social}
                    className={`grid size-10 place-items-center rounded-full transition ${socialStyles[social as keyof typeof socialStyles]}`}
                    href={socialHrefs[social as keyof typeof socialHrefs]}
                    key={social}
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h2 className="font-black">{title}</h2>
              <ul className="mt-5 grid gap-3 text-sm font-semibold text-white/82">
                {links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-white" href="#services">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-black">Contact</h2>
            <ul className="mt-5 grid gap-4 text-sm font-semibold text-white/84">
              <li className="flex gap-3"><Phone className="size-5 shrink-0" /> <a href={business.phoneHref}>{business.phone}</a></li>
              <li className="flex gap-3"><Mail className="size-5 shrink-0" /> <a href={`mailto:${business.email}`}>{business.email}</a></li>
              <li className="flex gap-3"><MapPin className="size-5 shrink-0" /> {business.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/14 pt-6 text-xs font-semibold text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ClearSiteCo. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
