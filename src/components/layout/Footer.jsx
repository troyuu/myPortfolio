import { SITE } from "@/constants/content";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background font-sans text-foreground">
      {/* Main row — full width like navbar */}
      <div className="flex flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row md:px-8">
        {/* Brand — left */}
        <div className="text-center sm:text-left">
          <a href="#home" className="font-heading text-[0.9rem] font-bold tracking-[0.15rem]">
            {SITE.name}
          </a>
          <p className="text-[0.68rem] font-light text-muted-foreground">
            {SITE.role}
          </p>
        </div>

        {/* Contact — right */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-1.5 text-[0.68rem] font-light text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <Mail className="size-3 shrink-0" strokeWidth={1.5} />
            {SITE.email}
          </a>
          <span className="flex items-center gap-1.5 text-[0.68rem] font-light text-muted-foreground">
            <Phone className="size-3 shrink-0" strokeWidth={1.5} />
            {SITE.phone}
          </span>
          <span className="flex items-center gap-1.5 text-[0.68rem] font-light text-muted-foreground">
            <MapPin className="size-3 shrink-0" strokeWidth={1.5} />
            {SITE.location}
          </span>
        </div>
      </div>

      {/* Copyright — subtle bottom line */}
      <div className="border-t border-border px-4 py-3 md:px-8">
        <p className="text-center text-[0.6rem] font-light text-muted-foreground">
          &copy; {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
