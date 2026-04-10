import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ABOUT, SITE } from "@/constants/content";
import troyAvatar from "@/assets/images/troypic2.jpg";

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex w-full items-center justify-center border-b border-border px-4 py-20 lg:min-h-screen"
    >
      <div
        className={cn(
          "mx-auto font-heading font-semibold text-foreground",
          "w-full max-w-[15rem] text-[0.8rem] leading-[180%]",
          "min-[351px]:max-w-[18rem]",
          "sm:max-w-[30rem] sm:leading-[180%]",
          "lg:max-w-[45rem] lg:text-[0.9rem] lg:leading-[200%]",
          "xl:max-w-[50rem]",
          "transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {/* Avatar — original: border-radius 50%, height 10rem */}
        <div className="mb-6 flex justify-center">
          <Avatar className="size-40 border-0">
            <AvatarImage src={troyAvatar} alt={SITE.name} className="rounded-full object-cover object-top" />
            <AvatarFallback className="text-2xl font-bold">
              {SITE.initials}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Bio — text-align: left in original */}
        <p className="whitespace-pre-line text-left">
          {ABOUT.bio}
        </p>

        <p className="mt-4 text-left text-muted-foreground">
          {ABOUT.note}
        </p>

        {/* Name/info — text-align: right, Montserrat 1.5rem */}
        <div className="mt-8 text-right">
          <p className="font-heading text-[1.5rem] font-normal">{SITE.name}</p>
          <p className="text-[0.8rem] text-muted-foreground">{SITE.email}</p>
          <p className="text-[0.8rem] text-muted-foreground">{SITE.location}</p>
        </div>
      </div>
    </section>
  );
}
