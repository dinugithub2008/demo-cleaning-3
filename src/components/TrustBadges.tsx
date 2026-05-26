import { trustBadges } from "@/data/siteContent";

export function TrustBadges() {
  return (
    <section aria-label="Trust signals" className="container-x -mt-4 pb-12 lg:-mt-10">
      <div className="grid gap-4 rounded-[1.5rem] bg-white p-4 soft-shadow sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div className="flex gap-4 rounded-2xl bg-[#fff0f6] p-5" key={badge.title}>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#6f584d]">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="text-base font-black text-[#171313]">{badge.title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">{badge.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
