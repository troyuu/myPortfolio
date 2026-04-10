import { useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/constants/content";
import DoodleLogo from "@/components/common/DoodleLogo";

function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

export default function HeroSection({ isDark, onToggle }) {
  const logoRef = useRef(null);
  const currentRef = useRef({ imgTop: 0, scale: 1, rotate: 0, titleTop: 0, titleOpacity: 1 });
  const targetRef = useRef({ imgTop: 0, scale: 1, rotate: 0, titleTop: 0, titleOpacity: 1 });
  const rafRef = useRef(null);
  const logoElRef = useRef(null);
  const titleElRef = useRef(null);

  const computeTarget = useCallback(() => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY;
    const imgH = logoRef.current?.offsetHeight || 170;

    const raw = Math.min(Math.max(scrollY / (vh * 0.8), 0), 1);

    const t = raw < 0.5
      ? 4 * raw * raw * raw
      : 1 - Math.pow(-2 * raw + 2, 3) / 2;

    const isMobile = window.innerWidth < 768;
    const startCenter = (isMobile ? vh * 0.4 : vh * 0.35) + imgH / 2;
    const endCenter = 20;
    const imgTop = startCenter + (endCenter - startCenter) * t;
    const scale = 1 - t * 0.85;
    const rotate = t * 360;

    const imgVisualBottom = imgTop + (imgH * scale) / 2;
    const titleTop = imgVisualBottom + 20;
    const titleFade = Math.min(scrollY / (vh * 0.3), 1);
    const titleOpacity = 1 - titleFade;

    targetRef.current = { imgTop, scale, rotate, titleTop, titleOpacity };
  }, []);

  const animate = useCallback(() => {
    const cur = currentRef.current;
    const tgt = targetRef.current;
    const ease = 0.08;

    cur.imgTop = lerp(cur.imgTop, tgt.imgTop, ease);
    cur.scale = lerp(cur.scale, tgt.scale, ease);
    cur.rotate = lerp(cur.rotate, tgt.rotate, ease);
    cur.titleTop = lerp(cur.titleTop, tgt.titleTop, ease);
    cur.titleOpacity = lerp(cur.titleOpacity, tgt.titleOpacity, ease);

    if (logoElRef.current) {
      logoElRef.current.style.top = `${cur.imgTop}px`;
      logoElRef.current.style.transform = `translateX(-50%) translateY(-50%) rotate(${cur.rotate}deg) scale(${cur.scale})`;
    }
    if (titleElRef.current) {
      titleElRef.current.style.top = `${cur.titleTop}px`;
      titleElRef.current.style.opacity = Math.max(cur.titleOpacity, 0);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  const onScroll = useCallback(() => {
    computeTarget();
  }, [computeTarget]);

  useEffect(() => {
    computeTarget();
    const tgt = targetRef.current;
    currentRef.current = { ...tgt };

    if (logoElRef.current) {
      logoElRef.current.style.top = `${tgt.imgTop}px`;
      logoElRef.current.style.transform = `translateX(-50%) translateY(-50%) rotate(${tgt.rotate}deg) scale(${tgt.scale})`;
    }
    if (titleElRef.current) {
      titleElRef.current.style.top = `${tgt.titleTop}px`;
      titleElRef.current.style.opacity = Math.max(tgt.titleOpacity, 0);
    }

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeTarget, { passive: true });
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeTarget);
    };
  }, [animate, onScroll, computeTarget]);

  return (
    <section id="home" className="relative h-screen w-full bg-background">
      {/* Doodle Logo — clickable to toggle theme */}
      <div
        ref={(el) => { logoRef.current = el; logoElRef.current = el; }}
        className="fixed left-1/2 z-[1000] w-[100px] p-4 will-change-transform sm:w-[130px] md:w-[170px]"
      >
        <DoodleLogo
          isDark={isDark}
          onToggle={onToggle}
          className="h-full w-full text-foreground"
        />
      </div>

      {/* Title */}
      <h1
        ref={titleElRef}
        className={cn(
          "pointer-events-none fixed left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap font-heading font-bold text-foreground will-change-transform",
          "text-[0.8rem] tracking-[0.2rem]",
          "md:text-[1.2rem] md:tracking-[0.6rem]",
          "lg:text-[1.8rem] lg:tracking-[0.8rem]"
        )}
      >
        {SITE.tagline}
      </h1>
    </section>
  );
}
