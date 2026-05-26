"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-6 right-5 z-50 grid size-12 place-items-center rounded-full border border-white/70 bg-[#171313] text-white shadow-2xl shadow-slate-950/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#ec1f72] focus:outline-none focus:ring-4 focus:ring-[#ec1f72]/25 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      type="button"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
