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
      <h2 className="text-balance text-3xl font-black leading-tight text-[#071827] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{text}</p> : null}
    </div>
  );
}
