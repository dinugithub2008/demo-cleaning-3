import Image from "next/image";
import { business } from "@/data/siteContent";

export function Logo() {
  return (
    <a aria-label={`${business.name} home`} className="inline-flex shrink-0 items-center gap-3" href="#">
      <span className="relative block size-16 shrink-0 overflow-hidden rounded-lg bg-black shadow-lg shadow-pink-700/20 sm:size-20">
        <Image
          alt=""
          aria-hidden="true"
          className="object-contain"
          fill
          priority
          sizes="(min-width: 640px) 80px, 64px"
          src="/logo.png"
        />
      </span>
      <span className="font-display flex max-w-32 flex-wrap items-baseline gap-x-1 text-lg font-semibold uppercase leading-none tracking-[0.18em] sm:max-w-44 sm:text-2xl sm:tracking-[0.22em]">
        <span className="text-[#76513b]">Clear</span>
        <span className="text-[#ec1f72]">Site</span>
        <span className="text-[#76513b]">Co.</span>
      </span>
    </a>
  );
}
