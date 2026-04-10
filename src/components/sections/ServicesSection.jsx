import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Globe,
  Smartphone,
  Palette,
  Zap,
  Server,
  ShoppingCart,
} from "lucide-react";
import { SERVICES } from "@/constants/content";

const ICON_MAP = {
  Globe,
  Smartphone,
  Palette,
  Zap,
  Server,
  ShoppingCart,
};

function ServiceCard({ service, index }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const Icon = ICON_MAP[service.icon];

  return (
    <div
      ref={ref}
      className={cn(
        "group flex flex-col items-center rounded-xl border border-border bg-background p-8 text-center",
        "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
        "hover:scale-[1.03] hover:shadow-lg hover:border-foreground/20",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      )}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {Icon && (
        <Icon
          className="mb-4 size-10 text-foreground transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
      )}
      <h3 className="mb-2 font-heading text-[0.95rem] font-semibold tracking-wide text-foreground sm:text-[1.05rem]">
        {service.title}
      </h3>
      <p className="font-sans text-[0.78rem] font-light leading-relaxed text-muted-foreground sm:text-[0.85rem]">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden border-t border-b border-border pb-20 font-sans"
    >
      <h1
        ref={titleRef}
        className={cn(
          "mt-[5rem] text-center text-[1rem] font-light text-foreground transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          "min-[351px]:text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem]",
          titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}
      >
        MY SERVICES
      </h1>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
