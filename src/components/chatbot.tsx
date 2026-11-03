"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  getBotReply,
  WELCOME_REPLY,
  type ChatAction,
} from "@/lib/chatbot";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  actions?: ChatAction[];
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const idRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const push = (msg: Omit<Message, "id">) => {
    idRef.current += 1;
    setMessages((prev) => [...prev, { ...msg, id: idRef.current }]);
  };

  const botRespond = (userText: string) => {
    setTyping(true);
    timerRef.current = setTimeout(() => {
      const reply = getBotReply(userText);
      setTyping(false);
      push({ from: "bot", text: reply.text, actions: reply.actions });
    }, 650 + Math.random() * 400);
  };

  const handleOpen = () => {
    setOpen(true);
    setSeen(true);
    inputRef.current?.focus();
    if (messages.length > 0) return;
    timerRef.current = setTimeout(() => {
      push({ from: "bot", text: WELCOME_REPLY.text, actions: WELCOME_REPLY.actions });
    }, 350);
  };

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;
    push({ from: "user", text: trimmed });
    setInput("");
    botRespond(trimmed);
  };

  const handleAction = (action: ChatAction) => {
    if (action.kind === "ask") {
      push({ from: "user", text: action.value });
      botRespond(action.value);
    } else if (action.kind === "schedule") {
      window.location.href = action.value;
    } else if (action.kind === "tel") {
      window.location.href = action.value;
    } else {
      window.open(action.value, "_blank", "noopener");
    }
  };

  return (
    <>
      {/* teaser bubble */}
      <AnimatePresence>
        {!open && !seen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 22, delay: 1.5 }}
            onClick={handleOpen}
            className="fixed bottom-24 right-5 z-50 max-w-[15rem] cursor-pointer rounded-2xl rounded-br-md border border-slate-200 bg-white px-4 py-3 shadow-xl shadow-ink/10"
          >
            <p className="text-sm font-semibold leading-snug text-ink">
              Questions about wheelchair cleaning? I&apos;m here! 👋
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* launcher button */}
      <motion.button
        onClick={() => (open ? setOpen(false) : handleOpen())}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-accent to-teal-700 text-white shadow-2xl shadow-accent/40"
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/40"
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className="grid place-items-center"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                <path
                  d="M12 4c-4.7 0-8 3-8 7 0 2.2 1.1 4 2.8 5.3L6 20l3.6-1.6c.8.2 1.6.3 2.4.3 4.7 0 8-3 8-7s-3.3-7.7-8-7.7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11h7M8.5 8.5h5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="fixed bottom-24 right-5 z-50 flex h-[32rem] max-h-[calc(100dvh-7.5rem)] w-[min(24rem,calc(100vw-2.5rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-slate-200 bg-cream shadow-2xl shadow-ink/25"
            role="dialog"
            aria-label="WheelClean chat assistant"
          >
            {/* header */}
            <div className="relative flex items-center gap-3 bg-ink px-5 py-4">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-[50px]"
              />
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-accent/20 text-accent-bright">
                <svg viewBox="0 0 24 24" fill="none" className="h-5.5 w-5.5" aria-hidden>
                  <circle cx="11" cy="14" r="7" stroke="currentColor" strokeWidth="1.9" />
                  <circle cx="11" cy="14" r="2" fill="currentColor" />
                  <path
                    d="M11 4.5v7.5m0 0 5.5-5.5M11 14l5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-emerald-400" />
              </span>
              <div className="relative">
                <p className="font-display text-sm font-bold text-white">
                  WheelClean Assistant
                </p>
                <p className="text-xs font-medium text-emerald-300">
                  Online · replies instantly
                </p>
              </div>
            </div>

            {/* messages */}
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={`flex flex-col ${
                      msg.from === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        msg.from === "user"
                          ? "rounded-br-md bg-accent font-semibold text-white"
                          : "rounded-bl-md border border-slate-200 bg-white font-medium text-ink"
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.actions && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {msg.actions.map((action) => (
                          <motion.button
                            key={action.label}
                            onClick={() => handleAction(action)}
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.94 }}
                            className="rounded-full border border-accent/40 bg-accent/5 px-3 py-1.5 text-xs font-bold text-accent transition-colors hover:bg-accent hover:text-white"
                          >
                            {action.label}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3.5 shadow-sm"
                  aria-label="Assistant is typing"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-slate-400"
                    />
                  ))}
                </motion.div>
              )}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a question…"
                className="flex-1 rounded-full border border-slate-200 bg-cream/60 px-4 py-2.5 text-sm font-medium text-ink placeholder:text-slate-400 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-white shadow-lg shadow-accent/30 transition-colors hover:bg-accent-bright disabled:opacity-40 disabled:shadow-none"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden>
                  <path
                    d="M4 12 20 4l-4.5 16-4-6.5L4 12Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
