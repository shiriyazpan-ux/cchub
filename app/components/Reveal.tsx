"use client";

import { useEffect } from "react";

// Adds the "in" class to every .reveal element when it scrolls into view.
// Any element that is already in view or above it (after an anchor jump,
// back navigation or a fast scroll) is revealed immediately, so a section
// is never left empty waiting for another scroll event.
export default function Reveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const show = (el: Element) => el.classList.add("in");

    if (!("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => observer.observe(el));

    let timer = 0;
    const revealPassed = () => {
      timer = 0;
      const limit = window.innerHeight;
      items.forEach((el) => {
        if (el.classList.contains("in")) return;
        if (el.getBoundingClientRect().top < limit) {
          show(el);
          observer.unobserve(el);
        }
      });
    };
    // A short timer (not requestAnimationFrame) so it also runs where frames are paused.
    const schedule = () => {
      if (!timer) timer = window.setTimeout(revealPassed, 60);
    };

    revealPassed();
    // Safety net for browsers that skip intersection callbacks (hidden tabs, in-app browsers).
    const fallback = window.setTimeout(revealPassed, 1200);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("hashchange", schedule);
    window.addEventListener("pageshow", schedule);
    window.addEventListener("resize", schedule);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      if (timer) window.clearTimeout(timer);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("pageshow", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return null;
}
