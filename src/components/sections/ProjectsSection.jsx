import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProjectCard from "@/components/common/ProjectCard";
import { PROJECTS } from "@/constants/content";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/ui/carousel";

/* ── Projects doodle — rocket, browser windows, checklist, puzzle ── */
function ProjectsDoodle({ className }) {
  return (
    <svg
      viewBox="0 0 260 340"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Rocket (shipping/launching projects) ── */}
      <g transform="translate(130, 60)" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <path d="M0 -40 Q-14 -20 -14 15 L14 15 Q14 -20 0 -40 Z" />
        {/* Nose cone highlight */}
        <path d="M0 -40 Q-6 -25 -6 -5" strokeWidth="1" opacity="0.3" />
        {/* Window */}
        <circle cx="0" cy="-8" r="6" />
        <circle cx="0" cy="-8" r="3" strokeWidth="0.8" opacity="0.4" />
        {/* Fins */}
        <path d="M-14 5 L-24 22 L-14 15" />
        <path d="M14 5 L24 22 L14 15" />
        {/* Exhaust flame */}
        <path d="M-8 15 Q-5 28 0 32 Q5 28 8 15" strokeWidth="1.2" opacity="0.5" />
        <path d="M-4 15 Q-2 24 0 26 Q2 24 4 15" strokeWidth="0.8" opacity="0.35" />
        {/* Exhaust smoke puffs */}
        <circle cx="-6" cy="38" r="4" strokeWidth="1" opacity="0.25" />
        <circle cx="6" cy="40" r="3.5" strokeWidth="1" opacity="0.2" />
        <circle cx="0" cy="44" r="5" strokeWidth="1" opacity="0.15" />
      </g>

      {/* ── Browser window (web apps) — bottom-left ── */}
      <g transform="translate(20, 175)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="95" height="70" rx="5" />
        {/* Title bar */}
        <line x1="0" y1="14" x2="95" y2="14" strokeWidth="1" />
        {/* Traffic lights */}
        <circle cx="10" cy="7" r="2.2" strokeWidth="1.2" />
        <circle cx="18" cy="7" r="2.2" strokeWidth="1.2" />
        <circle cx="26" cy="7" r="2.2" strokeWidth="1.2" />
        {/* URL bar */}
        <rect x="35" y="4" width="50" height="6" rx="3" strokeWidth="0.8" opacity="0.4" />
        {/* Content lines */}
        <rect x="8" y="22" width="35" height="4" rx="1" strokeWidth="0.8" opacity="0.35" />
        <rect x="8" y="32" width="55" height="4" rx="1" strokeWidth="0.8" opacity="0.25" />
        <rect x="8" y="42" width="42" height="4" rx="1" strokeWidth="0.8" opacity="0.3" />
        {/* Image placeholder box */}
        <rect x="58" y="22" width="28" height="24" rx="2" strokeWidth="0.8" opacity="0.3" />
        {/* Mountain in image */}
        <path d="M62 42 L68 32 L72 38 L76 30 L82 42" strokeWidth="0.7" opacity="0.25" />
      </g>

      {/* ── Mobile phone (cross-platform) — bottom-right ── */}
      <g transform="translate(165, 180)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="50" height="80" rx="8" />
        {/* Screen */}
        <rect x="4" y="12" width="42" height="52" rx="2" strokeWidth="0.8" opacity="0.3" />
        {/* Notch */}
        <rect x="16" y="3" width="18" height="4" rx="2" strokeWidth="0.8" opacity="0.4" />
        {/* Home indicator */}
        <line x1="18" y1="73" x2="32" y2="73" strokeWidth="2" opacity="0.3" />
        {/* App grid on screen */}
        <rect x="9" y="18" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.3" />
        <rect x="21" y="18" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.3" />
        <rect x="33" y="18" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.3" />
        <rect x="9" y="30" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.25" />
        <rect x="21" y="30" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.25" />
        <rect x="33" y="30" width="8" height="8" rx="2" strokeWidth="0.7" opacity="0.25" />
      </g>

      {/* ── Checklist / task board — mid-left ── */}
      <g transform="translate(25, 270)" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
        {/* Clipboard */}
        <rect x="0" y="0" width="60" height="55" rx="4" />
        {/* Clip */}
        <rect x="18" y="-5" width="24" height="10" rx="3" />
        {/* Checkboxes */}
        <rect x="8" y="12" width="8" height="8" rx="1.5" strokeWidth="1.2" />
        <path d="M10 16.5 L12.5 19 L16.5 13" strokeWidth="1.3" />
        <line x1="22" y1="16" x2="48" y2="16" strokeWidth="1.2" opacity="0.5" />

        <rect x="8" y="26" width="8" height="8" rx="1.5" strokeWidth="1.2" />
        <path d="M10 30.5 L12.5 33 L16.5 27" strokeWidth="1.3" />
        <line x1="22" y1="30" x2="42" y2="30" strokeWidth="1.2" opacity="0.5" />

        <rect x="8" y="40" width="8" height="8" rx="1.5" strokeWidth="1.2" />
        <line x1="22" y1="44" x2="45" y2="44" strokeWidth="1.2" opacity="0.4" />
      </g>

      {/* ── Puzzle pieces (building solutions) — bottom-right ── */}
      <g transform="translate(160, 280)" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        {/* Piece 1 */}
        <path d="M0 10 L0 0 L20 0 L20 4 Q24 0 28 4 L28 0 L48 0 L48 10 L44 10 Q48 14 44 18 L48 18 L48 30 L28 30 L28 26 Q24 30 20 26 L20 30 L0 30 L0 18 L4 18 Q0 14 4 10 Z" />
        {/* Piece 2 (offset) */}
        <path d="M50 10 L50 0 L70 0 L70 4 Q74 0 78 4 L78 0 L90 0 L90 30 L78 30 L78 26 Q74 30 70 26 L70 30 L50 30 L50 18 L54 18 Q50 14 54 10 Z" opacity="0.4" />
      </g>

      {/* ── Git branch lines — top-left ── */}
      <g transform="translate(20, 30)" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4">
        <circle cx="0" cy="0" r="3.5" />
        <line x1="0" y1="3.5" x2="0" y2="25" />
        <circle cx="0" cy="28.5" r="3.5" />
        {/* Branch */}
        <path d="M0 8 Q10 8 18 0" />
        <circle cx="20" cy="-2" r="3" strokeWidth="1.1" />
        <line x1="0" y1="32" x2="0" y2="50" />
        <circle cx="0" cy="53.5" r="3.5" />
        {/* Merge */}
        <path d="M20 1 Q20 30 0 42" strokeWidth="1" />
      </g>

      {/* ── Floating sparkles / stars ── */}
      <g stroke="currentColor" strokeWidth="1" opacity="0.35">
        {/* Star top-right */}
        <g transform="translate(230, 25)">
          <line x1="0" y1="-6" x2="0" y2="6" />
          <line x1="-6" y1="0" x2="6" y2="0" />
          <line x1="-4" y1="-4" x2="4" y2="4" />
          <line x1="4" y1="-4" x2="-4" y2="4" />
        </g>
        {/* Star mid */}
        <g transform="translate(105, 145)">
          <line x1="0" y1="-4" x2="0" y2="4" />
          <line x1="-4" y1="0" x2="4" y2="0" />
        </g>
        {/* Star bottom */}
        <g transform="translate(130, 320)">
          <line x1="0" y1="-5" x2="0" y2="5" />
          <line x1="-5" y1="0" x2="5" y2="0" />
          <line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" />
          <line x1="3.5" y1="-3.5" x2="-3.5" y2="3.5" />
        </g>
      </g>

      {/* ── Decorative dots ── */}
      <circle cx="240" cy="160" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="248" cy="172" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="140" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="245" cy="310" r="1.8" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="105" r="1.5" fill="currentColor" opacity="0.1" />

      {/* ── Arrow / launch trail ── */}
      <path
        d="M130 100 Q135 115 130 130 Q125 145 130 155"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.2"
      />
    </svg>
  );
}

function MobileCarouselNav() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
      <Button
        variant="outline"
        size="icon"
        className="size-9 rounded-full touch-manipulation"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ChevronLeft className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="size-9 rounded-full touch-manipulation"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref: introRef, isVisible: introVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="projects"
      className="relative w-full px-4 py-20 font-sans text-[0.7rem] leading-[200%] text-foreground min-[351px]:text-[0.8rem] sm:text-[0.9rem]"
    >
      {/* Intro */}
      <div
        ref={introRef}
        className={cn(
          "mx-auto flex max-w-5xl flex-col items-center transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "sm:flex-row sm:items-start sm:justify-center",
          "px-2 min-[351px]:px-4 sm:mx-[5rem] xl:mx-auto",
          introVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Doodle — below text on mobile, left side on sm+ */}
        <ProjectsDoodle className="order-2 mt-6 h-[8rem] w-auto text-foreground sm:order-none sm:mt-0 sm:h-[15rem]" />
        <div className="order-1 text-center sm:order-none sm:ml-4 sm:text-left xl:ml-[5rem]">
          <span className="text-[1rem] font-light min-[351px]:text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem]">MY PROJECTS</span>
          <p className="mt-2 font-heading font-semibold">
            Here is a collection of my recent work — each project is a solution built to solve real-world problems. Click on a project to see more details.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={cardsRef}
        className={cn(
          "mx-auto mt-[5rem] max-w-5xl transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          cardsVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-[16rem] min-[351px]:max-w-[18rem] sm:max-w-[40rem] lg:max-w-[58rem] xl:max-w-5xl"
        >
          <CarouselContent className="-ml-4">
            {PROJECTS.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 sm:basis-1/2 xl:basis-1/3"
              >
                <div className="flex items-center justify-center">
                  <ProjectCard project={project} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop: side arrows, hidden on mobile */}
          <CarouselPrevious className="hidden lg:-left-10 lg:flex" />
          <CarouselNext className="hidden lg:-right-10 lg:flex" />

          {/* Mobile: centered arrows below carousel */}
          <MobileCarouselNav />
        </Carousel>
      </div>
    </section>
  );
}
