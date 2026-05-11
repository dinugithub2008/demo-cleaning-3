import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type CTAButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function CTAButton({ children, href, variant = "primary", className = "" }: CTAButtonProps) {
  const styles: Record<NonNullable<CTAButtonProps["variant"]>, { className: string; style: CSSProperties }> = {
    primary: {
      className: "shadow-lg shadow-pink-700/20 hover:brightness-95",
      style: { backgroundColor: "#ec1f72", color: "#ffffff", border: "1px solid #ec1f72" },
    },
    secondary: {
      className: "shadow-lg shadow-blue-700/20 hover:brightness-95",
      style: { backgroundColor: "#0877c9", color: "#ffffff", border: "1px solid #0877c9" },
    },
    light: {
      className: "shadow-lg shadow-slate-950/10 hover:brightness-95",
      style: { backgroundColor: "#ffffff", color: "#071827", border: "1px solid rgba(7, 24, 39, 0.12)" },
    },
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition duration-200 ${styles[variant].className} ${className}`}
      href={href}
      style={styles[variant].style}
    >
      {children}
      <ArrowUpRight className="size-4" />
    </a>
  );
}
