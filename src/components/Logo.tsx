import { CheckCircle2 } from "lucide-react";
import { business } from "@/data/siteContent";

export function Logo() {
  return (
    <a aria-label={`${business.name} home`} className="flex items-center gap-2" href="#">
      <span className="grid size-10 place-items-center rounded-full bg-[#ec1f72] text-white shadow-lg shadow-pink-700/20">
        <CheckCircle2 className="size-5" />
      </span>
      <span className="text-xl font-black tracking-normal text-[#071827]">
        {business.name.slice(0, 5)}
        <span className="text-[#0877c9]">{business.name.slice(5)}</span>
      </span>
    </a>
  );
}
