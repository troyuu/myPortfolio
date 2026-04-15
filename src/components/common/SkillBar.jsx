import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiTailwindcss,
  SiSequelize,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiPostman,
  SiN8N,
  SiAirtable,
  SiShopify,
  SiFigma,
} from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILL_ICONS = {
  "JavaScript":        SiJavascript,
  "TypeScript":        SiTypescript,
  "Python":            SiPython,
  "HTML & CSS":        SiHtml5,
  "React":             SiReact,
  "React Native":      SiReact,
  "Next.js":           SiNextdotjs,
  "Node.js":           SiNodedotjs,
  "Express.js":        SiExpress,
  "Django":            SiDjango,
  "Tailwind CSS":      SiTailwindcss,
  "Sequelize":         SiSequelize,
  "PostgreSQL":        SiPostgresql,
  "MongoDB":           SiMongodb,
  "Docker":            SiDocker,
  "shadcn/ui":         SiShadcnui,
  "GitHub / Git":      SiGithub,
  "Postman":           SiPostman,
  "n8n":               SiN8N,
  "Airtable":          SiAirtable,
  "Shopify":           SiShopify,
  "Figma":             SiFigma,
};

export default function SkillBar({ name }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const Icon = SKILL_ICONS[name] || SiJavascript;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-3 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      )}
    >
      <Icon className="size-4 shrink-0 text-foreground sm:size-5 lg:size-6" />
      <span className="text-[0.6rem] font-light text-foreground min-[351px]:text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem]">
        {name}
      </span>
    </div>
  );
}
