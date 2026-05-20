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
  name: "Clear Site Co.",
  phone: "0466582296",
  phoneHref: "tel:+61466582296",
  email: "info@clearsiteco.com.au",
  whatsappHref: "https://wa.me/61466582296",
  instagramHref: "https://www.instagram.com/clearsiteco_?igsh=ZnBxaTBmdzd3bTNh",
  facebookHref: "https://www.facebook.com/",
  address: "Sydney NSW",
  hours: "Mon-Sat 7:00am-7:00pm",
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

export const heroSlides = [
  {
    title: "Post-construction handover cleans",
    text: "Post-construction cleaning for residential and commercial projects, specialising in builders cleans, defect-sensitive finishing and residue removal, and final handover presentation cleaning.",
    image: "https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Commercial facility presentation",
    text: "Clean, polished commercial spaces ready for staff, clients and inspections.",
    image: "https://images.pexels.com/photos/33357392/pexels-photo-33357392.png?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Gym and fitness cleaning",
    text: "High-touch equipment, amenities and mirrors, and high-traffic areas maintained to a commercial hygiene standard.",
    image: "https://images.pexels.com/photos/19025672/pexels-photo-19025672.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Strata and lease handovers",
    text: "Common areas, vacate cleans and property presentation handled with practical detail.",
    image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

export const heroServiceTiles = [
  {
    title: "Builders cleans",
    text: "Residential, commercial and industrial post-construction projects.",
    image: "https://images.pexels.com/photos/4176414/pexels-photo-4176414.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Gym contracts",
    text: "Sanitised equipment, amenities and high-traffic areas maintained to a commercial presentation standard.",
    image: "https://images.pexels.com/photos/19025672/pexels-photo-19025672.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    title: "Property handovers",
    text: "Strata common areas, vacate cleans and inspection-ready finishes.",
    image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
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
    subtitle: "Residential, commercial and industrial sites",
    text: "Detailed builders cleans, handover cleans, debris removal, fine construction dust extraction and final presentation cleaning for site-ready handovers.",
    image: "https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Builders cleans", "Handover cleans", "Post-construction cleaning"],
  },
  {
    icon: Dumbbell,
    title: "Commercial Cleaning",
    subtitle: "Specialising in commercial fitness facilities",
    text: "High-traffic commercial cleaning focused on hygiene, presentation and equipment sanitisation.",
    image: "https://images.pexels.com/photos/19025672/pexels-photo-19025672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Commercial fitness contracts", "Equipment sanitisation", "High-traffic area cleaning"],
  },
  {
    icon: Building2,
    title: "Strata & End of Lease Cleaning",
    subtitle: "Strata properties, common areas and end-of-lease cleans.",
    text: "Reliable cleaning for strata properties, common areas, end-of-lease cleans and property handovers with a focus on detail and presentation.",
    image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Common areas", "Vacate cleans", "Presentation"],
  },
];

export const reasons = [
  {
    icon: ClipboardCheck,
    title: "Scope-Based Cleaning Contracts",
    text: "Each site starts with a practical scope: zones, access, deadline, presentation standard and priority defects.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial Standards",
    text: "Teams are briefed for high-traffic environments, with a strong focus on safety and clear site communication.",
  },
  {
    icon: TimerReset,
    title: "Built Around Handover Dates",
    text: "We coordinate around builder deadlines, lease returns, fitness facility operating hours and strata maintenance windows.",
  },
];

export const processSteps = [
  { step: "01", title: "Site Scope", text: "Share project type, scope, size, deadline, access requirements and cleaning priorities." },
  { step: "02", title: "Clear Quote", text: "Receive a clear, scoped quote with inclusions, timing and optional extras." },
  { step: "03", title: "Clean & Detail", text: "The team works through dust, debris, amenities, fixtures and presentation areas." },
  { step: "04", title: "Handover Check", text: "Final review against the scope to ensure the site is ready for inspection or handover." },
];

export const locations = [
  "Sydney",
  "Parramatta",
  "Burwood",
  "Rhodes",
  "Strathfield",
  "Five Dock",
  "Chatswood",
  "North Sydney",
  "St Leonards",
  "Macquire Park",
  "Ryde",
  "Cronulla",
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
    name: "Site Readiness",
    eyebrow: "Post-construction",
    price: "Quoted by scope",
    text: "For builders cleans, defect-stage cleaning and pre-handover presentation.",
    features: ["Dust and debris removal | Fixture and finish detailing | Glass and wet area cleaning | Handover presentation standard"],
  },
  {
    name: "Commercial Fitness Cleaning Contract",
    eyebrow: "Commercial fitness facilities",
    price: "Scheduled cleaning contracts",
    text: "Ongoing fitness facility cleaning focused on hygiene, equipment sanitisation and presentation standards.",
    features: ["Equipment sanitisation | Amenities and change room servicing | Floor and mirror maintenance | Flexible after-hours scheduling"],
    featured: true,
  },
  {
    name: "Handover Readiness",
    eyebrow: "Strata and end-of-lease cleaning",
    price: "Custom quote",
    text: "For strata common areas, end-of-lease cleaning and handover presentation.",
    features: ["Strata common area cleaning", "End-of-lease support", "Entry and corridor detailing", "Scheduled maintenance contracts"],
  },
];

export const faqs = [
  {
    question: "What does Clear Site Co. specialise in?",
    answer:
      "Clear Site Co specialises in post-construction cleaning, commercial fitness facility cleaning, and strata and end-of-lease cleaning services.",
  },
  {
    question: "Do you handle residential, commercial and industrial construction cleans?",
    answer:
      "Yes. We support residential, commercial and industrial post-construction projects, including builders cleans, defect-stage cleaning, dust and debris removal, and handover presentation standards.",
  },
  {
    question: "Can you service gyms outside operating hours?",
    answer:
      "Yes. Fitness and training facility cleaning can be carried out outside operating hours where required, and is fully coordinated around class timetables, member traffic, and facility access requirements.",
  },
  {
    question: "Do you offer ongoing or recurring contracts?",
    answer:
      "Yes. We provide contract and recurring cleaning across post-construction, commercial fitness facilities, strata, and end-of-lease properties.",
  },
  {
    question: "How do you quote cleaning projects?",
    answer:
      "Pricing is based on site size, scope, access, condition, and timeframe, as well as whether the work is one-off or ongoing. A detailed quote is provided before any work commences.",
  },
];

export const footerLinks = {
  Services: ["Post-Construction Cleaning", "Fitness Facility Cleaning", "Strata Cleaning", "End of Lease Cleaning"],
  Company: ["Projects", "Process", "Service Areas", "FAQ"],
};

export const socialLinks = ["Instagram", "Facebook"];

export const seoSchemas = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    image: "https://images.pexels.com/photos/6197108/pexels-photo-6197108.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
