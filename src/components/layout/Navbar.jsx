// Cloned layout — custom content applied
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE } from "@/constants/content";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const smoothScroll = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(target, {
        duration: 1.8,
        easing: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      });
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-[100] flex h-10 w-full items-center justify-between bg-background px-4 text-foreground transition-colors duration-500 md:px-8">
      {/* Logo text — links to home */}
      <a
        href="#home"
        onClick={(e) => smoothScroll(e, "#home")}
        className="cursor-pointer no-underline"
      >
        <h1 className="font-heading text-[0.8rem] font-bold tracking-[0.1rem] text-foreground sm:text-[1rem] lg:text-[1.2rem] lg:tracking-[0.2rem]">
          {SITE.name}
        </h1>
      </a>

      {/* Desktop nav */}
      <ul className="hidden items-center lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href} className="mx-[1rem]">
            <a
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className={cn(
                "font-sans text-[0.8rem] font-normal tracking-[0.1rem] text-foreground",
                "cursor-pointer transition-colors duration-300 hover:text-muted-foreground"
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile nav */}
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="text-foreground" />}>
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="z-[1100] flex h-screen flex-col bg-background px-8 pt-12"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>

            {/* Header row — name + close */}
            <div
              className="flex items-center justify-between"
              style={{
                animation: open ? "menuFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
                opacity: 0,
              }}
            >
              <a
                href="#home"
                onClick={(e) => { setOpen(false); smoothScroll(e, "#home"); }}
                className="cursor-pointer no-underline"
              >
                <span className="font-heading text-[0.8rem] font-bold tracking-[0.1rem] text-foreground">
                  {SITE.name}
                </span>
              </a>
              <SheetClose render={<Button variant="ghost" size="icon" className="text-foreground" />}>
                <X className="size-5" />
              </SheetClose>
            </div>

            {/* Thin separator — expands from center */}
            <div
              className="mt-6 h-px w-full origin-center bg-border"
              style={{
                animation: open ? "menuSeparator 0.6s cubic-bezier(0.16,1,0.3,1) 0.15s forwards" : "none",
                transform: "scaleX(0)",
              }}
            />

            {/* Nav links — staggered fade-up entrance */}
            <nav className="mt-10 flex flex-1 flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { setOpen(false); smoothScroll(e, link.href); }}
                  className={cn(
                    "font-heading text-[1.4rem] font-normal tracking-[0.4rem] text-foreground",
                    "hover:tracking-[0.6rem] hover:text-muted-foreground",
                    "transition-[letter-spacing,color] duration-500 ease-out"
                  )}
                  style={{
                    animation: open
                      ? `menuFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.07}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pb-12" />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
