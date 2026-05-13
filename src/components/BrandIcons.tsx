type IconProps = {
  className?: string;
};

export function WhatsAppIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.02 3.2a8.62 8.62 0 0 0-7.38 13.06l-.92 3.35 3.44-.9a8.59 8.59 0 0 0 4.86 1.5h.01a8.5 8.5 0 0 0 6.09-2.52 8.57 8.57 0 0 0 2.53-6.1 8.65 8.65 0 0 0-8.63-8.39Zm0 15.55a7.14 7.14 0 0 1-3.66-1l-.26-.16-2.04.53.55-1.98-.17-.27a7.17 7.17 0 1 1 5.58 2.88Zm3.94-5.37c-.22-.11-1.27-.63-1.47-.7-.2-.08-.34-.11-.49.11-.14.21-.56.7-.69.84-.13.15-.25.16-.47.06-.22-.12-.91-.34-1.74-1.08a6.55 6.55 0 0 1-1.2-1.5c-.13-.22-.01-.34.1-.45.1-.1.22-.25.33-.38.11-.13.15-.22.22-.37.08-.14.04-.27-.02-.38-.05-.1-.49-1.18-.67-1.62-.18-.43-.36-.37-.49-.38h-.42c-.14 0-.38.06-.58.28-.2.21-.76.74-.76 1.8s.78 2.09.89 2.23c.11.15 1.53 2.34 3.72 3.28.52.23.93.36 1.24.47.52.16.99.14 1.37.08.42-.06 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.05-.1-.2-.15-.42-.25Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.1 8.66V6.82c0-.53.35-.65.6-.65h1.52V3.84L14.13 3.8c-2.32 0-2.85 1.74-2.85 2.85v2.01H9.45v2.62h1.83v6.92h2.82v-6.92h1.9l.25-2.62H14.1Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <rect height="14" rx="4" stroke="currentColor" strokeWidth="2" width="14" x="5" y="5" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
      <circle cx="16.4" cy="7.8" fill="currentColor" r="1" />
    </svg>
  );
}
