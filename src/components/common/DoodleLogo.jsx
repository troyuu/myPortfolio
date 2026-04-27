import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

function SunDoodle({ className }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Flame corona — flickering fire all around the sun */}
      {/* Top flames */}
      <path d="M50 32 C48 24, 52 14, 54 6 C56 14, 54 22, 56 28" strokeWidth="1.6" />
      <path d="M58 30 C56 20, 60 8, 62 2 C64 10, 62 20, 64 28" strokeWidth="1.8" />
      <path d="M66 32 C68 22, 66 12, 70 6 C72 14, 68 24, 68 30" strokeWidth="1.6" />
      {/* Top-right flames */}
      <path d="M78 36 C84 28, 90 22, 96 14 C92 24, 86 28, 82 34" strokeWidth="1.6" />
      <path d="M82 40 C90 32, 98 28, 104 20 C100 30, 92 34, 86 38" strokeWidth="1.5" />
      {/* Right flames */}
      <path d="M88 50 C96 48, 106 50, 114 46 C108 52, 98 52, 90 54" strokeWidth="1.6" />
      <path d="M90 60 C100 58, 110 60, 118 58 C110 64, 100 62, 90 64" strokeWidth="1.8" />
      <path d="M88 70 C96 72, 106 70, 114 74 C108 68, 98 68, 90 66" strokeWidth="1.6" />
      {/* Bottom-right flames */}
      <path d="M82 80 C90 88, 98 92, 104 100 C100 90, 92 86, 86 82" strokeWidth="1.5" />
      <path d="M78 84 C84 92, 90 98, 96 106 C92 96, 86 92, 82 86" strokeWidth="1.6" />
      {/* Bottom flames */}
      <path d="M66 88 C68 98, 66 108, 70 114 C72 106, 68 96, 68 90" strokeWidth="1.6" />
      <path d="M58 90 C56 100, 60 112, 62 118 C64 110, 62 100, 64 92" strokeWidth="1.8" />
      <path d="M50 88 C48 96, 52 106, 54 114 C56 106, 54 98, 56 92" strokeWidth="1.6" />
      {/* Bottom-left flames */}
      <path d="M38 84 C30 92, 24 98, 16 106 C22 96, 28 90, 34 84" strokeWidth="1.6" />
      <path d="M34 80 C26 88, 22 92, 16 100 C20 90, 28 86, 32 82" strokeWidth="1.5" />
      {/* Left flames */}
      <path d="M32 70 C24 72, 14 70, 6 74 C12 68, 22 68, 30 66" strokeWidth="1.6" />
      <path d="M30 60 C20 62, 10 60, 2 58 C10 56, 20 58, 30 56" strokeWidth="1.8" />
      <path d="M32 50 C24 48, 14 50, 6 46 C12 52, 22 52, 30 54" strokeWidth="1.6" />
      {/* Top-left flames */}
      <path d="M34 40 C26 32, 22 28, 16 20 C20 30, 28 34, 32 38" strokeWidth="1.5" />
      <path d="M38 36 C30 28, 24 22, 16 14 C22 24, 28 28, 34 34" strokeWidth="1.6" />
      {/* Sun circle — sketchy, wobbly, imperfect */}
      <path d="M58 33 C66 31, 78 36, 85 46 C91 55, 92 66, 86 76 C80 85, 68 90, 56 88 C44 86, 34 78, 32 66 C30 54, 36 42, 46 36 C50 33, 54 33, 58 33" strokeWidth="2.5" />
      {/* Second pass — overlapping sketch line for hand-drawn feel */}
      <path d="M57 34 C68 32, 80 38, 86 48 C92 58, 91 70, 84 78 C77 86, 65 89, 55 87 C45 85, 35 76, 33 64 C31 52, 38 41, 48 36 C52 34, 55 33, 57 34" strokeWidth="1.2" opacity="0.5" />

      {/* Sunspots — small dots on the sun's surface */}
      <circle cx="55" cy="52" r="1.8" strokeWidth="1" opacity="0.55" />
      <circle cx="70" cy="62" r="2.4" strokeWidth="1" opacity="0.55" />
      <circle cx="48" cy="70" r="1.4" strokeWidth="0.9" opacity="0.5" />
      <circle cx="65" cy="76" r="1.2" strokeWidth="0.9" opacity="0.45" />
      <circle cx="76" cy="50" r="1" strokeWidth="0.8" opacity="0.45" />

      {/* Heat shimmer dots — scattered tiny sparks beyond the flames */}
      <circle cx="10" cy="60" r="0.9" strokeWidth="0" fill="currentColor" />
      <circle cx="110" cy="60" r="0.9" strokeWidth="0" fill="currentColor" />
      <circle cx="60" cy="10" r="0.9" strokeWidth="0" fill="currentColor" />
      <circle cx="60" cy="110" r="0.9" strokeWidth="0" fill="currentColor" />
      <circle cx="20" cy="20" r="0.7" strokeWidth="0" fill="currentColor" opacity="0.7" />
      <circle cx="100" cy="20" r="0.7" strokeWidth="0" fill="currentColor" opacity="0.7" />
      <circle cx="100" cy="100" r="0.7" strokeWidth="0" fill="currentColor" opacity="0.7" />
      <circle cx="20" cy="100" r="0.7" strokeWidth="0" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function MoonDoodle({ className }) {
  return (
    <svg
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Sparkle rays around moon — top-left */}
      <path d="M22 18 L26 22" strokeWidth="1.4" opacity="0.6" />
      <path d="M16 32 L21 33" strokeWidth="1.4" opacity="0.6" />
      <path d="M30 12 L31 17" strokeWidth="1.4" opacity="0.6" />

      {/* Crescent moon — outer arc (sketchy hand-drawn) */}
      <path
        d="M78 18 C54 20, 32 40, 30 64 C28 92, 50 110, 78 110"
        strokeWidth="2.8"
      />
      {/* Inner crescent curve — solid, smoother shape */}
      <path
        d="M78 110 C62 100, 52 84, 52 64 C52 44, 62 28, 78 18"
        strokeWidth="2.2"
      />
      {/* Second pass — overlapping sketch line for hand-drawn feel */}
      <path
        d="M76 19 C53 22, 33 41, 31 64 C29 90, 51 109, 76 109"
        strokeWidth="1"
        opacity="0.45"
      />

      {/* Craters — small dots on the moon's solid body (left side of crescent) */}
      <circle cx="42" cy="55" r="2" strokeWidth="1" opacity="0.5" />
      <circle cx="38" cy="78" r="2.6" strokeWidth="1" opacity="0.5" />
      <circle cx="46" cy="92" r="1.4" strokeWidth="0.9" opacity="0.45" />
      <circle cx="48" cy="38" r="1.3" strokeWidth="0.9" opacity="0.45" />

      {/* Stars — right side, varied sizes */}
      <path d="M92 28 L93.2 24 L94.4 28 L98.4 29 L94.4 30 L93.2 34 L92 30 L88 29Z" strokeWidth="1.2" />
      <path d="M100 58 L101 55 L102 58 L105 59 L102 60 L101 63 L100 60 L97 59Z" strokeWidth="1" />
      <path d="M86 96 L87 93 L88 96 L91 97 L88 98 L87 101 L86 98 L83 97Z" strokeWidth="1" />
      <path d="M108 38 L108.7 35.5 L109.4 38 L112 38.7 L109.4 39.4 L108.7 42 L108 39.4 L105.4 38.7Z" strokeWidth="0.9" opacity="0.8" />

      {/* Tiny twinkle dots */}
      <circle cx="104" cy="74" r="1" strokeWidth="0" fill="currentColor" />
      <circle cx="94" cy="46" r="0.9" strokeWidth="0" fill="currentColor" />
      <circle cx="92" cy="78" r="0.7" strokeWidth="0" fill="currentColor" opacity="0.7" />
      <circle cx="100" cy="100" r="1" strokeWidth="0" fill="currentColor" />
      <circle cx="113" cy="56" r="0.8" strokeWidth="0" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

const DURATION = "1.4s";
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const TRANSITION = `transform ${DURATION} ${EASE}, opacity ${DURATION} ${EASE}`;
const DURATION_MS = 1450;

export default function DoodleLogo({ isDark, onToggle, className, clickable = true }) {
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const isFirst = useRef(true);

  useEffect(() => {
    const sun = sunRef.current;
    const moon = moonRef.current;
    if (!sun || !moon) return;

    if (isFirst.current) {
      isFirst.current = false;
      // Styles already set via inline props on first render — skip animation
      return;
    }

    const leaving = isDark ? sun : moon;
    const entering = isDark ? moon : sun;

    // Leaving: slide right + fade out
    leaving.style.zIndex = "10";
    leaving.style.transition = TRANSITION;
    leaving.style.transform = "translateX(150%)";
    leaving.style.opacity = "0";

    // Entering: snap to left instantly, then animate to center
    entering.style.zIndex = "0";
    entering.style.transition = "none";
    entering.style.transform = "translateX(-150%)";
    entering.style.opacity = "0";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        entering.style.transition = TRANSITION;
        entering.style.transform = "translateX(0)";
        entering.style.opacity = "1";
      });
    });

    const timer = setTimeout(() => {
      leaving.style.transition = "none";
      leaving.style.zIndex = "0";
    }, DURATION_MS);

    return () => clearTimeout(timer);
  }, [isDark]);

  return (
    <div
      onClick={clickable ? onToggle : undefined}
      className={cn(
        "group relative aspect-square",
        clickable && "cursor-pointer hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div
        ref={sunRef}
        className="pointer-events-none absolute inset-0"
        style={{
          transform: isDark ? "translateX(150%)" : "translateX(0)",
          opacity: isDark ? 0 : 1,
        }}
      >
        <SunDoodle className="h-full w-full" />
      </div>
      <div
        ref={moonRef}
        className="pointer-events-none absolute inset-0"
        style={{
          transform: isDark ? "translateX(0)" : "translateX(-150%)",
          opacity: isDark ? 1 : 0,
        }}
      >
        <MoonDoodle className="h-full w-full" />
      </div>

      {/* Thought cloud tooltip — top right */}
      {clickable && (
        <div className="pointer-events-none absolute -top-16 left-[90%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="relative h-[3.5rem] w-[10rem]">
            {/* Cloud shape */}
            <svg
              viewBox="0 0 180 70"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-full w-full text-foreground"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M35 55 C15 55, 12 38, 28 32 C24 18, 42 10, 58 18 C68 6, 95 6, 102 18 C115 10, 138 12, 136 28 C152 20, 170 30, 165 44 C175 46, 175 60, 162 58 C160 65, 145 66, 138 60 C128 66, 108 66, 100 58 C88 66, 65 66, 58 58 C45 64, 28 62, 35 55Z"
                fill="var(--background)"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            {/* Thought bubbles — bottom left pointing to logo */}
            <div className="absolute -bottom-3 left-2 h-[0.5rem] w-[0.5rem] rounded-full border-[1.5px] border-foreground bg-background" />
            <div className="absolute -bottom-6 -left-1 h-[0.35rem] w-[0.35rem] rounded-full border-[1.5px] border-foreground bg-background" />
            {/* Text */}
            <span className="absolute inset-0 flex flex-col items-center justify-center text-center font-sans text-[0.55rem] font-medium leading-snug text-foreground">
              <span>Click me to</span>
              <span>{isDark ? "bring the sun!" : "call the moon!"}</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
