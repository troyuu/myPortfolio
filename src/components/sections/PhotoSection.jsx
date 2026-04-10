import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import troyPortrait from "@/assets/images/troy-photo.png";

function ScrollMouse({ className }) {
  return (
    <svg
      width="24"
      height="38"
      viewBox="0 0 24 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="36"
        rx="11"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="10"
        r="2"
        fill="currentColor"
        className="animate-[scrollWheel_1.8s_ease-in-out_infinite]"
      />
    </svg>
  );
}

export default function PhotoSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative flex h-[75vh] w-full items-center justify-center overflow-hidden bg-[#e0e0e0] md:h-screen md:items-end">
      {/* Portrait
        Mobile: shorter section with object-cover centered on Troy
        md+: full-height section, object-contain anchored to bottom */}
      <img
        src={troyPortrait}
        alt="Troy Labajo"
        className={cn(
          "h-full w-full object-cover object-[50%_20%]",
          "md:object-contain md:object-bottom",
          "transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isVisible ? "scale-100" : "scale-110"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center text-white/60",
          "md:bottom-10",
          "transition-all duration-[1.2s] delay-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        )}
      >
        <p
          className={cn(
            "text-[0.65rem] font-light tracking-[0.2rem]",
            "sm:text-[0.75rem] sm:tracking-[0.25rem]",
            "md:text-[0.85rem] md:tracking-[0.3rem]"
          )}
        >
          Scroll Down
        </p>
        <ScrollMouse className="mx-auto mt-3 text-white/50" />
      </div>
    </section>
  );
}
