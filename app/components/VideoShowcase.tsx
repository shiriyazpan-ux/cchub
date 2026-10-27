"use client";

import { useState } from "react";

const videos = [
  { id: "tour", label: "סיור במערכת", src: "/videos/cchub-tour.mp4", poster: "/videos/cchub-tour.jpg" },
  { id: "stopwatch", label: "2 שניות לכל סיסמה", src: "/videos/cchub-stopwatch.mp4", poster: "/videos/cchub-stopwatch.jpg" },
  { id: "integrations", label: "Google ולידים אוטומטיים", src: "/videos/cchub-integrations.mp4", poster: "/videos/cchub-integrations.jpg" },
];

export default function VideoShowcase() {
  const [active, setActive] = useState(videos[0].id);
  const current = videos.find((v) => v.id === active) ?? videos[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div className="h-tabs" role="group" aria-label="בחירת סרטון">
        {videos.map((v) => (
          <button
            key={v.id}
            type="button"
            className="h-tab"
            aria-pressed={v.id === active}
            onClick={() => setActive(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="h-video">
        <video
          key={current.id}
          src={current.src}
          poster={current.poster}
          controls
          playsInline
          preload="metadata"
          aria-label={current.label}
        />
      </div>
    </div>
  );
}
