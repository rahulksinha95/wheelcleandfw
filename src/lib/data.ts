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
    price: 59,
    duration: "~30 min",
    blurb: "The perfect everyday clean to keep your chair fresh and rolling smooth.",
    features: [
      "Complete frame wash, wipe & dry",
      "Tires/casters wash & dry",
			"Footplate wash & dry",
      "Wheel hub & spokes clean",
      "Thorough sanitization",
    ],
  },
  {
    id: "standard",
    name: "The Standard",
    price: 75,
    oldPrice: 79,
    duration: "~45 min",
    blurb: "Our most-requested clean — for that 'brand new chair' look & feel.",
    features: [
      "Everything in The Essential",
      "Full frame, tire, & footplate detailing",
      "Deep caster cleaning (hair/fur /dirt removal)",
      "Thorough sanitization",
    ],
    popular: true,
  },
  {
    id: "heavy-duty",
    name: "The Heavy Duty",
    price: 109,
    duration: "~60 min",
    blurb:
      "For chairs with significant dirt, dust, grime or other substances. Everything in The Standard, plus an extra deep-clean pass.",
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
      "All-natural, skin-safe oil applied to hinges, pivot points and caster bearings for a noticeably smoother roll. Oil also applied to plastic, metal, or carbon-fiber surfaces for added shine and protection.",
  },
  {
    id: "cushion-cleaning",
    name: "Cushion Cleaning",
    price: 25,
    description: "Full cushion vacuum, wipe-down, steam-clean and sanitize.",
    note: "Requires client to be out of chair.",
  },
	{
		id: "scent-profile",
    name: "Scent Profiles",
    price: 15,
    description: "Choose from available scent profiles to give your chair or device a fresh scent upgrade.",
    note: "Check for availability of scent profiles",
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
    title: "Choose Your Cleaning Tier",
    description:
      "Select a base cleaning for your wheelchair or mobility device — The Essential, The Standard or The Heavy Duty.",
  },
  {
    number: "2",
    title: "Choose Your Add-Ons",
    description:
      "Smooth it out with an oil treatment, refresh your upholstery, or request a custom service for whatever else your chair needs.",
  },
  {
    number: "3",
    title: "Schedule & Get WheelClean",
    description:
      "A technician will come to you at your scheduled time and location. We take ~30-60 minutes to get your chair or device looking and feeling fresh again.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Justin R",
    location: "Fort Worth",
    text: "Wheel Clean DFW made my power chair look brand new right in my driveway. Easy process and total peace of mind!",
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
      "No — you're not required to transfer out of your wheelchair for any base tier cleaning. The only exception is the optional cushion cleaning, which needs you out of the chair briefly.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use skin-safe, mon-toxic, eco-friendly materials for all of our cleanings — safe for you, safe for kids and pets, and safe for your equipment.",
  },
  {
    question: "How long does a cleaning take?",
    answer:
      "It depends on the tier: The Essential runs about 30 minutes, The Standard about 45, and The Heavy Duty about 60. Add-ons may increase service time.",
  },
  {
    question: "What areas do you serve?",
    answer:
      `We're fully mobile and serve the ${CONTACT.area}. Our service area includes ${SERVICE_CITIES.slice(0, 14).join(", ")}, and more. A $25 travel fee is required for all bookings outside of the service area. Just give us your service location when you schedule.`,
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
