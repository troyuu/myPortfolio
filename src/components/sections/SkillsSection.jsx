import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import SkillBar from "@/components/common/SkillBar";
import {
  TECHNICAL_SKILLS,
  CODE_SNIPPET,
} from "@/constants/content";

// VS Code-style syntax tokens
const CODE_TOKENS = [
  { text: "const", type: "keyword" },
  { text: " ", type: "plain" },
  { text: "myTechnicalSkills", type: "variable" },
  { text: " = ", type: "plain" },
  { text: "[", type: "bracket" },
  { text: "\n  ", type: "plain" },
  { text: "JavaScript", type: "string" }, { text: ", ", type: "plain" },
  { text: "TypeScript", type: "string" }, { text: ", ", type: "plain" },
  { text: "Python", type: "string" }, { text: ",\n  ", type: "plain" },
  { text: "HTML & CSS", type: "string" }, { text: ", ", type: "plain" },
  { text: "React", type: "string" }, { text: ", ", type: "plain" },
  { text: "React Native", type: "string" }, { text: ", ", type: "plain" },
  { text: "Next.js", type: "string" }, { text: ",\n  ", type: "plain" },
  { text: "Node.js", type: "string" }, { text: ", ", type: "plain" },
  { text: "Express.js", type: "string" }, { text: ", ", type: "plain" },
  { text: "Django", type: "string" }, { text: ", ", type: "plain" },
  { text: "Tailwind CSS", type: "string" }, { text: ",\n  ", type: "plain" },
  { text: "Sequelize", type: "string" }, { text: ", ", type: "plain" },
  { text: "PostgreSQL", type: "string" }, { text: ", ", type: "plain" },
  { text: "MongoDB", type: "string" }, { text: ",\n  ", type: "plain" },
  { text: "Docker", type: "string" }, { text: ", ", type: "plain" },
  { text: "shadcn/ui", type: "string" }, { text: ", ", type: "plain" },
  { text: "GitHub", type: "string" }, { text: ", ", type: "plain" },
  { text: "Git", type: "string" }, { text: ", ", type: "plain" },
  { text: "Postman", type: "string" }, { text: ",\n  ", type: "plain" },
  { text: "n8n", type: "string" }, { text: ", ", type: "plain" },
  { text: "Airtable", type: "string" }, { text: ", ", type: "plain" },
  { text: "Shopify", type: "string" }, { text: " ", type: "plain" },
  { text: "]", type: "bracket" },
  { text: ";", type: "plain" },
];

const TOKEN_CLASSES = {
  keyword: "text-[#0000ff] dark:text-[#569cd6]",
  variable: "text-[#001080] dark:text-[#9cdcfe]",
  bracket: "text-[#0431fa] dark:text-[#ffd700]",
  string: "text-[#a31515] dark:text-[#ce9178]",
  plain: "text-[#383838] dark:text-[#d4d4d4]",
};

function HighlightedCode({ charCount }) {
  let rendered = 0;
  return (
    <>
      {CODE_TOKENS.map((token, i) => {
        if (rendered >= charCount) return null;
        const visible = token.text.slice(0, charCount - rendered);
        rendered += token.text.length;
        return (
          <span key={i} className={TOKEN_CLASSES[token.type]}>
            {visible}
          </span>
        );
      })}
    </>
  );
}

/* ── SVG doodle art — coding-themed hand-drawn illustrations ── */
function SkillsDoodle({ className }) {
  return (
    <svg
      viewBox="0 0 520 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Laptop ── */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Screen */}
        <rect x="130" y="140" width="260" height="170" rx="10" />
        {/* Screen bezel glow */}
        <rect x="142" y="152" width="236" height="146" rx="4" strokeWidth="0.8" opacity="0.3" />
        {/* Code lines on screen */}
        <line x1="160" y1="180" x2="220" y2="180" strokeWidth="2.5" opacity="0.6" />
        <line x1="170" y1="200" x2="260" y2="200" strokeWidth="2.5" opacity="0.45" />
        <line x1="170" y1="220" x2="230" y2="220" strokeWidth="2.5" opacity="0.6" />
        <line x1="160" y1="240" x2="280" y2="240" strokeWidth="2.5" opacity="0.35" />
        <line x1="170" y1="260" x2="240" y2="260" strokeWidth="2.5" opacity="0.5" />
        {/* Cursor blink on screen */}
        <rect x="245" y="255" width="2" height="12" fill="currentColor" opacity="0.5" />
        {/* Keyboard base */}
        <path d="M110 310 Q115 310 130 310 L390 310 Q405 310 410 310 L420 340 Q422 348 410 348 L110 348 Q98 348 100 340 Z" />
        {/* Keyboard keys (row of small dashes) */}
        <line x1="150" y1="322" x2="170" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="180" y1="322" x2="200" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="210" y1="322" x2="230" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="240" y1="322" x2="260" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="270" y1="322" x2="290" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="300" y1="322" x2="320" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="330" y1="322" x2="350" y2="322" strokeWidth="1.5" opacity="0.3" />
        <line x1="175" y1="336" x2="310" y2="336" strokeWidth="1.5" opacity="0.3" />
        {/* Trackpad */}
        <rect x="230" y="350" width="60" height="0.5" opacity="0.15" />
      </g>

      {/* ── </> tag — top-right ── */}
      <g transform="translate(400, 80) rotate(12)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <text
          x="0" y="0"
          fontSize="32"
          fontFamily="monospace"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.7"
        >
          &lt;/&gt;
        </text>
      </g>

      {/* ── { } braces — top-left ── */}
      <g transform="translate(50, 110) rotate(-8)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <text
          x="0" y="0"
          fontSize="38"
          fontFamily="monospace"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.6"
        >
          {"{ }"}
        </text>
      </g>

      {/* ── Coffee cup — bottom-left ── */}
      <g transform="translate(42, 360)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="16" width="44" height="48" rx="6" />
        <path d="M44 24 Q62 24 62 40 Q62 56 44 56" />
        {/* Saucer */}
        <ellipse cx="22" cy="68" rx="30" ry="5" strokeWidth="1.2" opacity="0.4" />
        {/* Steam curves */}
        <path d="M12 12 Q16 2 12 -8" opacity="0.5" fill="none" />
        <path d="M22 10 Q26 -2 22 -12" opacity="0.4" fill="none" />
        <path d="M32 12 Q36 2 32 -8" opacity="0.5" fill="none" />
      </g>

      {/* ── Lightbulb — top center-left ── */}
      <g transform="translate(140, 50)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65">
        {/* Bulb shape */}
        <path d="M0 -20 Q-20 -20 -20 0 Q-20 15 -8 22 L-8 32 L8 32 L8 22 Q20 15 20 0 Q20 -20 0 -20 Z" fill="none" />
        {/* Base lines */}
        <line x1="-6" y1="36" x2="6" y2="36" />
        <line x1="-4" y1="40" x2="4" y2="40" />
        {/* Filament */}
        <path d="M-3 10 Q0 2 3 10" strokeWidth="1" />
        {/* Rays */}
        <line x1="0" y1="-28" x2="0" y2="-36" strokeWidth="1" opacity="0.5" />
        <line x1="-22" y1="-14" x2="-30" y2="-18" strokeWidth="1" opacity="0.5" />
        <line x1="22" y1="-14" x2="30" y2="-18" strokeWidth="1" opacity="0.5" />
        <line x1="-26" y1="6" x2="-33" y2="8" strokeWidth="1" opacity="0.4" />
        <line x1="26" y1="6" x2="33" y2="8" strokeWidth="1" opacity="0.4" />
      </g>

      {/* ── Gear — bottom-right ── */}
      <g transform="translate(440, 380)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55">
        <circle cx="0" cy="0" r="22" />
        <circle cx="0" cy="0" r="9" />
        {/* Teeth — 8 spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1={Math.cos((angle * Math.PI) / 180) * 22}
            y1={Math.sin((angle * Math.PI) / 180) * 22}
            x2={Math.cos((angle * Math.PI) / 180) * 30}
            y2={Math.sin((angle * Math.PI) / 180) * 30}
            strokeWidth="3"
          />
        ))}
      </g>

      {/* ── Small gear — near big gear ── */}
      <g transform="translate(475, 340)" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4">
        <circle cx="0" cy="0" r="12" />
        <circle cx="0" cy="0" r="5" />
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <line
            key={angle}
            x1={Math.cos((angle * Math.PI) / 180) * 12}
            y1={Math.sin((angle * Math.PI) / 180) * 12}
            x2={Math.cos((angle * Math.PI) / 180) * 17}
            y2={Math.sin((angle * Math.PI) / 180) * 17}
            strokeWidth="2.5"
          />
        ))}
      </g>

      {/* ── Terminal prompt — mid-right ── */}
      <g transform="translate(420, 200)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5">
        <text
          x="0" y="0"
          fontSize="20"
          fontFamily="monospace"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {">"} _
        </text>
      </g>

      {/* ── Database cylinder — left-middle ── */}
      <g transform="translate(30, 230)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45">
        <ellipse cx="24" cy="0" rx="24" ry="8" />
        <line x1="0" y1="0" x2="0" y2="40" />
        <line x1="48" y1="0" x2="48" y2="40" />
        <ellipse cx="24" cy="40" rx="24" ry="8" />
        {/* Middle ring */}
        <path d="M0 20 Q24 30 48 20" strokeWidth="1" opacity="0.6" />
      </g>

      {/* ── Sparkles / stars scattered ── */}
      {/* Star 1 — top */}
      <g transform="translate(300, 55)" stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <line x1="0" y1="-8" x2="0" y2="8" />
        <line x1="-8" y1="0" x2="8" y2="0" />
        <line x1="-5" y1="-5" x2="5" y2="5" />
        <line x1="5" y1="-5" x2="-5" y2="5" />
      </g>
      {/* Star 2 — mid-left */}
      <g transform="translate(95, 180)" stroke="currentColor" strokeWidth="1" opacity="0.35">
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-6" y1="0" x2="6" y2="0" />
        <line x1="-4" y1="-4" x2="4" y2="4" />
        <line x1="4" y1="-4" x2="-4" y2="4" />
      </g>
      {/* Star 3 — right */}
      <g transform="translate(485, 260)" stroke="currentColor" strokeWidth="1" opacity="0.4">
        <line x1="0" y1="-5" x2="0" y2="5" />
        <line x1="-5" y1="0" x2="5" y2="0" />
      </g>
      {/* Star 4 — bottom */}
      <g transform="translate(200, 440)" stroke="currentColor" strokeWidth="1" opacity="0.3">
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-6" y1="0" x2="6" y2="0" />
        <line x1="-4" y1="-4" x2="4" y2="4" />
        <line x1="4" y1="-4" x2="-4" y2="4" />
      </g>

      {/* ── Dots decoration ── */}
      <circle cx="350" cy="420" r="2.5" fill="currentColor" opacity="0.2" />
      <circle cx="365" cy="430" r="1.8" fill="currentColor" opacity="0.15" />
      <circle cx="340" cy="435" r="2" fill="currentColor" opacity="0.18" />
      <circle cx="110" cy="320" r="2" fill="currentColor" opacity="0.15" />
      <circle cx="100" cy="305" r="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="420" cy="130" r="2" fill="currentColor" opacity="0.18" />
      <circle cx="440" cy="145" r="1.5" fill="currentColor" opacity="0.14" />

      {/* ── Wavy connector line — bottom ── */}
      <path
        d="M80 450 Q150 435 200 445 Q280 460 360 440 Q420 425 480 440"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SkillsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: introRef, isVisible: introVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: codeRef, isVisible: codeVisible } = useScrollReveal({ threshold: 0.5 });
  const { ref: stackRef, isVisible: stackVisible } = useScrollReveal({ threshold: 0.15 });

  const { displayedText: typedCode } = useTypingEffect(CODE_SNIPPET, codeVisible, 50);

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-t border-border pb-20 font-sans"
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className={cn(
          "mt-[5rem] text-center text-[1rem] font-light text-foreground transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "min-[351px]:text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem]",
          titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        MY SKILLS
      </h1>

      {/* Quote + Code — stacked on mobile/tablet, 2 columns on xl+ */}
      <div
        ref={introRef}
        className={cn(
          "mx-auto mt-10 flex max-w-5xl flex-col gap-8 px-6",
          "xl:flex-row xl:items-center xl:gap-12",
          "transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          introVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Quote — left column on xl */}
        <div className="mx-auto max-w-2xl text-center xl:mx-0 xl:w-1/2 xl:text-left">
          <p className="text-[0.8rem] min-[351px]:text-[0.85rem] sm:text-[1rem] xl:text-[1.15rem]">
            <span className="text-[1.5rem] font-bold sm:text-[1.8rem] xl:text-[2rem]">
              &quot;
            </span>{" "}
            Most of my skills, I learned from my senior developer and classmates in college.
            <br />
            Let me tell you what I can do.{" "}
            <span className="text-[1.5rem] font-bold sm:text-[1.8rem] xl:text-[2rem]">
              &quot;
            </span>
          </p>
        </div>

        {/* Code box — right column on xl */}
        <div className="mx-auto w-full max-w-2xl xl:mx-0 xl:w-1/2">
          <div
            ref={codeRef}
            className={cn(
              "relative w-full overflow-hidden rounded-lg border text-left",
              "border-[#e0e0e0] bg-[#ffffff] dark:border-[#3c3c3c] dark:bg-[#1e1e1e]"
            )}
          >
            {/* Title bar */}
            <div className="flex items-center gap-1.5 border-b border-[#e0e0e0] px-3 py-1.5 dark:border-[#3c3c3c]">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[0.45rem] text-[#6e7681] dark:text-[#858585] sm:text-[0.55rem]">
                skills.js
              </span>
            </div>
            {/* Code area */}
            <pre className="min-h-[3.5em] whitespace-pre-wrap break-words p-4 font-mono text-[0.5rem] leading-relaxed min-[351px]:text-[0.6rem] sm:text-[0.7rem] lg:text-[0.75rem]">
              <code>
                <HighlightedCode charCount={typedCode.length} />
              </code>
              {codeVisible && (
                <span className="inline-block h-[1em] w-[1.5px] translate-y-[2px] animate-[blink_0.6s_step-end_infinite] bg-[#000] dark:bg-[#d4d4d4]" />
              )}
            </pre>
          </div>
        </div>
      </div>

      {/* Doodle + Tech Stack — side-by-side on desktop, stacked on mobile */}
      <div
        ref={stackRef}
        className={cn(
          "mx-auto mt-20 flex max-w-5xl flex-col items-center gap-14 px-6",
          "lg:flex-row lg:items-start lg:gap-24",
          "transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          stackVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        {/* Doodle art */}
        <div className="flex w-full max-w-[18rem] shrink-0 items-center justify-center sm:max-w-[22rem] lg:w-[45%] lg:max-w-none">
          <SkillsDoodle className="w-full text-foreground" />
        </div>

        {/* Tech stack grid */}
        <div className="flex w-full flex-col items-center lg:w-[55%]">
          <h2 className="mb-6 text-center text-[0.9rem] font-light sm:text-[1.2rem] lg:text-[1.4rem]">
            TECH STACK
          </h2>
          <div className="grid w-fit grid-cols-2 gap-x-10 gap-y-4 sm:gap-x-14 lg:gap-x-16">
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
