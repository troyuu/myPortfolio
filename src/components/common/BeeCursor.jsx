import { useEffect, useRef } from "react";

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function BeeCursor() {
  const beeRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    function onMouseMove(e) {
      target.current = { x: e.clientX + 12, y: e.clientY - 18 };
    }

    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

      if (beeRef.current) {
        beeRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={beeRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden will-change-transform text-foreground transition-colors duration-500 md:block"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-[wobble_1.5s_ease-in-out_infinite]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Left wing */}
        <ellipse
          cx="22"
          cy="24"
          rx="12"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
          className="origin-[30px_28px] animate-[flapLeft_0.15s_ease-in-out_infinite_alternate]"
        />
        {/* Right wing */}
        <ellipse
          cx="58"
          cy="24"
          rx="12"
          ry="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.6"
          className="origin-[50px_28px] animate-[flapRight_0.15s_ease-in-out_infinite_alternate]"
        />
        {/* Antennae */}
        <path d="M30 22 C28 14, 22 10, 18 8" />
        <circle cx="17" cy="7" r="2" fill="currentColor" stroke="none" />
        <path d="M50 22 C52 14, 58 10, 62 8" />
        <circle cx="63" cy="7" r="2" fill="currentColor" stroke="none" />
        {/* Body — sketchy hand-drawn oval */}
        <path d="M26 30 C24 24, 28 20, 40 20 C52 20, 56 24, 54 30 C56 38, 54 50, 50 56 C46 62, 34 62, 30 56 C26 50, 24 38, 26 30Z" />
        {/* Stripes — wobbly hand-drawn lines */}
        <path d="M27 34 C32 32, 48 32, 53 34" />
        <path d="M26 42 C31 40, 49 40, 54 42" />
        <path d="M28 50 C33 48, 47 48, 52 50" />
        {/* Eyes — uneven doodle dots */}
        <circle cx="34" cy="28" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="46" cy="28" r="2" fill="currentColor" stroke="none" />
        {/* Smile */}
        <path d="M36 33 C38 35, 42 35, 44 33" strokeWidth="1.2" />
        {/* Stinger */}
        <path d="M40 60 L38 66 L42 66 Z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}
