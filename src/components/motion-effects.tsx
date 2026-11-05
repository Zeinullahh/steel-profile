"use client";

import { useEffect } from "react";

/** Progressive enhancement: all page content remains visible when JS is off. */
export function MotionEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;
    const targets = document.querySelectorAll<HTMLElement>(".section, .split-feature, .contact-banner, .product-card, .solution-card, .contact-card, .contact-aside, .about-adv, .benefit, .category-card, .detail-photo, .detail-copy, .detail-columns > div, .page-hero > .container");
    targets.forEach((node, index) => {
      node.classList.add("motion-ready");
      node.style.setProperty("--motion-order", String(index % 6));
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("motion-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });
    targets.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
