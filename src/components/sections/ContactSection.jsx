import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ContactForm from "@/components/common/ContactForm";
import { CONTACT, SITE } from "@/constants/content";

export default function ContactSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.15 });
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-8"
    >
      {/* Heading */}
      <div
        ref={leftRef}
        className={cn(
          "transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          leftVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        )}
      >
        <h1 className="text-center font-heading text-[1.5rem] font-normal text-foreground sm:text-[2rem] lg:text-[2.5rem]">
          {CONTACT.heading}
        </h1>
      </div>

      {/* Two-column layout */}
      <div className="mt-12 flex flex-col gap-12 xl:flex-row xl:gap-16">
        {/* Left — info */}
        <div
          className={cn(
            "flex w-full flex-col xl:w-1/2",
            "transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
            leftVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <p className="font-sans text-[0.7rem] font-normal leading-[200%] text-foreground min-[376px]:text-[0.8rem] sm:text-[0.9rem]">
            {CONTACT.intro}
          </p>
          <p className="mt-6 whitespace-pre-line font-sans text-[0.7rem] font-normal leading-[200%] text-foreground min-[376px]:text-[0.8rem] sm:text-[0.9rem]">
            {CONTACT.body}
          </p>

          {/* Name, phone, socials — bottom of left column */}
          <div className="mt-8 flex items-end justify-between">
            <div>
              <p className="font-heading text-[0.9rem] font-normal text-foreground">{SITE.name}</p>
              <p className="mt-1 font-sans text-[0.8rem] font-normal text-muted-foreground">{SITE.phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/troyuu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-foreground"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/troy-labajo-b0b763388/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-[#0077b5]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div
          ref={rightRef}
          className={cn(
            "flex w-full items-start justify-center font-sans xl:w-1/2 xl:items-center",
            "transition-all duration-700 delay-200 ease-in-out",
            rightVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          )}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
