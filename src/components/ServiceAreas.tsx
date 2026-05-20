import { MapPin } from "lucide-react";
import { locations } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ServiceAreas() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Service areas"
            title="Specialist cleaning services across Sydney and surrounding suburbs"
            text="Our priority coverage includes commercial sites, strata properties and managed facilities across greater Sydney."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {locations.map((location) => (
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-800 shadow-sm" key={location}>
                <MapPin className="size-4 shrink-0 text-[#ec1f72]" />
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
