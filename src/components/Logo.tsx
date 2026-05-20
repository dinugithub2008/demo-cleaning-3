import Image from "next/image";
import { business } from "@/data/siteContent";

export function Logo() {
  return (
    <a aria-label={`${business.name} home`} className="relative block size-20 shrink-0 overflow-hidden rounded-lg bg-black shadow-lg shadow-pink-700/20 sm:size-24" href="#">
      <Image
        alt=""
        aria-hidden="true"
        className="object-contain"
        fill
        priority
        sizes="(min-width: 640px) 96px, 80px"
        src="/clear-site-co-logo-tagline.png"
      />
    </a>
  );
}
