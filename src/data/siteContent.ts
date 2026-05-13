import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Cone,
  Dumbbell,
  Factory,
  HardHat,
  MapPin,
  ShieldCheck,
  TimerReset,
} from "lucide-react";

export const business = {
  name: "ClearSiteCo",
  phone: "02 8123 4588",
  phoneHref: "tel:+61281234588",
  email: "hello@clearsiteco.com.au",
  whatsappHref: "https://wa.me/61281234588",
  instagramHref: "https://www.instagram.com/",
  facebookHref: "https://www.facebook.com/",
  address: "Sydney NSW",
  hours: "Mon-Sat 6:00am-7:00pm",
  rating: "4.9",
  reviewCount: "180+",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroStats = [
  { value: "3", label: "core specialisations" },
  { value: "24h", label: "handover-ready response" },
  { value: "180+", label: "projects and sites supported" },
];

export const trustBadges = [
  { icon: HardHat, title: "Construction Ready", text: "Detailed builders cleans, dust removal and final presentation." },
  { icon: Dumbbell, title: "Gym Hygiene Focus", text: "High-touch fitness equipment, amenities and floor areas." },
  { icon: ShieldCheck, title: "Insured Operators", text: "Reliable site teams for commercial and property handovers." },
  { icon: Clock3, title: "Deadline Aware", text: "Cleaning planned around inspections, openings and handover dates." },
];

export const primaryServices = [
  {
    icon: Cone,
    title: "Post-Construction Cleaning",
    subtitle: "Residential, Commercial & Industrial projects",
    text: "Detailed builders cleans, handover cleans, dust removal, debris clearing, final presentation cleaning and site-ready finishes.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1100&q=82",
    tags: ["Builders cleans", "Handover cleans", "Dust removal"],
  },
  {
    icon: Dumbbell,
    title: "Commercial Cleaning",
    subtitle: "Specialising in Gym & Fitness Facilities",
    text: "High-traffic commercial cleaning with a focus on hygiene, presentation, equipment sanitisation, amenities and ongoing maintenance.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=82",
    tags: ["Gym contracts", "Amenities", "Equipment sanitisation"],
  },
  {
    icon: Building2,
    title: "Strata & End of Lease Cleaning",
    subtitle: "Strata properties, common areas and vacate cleans",
    text: "Reliable cleaning solutions for strata properties, common areas, vacate cleans and property handovers with attention to detail and presentation.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1100&q=82",
    tags: ["Common areas", "Vacate cleans", "Presentation"],
  },
];

export const reasons = [
  {
    icon: ClipboardCheck,
    title: "Scope-Led Cleaning Plans",
    text: "Each site starts with a practical scope: zones, access, deadline, presentation standard and priority defects.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial Standards",
    text: "Teams are briefed for high-traffic environments, safety-aware cleaning and site-sensitive communication.",
  },
  {
    icon: TimerReset,
    title: "Built Around Handover Dates",
    text: "We plan around builder deadlines, lease returns, gym operating hours and strata maintenance windows.",
  },
];

export const processSteps = [
  { step: "01", title: "Site Scope", text: "Share project type, size, deadline, access and cleaning priorities." },
  { step: "02", title: "Clear Quote", text: "Receive a practical quote with inclusions, timing and optional extras." },
  { step: "03", title: "Clean & Detail", text: "The team works through dust, debris, amenities, surfaces and presentation zones." },
  { step: "04", title: "Handover Check", text: "Final review against the scope so the site is ready for inspection or use." },
];

export const locations = [
  "Sydney",
  "Parramatta",
  "Blacktown",
  "Castle Hill",
  "Kellyville",
  "Rouse Hill",
  "Baulkham Hills",
  "Bella Vista",
  "Norwest",
  "Penrith",
  "Liverpool",
  "Bankstown",
];

export const testimonials = [
  {
    name: "Site Manager",
    location: "Commercial fitout, Parramatta",
    quote:
      "ClearSiteCo handled the final builders clean before handover. Dust, glass, amenities and presentation areas were all handled without drama.",
    rating: 5,
  },
  {
    name: "Gym Owner",
    location: "Fitness facility, Castle Hill",
    quote:
      "The team understands gym cleaning properly. Equipment, mirrors, amenities and high-touch areas are consistently clean for members.",
    rating: 5,
  },
  {
    name: "Property Manager",
    location: "Strata block, Sydney",
    quote:
      "Reliable communication and great attention to common areas. They make handovers and recurring strata cleans much easier to manage.",
    rating: 5,
  },
];

export const packages = [
  {
    name: "Site Reset",
    eyebrow: "Post-construction",
    price: "Quoted by scope",
    text: "For builders cleans, defect-period dust removal and pre-handover presentation.",
    features: ["Dust and debris clearing", "Surface and fixture detail", "Glass and wet area focus", "Final presentation clean"],
  },
  {
    name: "GymCare Contract",
    eyebrow: "Commercial gyms",
    price: "Weekly plans",
    text: "For ongoing fitness facility cleaning with hygiene and member presentation at the centre.",
    features: ["Equipment sanitisation", "Amenities and change rooms", "Floor and mirror maintenance", "After-hours scheduling"],
    featured: true,
  },
  {
    name: "Property Handover",
    eyebrow: "Strata and lease",
    price: "Custom quote",
    text: "For strata common areas, vacate cleaning and property handover presentation.",
    features: ["Common area cleaning", "Vacate checklist support", "Entry and corridor detail", "Flexible recurring options"],
  },
];

export const faqs = [
  {
    question: "What does ClearSiteCo specialise in?",
    answer:
      "ClearSiteCo focuses on post-construction cleaning, commercial gym and fitness facility cleaning, and strata or end-of-lease cleaning.",
  },
  {
    question: "Do you handle residential, commercial and industrial construction cleans?",
    answer:
      "Yes. We support residential, commercial and industrial post-construction projects, including builders cleans, handover cleans, dust removal and final presentation cleaning.",
  },
  {
    question: "Can you clean gyms outside operating hours?",
    answer:
      "Yes. Gym and fitness facility cleans can be scheduled around member traffic, class timetables and opening hours.",
  },
  {
    question: "Do you offer recurring contracts?",
    answer:
      "Yes. Post-construction and commercial gym contracts are core services, with strata and end-of-lease work available as supplementary recurring services.",
  },
  {
    question: "How do you price cleaning work?",
    answer:
      "Pricing depends on site size, scope, access, condition, deadline and whether the service is one-off or recurring. We provide a clear quote before work begins.",
  },
];

export const footerLinks = {
  Services: ["Post-Construction", "Gym Facility Cleaning", "Strata Cleaning", "End of Lease"],
  Company: ["Projects", "Process", "Service Areas", "FAQ"],
};

export const socialLinks = ["Instagram", "Facebook"];

export const seoSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    areaServed: locations,
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: "180",
    },
  },
  faq: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
};

export const projectTypes = [
  { icon: Cone, label: "Builders cleans" },
  { icon: Dumbbell, label: "Gym contracts" },
  { icon: Factory, label: "Industrial sites" },
  { icon: Building2, label: "Strata properties" },
  { icon: CalendarCheck, label: "Vacate handovers" },
  { icon: CheckCircle2, label: "Final presentation" },
];
