// Line icons that replace the emoji used across the site.
// Pass either a name ("users") or one of the legacy emoji ("👥"); unknown values fall back to a neutral dot.

const PATHS: Record<string, string> = {
  users: "M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M17 12a2.8 2.8 0 1 0 0-5.6M16 14.2a5.5 5.5 0 0 1 5.5 5.8",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
  task: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 12.5l3 3 5.5-6.5",
  box: "M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8",
  lock: "M6.5 11h11a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-5A2.5 2.5 0 0 1 6.5 11zM8 11V7a4 4 0 0 1 8 0v4",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5",
  folder: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  chart: "M4 20V10M10 20V4M16 20v-7M22 20H2",
  import: "M12 3v12M7 10l5 5 5-5M4 21h16",
  export: "M12 21V9M7 14l5-5 5 5M4 3h16",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM8.5 12l2.5 2.5 4.5-5",
  note: "M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5zM15 3v6h6M7 13h8M7 17h5",
  building: "M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M3 21h18M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2",
  crown: "M3 7l4.5 4L12 4l4.5 7L21 7l-2 12H5z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.5 2",
  card: "M4.5 5h15A2.5 2.5 0 0 1 22 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5v-9A2.5 2.5 0 0 1 4.5 5zM2 10h20",
  bulb: "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z",
  puzzle: "M14 4a2 2 0 1 0-4 0H5v5a2 2 0 1 1 0 4v6h5a2 2 0 1 0 4 0h5v-6a2 2 0 1 0 0-4V4z",
  video: "M4.5 6h11A2.5 2.5 0 0 1 18 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-7A2.5 2.5 0 0 1 4.5 6zM18 10l4-2.5v9L18 14",
  search: "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20.5 20.5 16 16",
  question: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5h.01",
  edit: "M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z",
  money: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6.5v11",
  cloud: "M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5z",
  rocket: "M5 15c-1.5 1.5-2 4-2 6 2 0 4.5-.5 6-2M9 15l-3-3c1-4 4-8 9-9 1 5-1 9-6 12zM15 9.01V9",
  gear: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",
  chat: "M21 11.5a8.4 8.4 0 0 1-12.9 7.1L3 20l1.4-4.9A8.4 8.4 0 1 1 21 11.5z",
  mail: "M5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7A2.5 2.5 0 0 1 5 4.5zM22 7l-10 6.5L2 7",
  drive: "M8.5 3h7l6 10.5-3.5 6.5H6l-3.5-6.5zM8.5 3 15 13.5H2.5M15.5 3 9 13.5",
  key: "M15 9a3 3 0 1 0 0-.01M13 11l-9 9M7 17l3 3M10 14l2 2",
  megaphone: "M3 11l15-6v14L3 13zM7 13v5h3",
  briefcase: "M5 7h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM8 7V4h8v3M3 13h18",
  handshake: "M7 11l5-5 5 5M7 17l5-5 5 5",
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  file: "M14 3H6.5A2.5 2.5 0 0 0 4 5.5v13A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5V9zM14 3v6h6M8 13h8M8 17h6",
  funnel: "M3 4h18l-7 8.5V19l-4 2v-8.5z",
  moon: "M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5a6.6 6.6 0 0 0 10 10z",
  calendar: "M5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7a2.5 2.5 0 0 1 2.5-2.5zM3 9.5h18M8 2.5v4M16 2.5v4",
  zap: "M13 2 3 14h9l-1 8 10-12h-9z",
  webhook: "M7 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM10.5 9.5l-2 4.5M13.5 9.5l2 4.5M10 17h4",
  languages: "M4 5h9M8.5 3v2M6 5c0 4 3 7 6 8M11 5c0 4-3 7-6 8M13 21l4-9 4 9M14.5 18h5",
  check: "M20 6 9 17l-5-5",
  arrow: "M19 12H5M11 6l-6 6 6 6",
  down: "M12 4v16M5 13l7 7 7-7",
  dot: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
};

const EMOJI: Record<string, string> = {
  "👥": "users", "👤": "user", "✅": "task", "🧊": "box", "🔒": "lock", "🔐": "lock", "📘": "book",
  "📁": "folder", "🔗": "link", "📊": "chart", "📥": "import", "📤": "export", "🛡": "shield",
  "📝": "note", "🏢": "building", "👑": "crown", "⏱": "clock", "💳": "card", "💡": "bulb",
  "🧩": "puzzle", "🎬": "video", "🔎": "search", "❓": "question", "✏": "edit", "💰": "money",
  "☁": "cloud", "🚀": "rocket", "⚙": "gear", "💬": "chat", "✉": "mail", "🔺": "drive", "🔑": "key",
  "📣": "megaphone", "💼": "briefcase", "🤝": "handshake", "✨": "spark", "🌐": "globe", "📄": "file",
};

export default function Icon({ name, size = 24, className = "", title }: {
  name: string; size?: number; className?: string; title?: string;
}) {
  const clean = name.replace(/️/g, "").trim();
  const key = PATHS[clean] ? clean : EMOJI[clean] ?? "dot";
  return (
    <svg
      className={`cchub-icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      <path d={PATHS[key]} />
    </svg>
  );
}
