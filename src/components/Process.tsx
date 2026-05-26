import { processSteps } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section className="section-pad bg-[#fffafc]" id="process">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="A structured process for scoped commercial cleaning"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-950/5 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10" key={item.step}>
              <span className="text-5xl font-black text-[#ec1f72]/25">{item.step}</span>
              <h3 className="mt-6 text-xl font-black text-[#171313]">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
