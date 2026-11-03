import { ADDONS, CONTACT, DEVICES, TIERS } from "@/lib/data";

export type ChatAction = {
  label: string;
  kind: "ask" | "link" | "schedule" | "tel";
  value: string;
};

export type ChatReply = {
  text: string;
  actions?: ChatAction[];
};

type Intent = {
  id: string;
  patterns: RegExp;
  reply: ChatReply;
};

const tierLine = (id: string) => {
  const t = TIERS.find((x) => x.id === id)!;
  const old = t.oldPrice ? ` (was $${t.oldPrice})` : "";
  return `${t.name} — $${t.price}${old} · ${t.duration}`;
};

const SCHEDULE_ACTION: ChatAction = {
  label: "Book a cleaning",
  kind: "schedule",
  value: "/schedule",
};

const CALL_ACTION: ChatAction = {
  label: `Call ${CONTACT.phoneDisplay}`,
  kind: "tel",
  value: CONTACT.phoneHref,
};

/**
 * Full chatbot dataset — every intent the assistant can handle,
 * built from the complete WheelClean DFW service catalog.
 */
export const INTENTS: Intent[] = [
  {
    id: "greeting",
    patterns:
      /^(hi|hiya|hello|hey|yo|howdy|good (morning|afternoon|evening)|sup|hola)\b/i,
    reply: {
      text: "Howdy! 👋 I'm the WheelClean DFW assistant. I can help with pricing, service areas, how the cleaning works, or booking your appointment. What can I do for you?",
      actions: [
        { label: "See pricing", kind: "ask", value: "How much does it cost?" },
        { label: "Service area", kind: "ask", value: "What areas do you serve?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "essential",
    patterns: /essential|basic|45\b|\$45/i,
    reply: {
      text: `The Essential is our everyday clean: ${tierLine(
        "essential"
      )}. It includes a complete frame wash, wipe & dry, tires & casters wash and dry, wheel hub & spokes clean, and thorough sanitization. Perfect for regular upkeep.`,
      actions: [
        { label: "Compare all tiers", kind: "ask", value: "What are your cleaning tiers?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "deluxe",
    patterns: /deluxe|standard|55\b|\$55|popular/i,
    reply: {
      text: `The Deluxe is our most popular clean: ${tierLine(
        "deluxe"
      )}. It's everything in The Essential plus deep caster cleaning (hair/fur/dirt removal) and full frame, footplate and tire detailing.`,
      actions: [
        { label: "Compare all tiers", kind: "ask", value: "What are your cleaning tiers?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "heavy-duty",
    patterns: /heavy[\s-]?duty|75\b|\$75|grime|really dirty|heavily soiled/i,
    reply: {
      text: `The Heavy Duty is ${tierLine(
        "heavy-duty"
      )} — built for chairs with significant dirt, dust, grime or other substances. It includes everything in The Deluxe plus an extra deep-clean pass over the full frame.`,
      actions: [
        { label: "Compare all tiers", kind: "ask", value: "What are your cleaning tiers?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "oil",
    patterns: /oil|lubricat|lube|smooth roll|hinges?|bearings?/i,
    reply: {
      text: `Our Oil Treatment is +$${ADDONS[0].price} on any tier. We apply all-natural, skin-safe lubricating oil to hinges, pivot points and caster bearings — your chair will roll noticeably smoother.`,
      actions: [
        { label: "Cushion cleaning", kind: "ask", value: "What about my cushion?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "cushion",
    patterns: /cushion|seat(?!belt)|steam|upholstery/i,
    reply: {
      text: `Cushion Cleaning is +$${ADDONS[1].price}: a full cushion vacuum, wipe-down, steam and sanitize. One heads-up — this add-on requires you to be out of your chair briefly.`,
      actions: [
        { label: "Oil treatment", kind: "ask", value: "What's the oil treatment?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "addons",
    patterns: /add-?ons?|extras?/i,
    reply: {
      text: `We have two add-ons you can stack onto any tier:\n\n• Oil Treatment +$${ADDONS[0].price} — skin-safe oil for hinges, pivots and caster bearings.\n• Cushion Cleaning +$${ADDONS[1].price} — full vacuum, wipe-down, steam & sanitize (you'll step out of the chair briefly).`,
      actions: [
        { label: "See pricing", kind: "ask", value: "How much does it cost?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "custom",
    patterns: /custom|specific service|special request|something else|other service/i,
    reply: {
      text: "Need a specific service done on your wheelchair or mobility device? Just tell us — custom requests are welcome and we'll do our very best to meet your needs. Add it to the scheduling form or call us directly.",
      actions: [SCHEDULE_ACTION, CALL_ACTION],
    },
  },
  {
    id: "pricing",
    patterns: /price|pricing|cost|how much|rate|charge|expensive|flat fee|\$/i,
    reply: {
      text: `Flat, straightforward pricing — from $45! Here's the lineup:\n\n${TIERS.map((t) => {
        const old = t.oldPrice ? ` (was $${t.oldPrice})` : "";
        return `• ${t.name} — $${t.price}${old} · ${t.duration}`;
      }).join("\n")}\n\nPlus add-ons: Oil Treatment +$5 and Cushion Cleaning +$25. Want me to start your booking?`,
      actions: [
        { label: "Tell me about the Deluxe", kind: "ask", value: "What's in the Deluxe clean?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "duration",
    patterns: /how long|duration|time|minutes|mins?|how fast|quick/i,
    reply: {
      text: "It depends on your tier: The Essential runs about 30 minutes, The Deluxe about 45, and The Heavy Duty about 60. We arrive fully equipped, so you can relax the whole time.",
      actions: [
        { label: "See pricing", kind: "ask", value: "How much does it cost?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "transfer",
    patterns:
      /transfer|get (out|out of)|leave (my|the) chair|out of (my|the) chair|stay in (my|the) chair|mobility (issue|limitation)|can'?t (stand|walk)/i,
    reply: {
      text: "Good news — you're NOT required to transfer out of your wheelchair for any base tier cleaning. We work safely around you. The only exception is the optional Cushion Cleaning add-on, which needs you out of the chair briefly.",
      actions: [
        { label: "See pricing", kind: "ask", value: "How much does it cost?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "products",
    patterns: /product|chemical|eco|skin.safe|safe|sanitiz|disinfect|soap|cleaning solution|materials?/i,
    reply: {
      text: "We use skin-safe, eco-friendly materials for ALL of our cleanings. Every wash, wipe and sanitize is gentle on your skin and your equipment.",
      actions: [
        { label: "What devices do you clean?", kind: "ask", value: "What devices do you clean?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "devices",
    patterns:
      /what (do you|can you) clean|devices?|wheelchair|power chair|scooter|sports chair|walker|cane|crutch|equipment|mobility aid|manual chair/i,
    reply: {
      text: `We clean all of them! Our list:\n\n${DEVICES.map((d) => `• ${d.name}`).join("\n")}\n\nIf yours isn't on the list, ask — we love a challenge.`,
      actions: [
        { label: "See pricing", kind: "ask", value: "How much does it cost?" },
        SCHEDULE_ACTION,
      ],
    },
  },
  {
    id: "area",
    patterns:
      /where|area|areas|city|cities|dallas|fort worth|dfw|metroplex|zip|location|serve|nearby|come to (my|our|us|me)/i,
    reply: {
      text: `We're fully mobile and serve the entire ${CONTACT.area}. Just include your service location when you schedule and we'll get out there.`,
      actions: [SCHEDULE_ACTION, CALL_ACTION],
    },
  },
  {
    id: "hours",
    patterns: /hours?|open|available|when can|schedule a (time|slot)|appointment time/i,
    reply: {
      text: "We schedule on-site visits directly with you, so the fastest way to confirm availability is to call or text us — we'll find a time that works and reach out ASAP to lock it in.",
      actions: [CALL_ACTION, SCHEDULE_ACTION],
    },
  },
  {
    id: "payment",
    patterns: /pay|payment|cash|card|credit|invoice|insurance|reimburs/i,
    reply: {
      text: "Payment details are confirmed at scheduling. For the fastest answer, call or text us at (214) 702-8369 — or send a service request and we'll walk you through it.",
      actions: [CALL_ACTION, SCHEDULE_ACTION],
    },
  },
  {
    id: "contact",
    patterns: /contact|call|text|phone|number|email|reach you|talk to (a )?human|speak to/i,
    reply: {
      text: `You can reach us directly:\n\n• Call or Text: ${CONTACT.phoneDisplay}\n• Email: ${CONTACT.email}\n\nWe'll get right back to you.`,
      actions: [CALL_ACTION, SCHEDULE_ACTION],
    },
  },
  {
    id: "book",
    patterns:
      /book|schedule|appointment|sign ?up|reserve|set (me|us) up|get (my|our|a) (clean|service)|ready to (go|start)/i,
    reply: {
      text: "Let's get you cleaned up! 🧼 Fill out the scheduling form — pick your tier, add any extras, and we'll reach out ASAP to set up your on-site cleaning. It takes about a minute.",
      actions: [SCHEDULE_ACTION, CALL_ACTION],
    },
  },
  {
    id: "thanks",
    patterns: /thank|thanks|thx|appreciate|great|awesome|perfect/i,
    reply: {
      text: "You're welcome! Anything else I can help with — or shall we get your chair on the calendar?",
      actions: [SCHEDULE_ACTION, CALL_ACTION],
    },
  },
  {
    id: "bye",
    patterns: /bye|goodbye|see you|later|cya/i,
    reply: {
      text: "Take care! 🛞 If you need a cleaning, we're right here — or give us a call at (214) 702-8369. Look fresher, roll smoother!",
      actions: [SCHEDULE_ACTION],
    },
  },
];

const FALLBACK: ChatReply = {
  text:
    "I want to help with that! I know our stuff — try asking about pricing, which devices we clean, the service area, or how to book. Or jump straight to the scheduling form.",
  actions: [
    { label: "See pricing", kind: "ask", value: "How much does it cost?" },
    { label: "Service area", kind: "ask", value: "What areas do you serve?" },
    SCHEDULE_ACTION,
    CALL_ACTION,
  ],
};

export const WELCOME_REPLY: ChatReply = {
  text: "Hi there! I'm the WheelClean assistant. Ask me anything about our wheelchair cleaning service — pricing, how it works, or booking. What can I help with?",
  actions: [
    { label: "See pricing", kind: "ask", value: "How much does it cost?" },
    { label: "Do I have to leave my chair?", kind: "ask", value: "Do I have to get out of my chair?" },
    { label: "Service area", kind: "ask", value: "What areas do you serve?" },
    SCHEDULE_ACTION,
  ],
};

export const QUICK_REPLIES: string[] = [
  "See pricing",
  "What devices do you clean?",
  "Service area",
  "Book a cleaning",
];

export function getBotReply(input: string): ChatReply {
  const text = input.trim();
  if (!text) return FALLBACK;
  for (const intent of INTENTS) {
    if (intent.patterns.test(text)) return intent.reply;
  }
  return FALLBACK;
}
