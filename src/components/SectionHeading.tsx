type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "center" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#ec1f72]">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-balance text-4xl font-bold leading-tight text-[#171313] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}
