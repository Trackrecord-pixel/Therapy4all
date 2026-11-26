"use client";

import { useEffect, useRef } from "react";

// Background video (muted, looping). React doesn't render `muted` on the server,
// so browsers can block autoplay — we set it in the browser and start playback ourselves.
export default function HeroVideo({ src, poster, className = "absolute inset-0 -z-20 h-full w-full object-cover" }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  return (
    <video ref={ref} className={`${className} motion-reduce:hidden`} autoPlay muted loop playsInline preload="auto" poster={poster} aria-hidden="true">
      <source src={src} type="video/mp4" />
    </video>
  );
}
