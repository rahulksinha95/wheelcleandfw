export const CONTACT = {
  phoneDisplay: "(214) 702-8369",
  phoneHref: "tel:2147028369",
  email: "wheelcleandfw@gmail.com",
  area: "Dallas / Fort Worth Metroplex",
};

export const SERVICE_CITIES = [
  "Addison",
  "Carrollton",
  "Cockrell Hill",
  "Dallas",
  "Farmers Branch",
  "Garland",
  "Glenn Heights",
  "Irving",
  "Mesquite",
  "Plano",
  "Richardson",
  "Rockwall",
  "Rowlett",
  "University Park",
];

export type Tier = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  duration: string;
  blurb: string;
  features: string[];
  popular?: boolean;
};

export const TIERS: Tier[] = [
  {
    id: "essential",
    name: "The Essential",
    price: 45,
    duration: "~30 min",
    blurb: "The perfect everyday clean to keep your chair fresh and rolling smooth.",
    features: [
      "Complete frame wash, wipe & dry",
      "Tires & casters wash and dry",
      "Wheel hub & spokes clean",
      "Thorough sanitization",
    ],
  },
  {
    id: "deluxe",
    name: "The Deluxe",
    price: 55,
    oldPrice: 65,
    duration: "~45 min",
    blurb: "Our most-requested clean — the Essential, plus a full detail finish.",
    features: [
      "Everything in The Essential",
      "Deep caster cleaning (hair / fur / dirt removal)",
      "Full frame, footplate & tire detailing",
      "Thorough sanitization",
    ],
    popular: true,
  },
  {
    id: "heavy-duty",
    name: "The Heavy Duty",
    price: 75,
    duration: "~60 min",
    blurb:
      "For chairs with significant dirt, dust, grime or other substances. Everything in The Deluxe, plus an extra deep-clean pass.",
    features: [
      "Everything in The Deluxe",
      "Extra deep-clean pass over the full frame",
      "Grime, dust & substance removal",
      "Thorough sanitization",
    ],
  },
];

export type AddOn = {
  id: string;
  name: string;
  price: number;
  description: string;
  note?: string;
};

export const ADDONS: AddOn[] = [
  {
    id: "oil-treatment",
    name: "Oil Treatment",
    price: 5,
    description:
      "All-natural, skin-safe lubricating oil applied to hinges, pivot points and caster bearings for a noticeably smoother roll.",
  },
  {
    id: "cushion-cleaning",
    name: "Cushion Cleaning",
    price: 25,
    description: "Full cushion vacuum, wipe-down, steam and sanitize.",
    note: "Requires client to be out of chair.",
  },
];

export const DEVICES = [
  {
    id: "manual",
    name: "Manual Wheelchairs",
    description: "Standard and lightweight folding frames, cleaned down to the spokes.",
  },
  {
    id: "power",
    name: "Power Wheelchairs",
    description: "Full body frames, controllers and upholstery — handled with care.",
  },
  {
    id: "scooter",
    name: "Mobility Scooters",
    description: "Base plates, wheels, seat and chassis washed and sanitized.",
  },
  {
    id: "sports",
    name: "Sports Wheelchairs",
    description: "Sport and racing chairs detailed without wrecking the finish.",
  },
  {
    id: "walker",
    name: "Walkers",
    description: "Frames, wheels and grip pads cleaned for a steadier stride.",
  },
  {
    id: "canes",
    name: "Canes & More",
    description: "Canes, crutches and other mobility aids — ask us about yours.",
  },
] as const;

export const STEPS = [
  {
    number: "1",
    title: "Choose a cleaning tier",
    description:
      "Pick a base cleaning for your wheelchair or mobility device — The Essential, The Deluxe or The Heavy Duty.",
  },
  {
    number: "2",
    title: "Add your extras",
    description:
      "Smooth it out with our oil treatment, refresh your cushion, or request a custom service for whatever else your chair needs.",
  },
  {
    number: "3",
    title: "Sit back & roll",
    description:
      "We come to you, fully equipped. You're never required to transfer out of your chair for any base tier cleaning.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Marcus T.",
    location: "Fort Worth",
    text: "Wheel Clean DFW made my power chair look brand new in 45 minutes right in my driveway. Smooth roll and total peace of mind!",
    rating: 5,
  },
  {
    name: "Elena R.",
    location: "Plano",
    text: "The deep steam sanitization removed months of outdoor grime from my son's sports chair. Exceptional local service.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Arlington",
    text: "Prompt, respectful, and thorough. Having clean wheels makes such a big difference inside our home environment.",
    rating: 5,
  },
];

export const FAQS = [
  {
    question: "Do I have to get out of my wheelchair?",
    answer:
      "No — you're never required to transfer out of your wheelchair for any base tier cleaning. The only exception is the optional cushion cleaning, which needs you out of the chair briefly.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use skin-safe, eco-friendly materials for all of our cleanings — safe for you and safe for your equipment.",
  },
  {
    question: "How long does a cleaning take?",
    answer:
      "It depends on the tier: The Essential runs about 30 minutes, The Deluxe about 45, and The Heavy Duty about 60.",
  },
  {
    question: "What areas do you serve?",
    answer:
      `We're fully mobile and serve the entire ${CONTACT.area}. Specific cities include ${SERVICE_CITIES.slice(0, 7).join(", ")}, and more. Just give us your service location when you schedule.`,
  },
  {
    question: "What if I need a specific service?",
    answer:
      "Tell us what you need done on your wheelchair or mobility device and we'll do our very best to meet it. Custom requests are always welcome.",
  },
  {
    question: "How do I schedule?",
    answer:
      `Call or text ${CONTACT.phoneDisplay}, or submit the scheduling form. We'll reach out ASAP to set up your on-site cleaning.`,
  },
];
