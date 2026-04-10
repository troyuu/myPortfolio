import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Code, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

/** Normalize image prop — always returns an array */
function useImages(image) {
  return Array.isArray(image) ? image : [image];
}

/** Auto-advancing slideshow index (2s interval) */
function useSlideshow(images, active) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || images.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [active, images.length]);

  // Reset on close
  useEffect(() => {
    if (!active) setIndex(0);
  }, [active]);

  return index;
}

export default function ProjectCard({ project }) {
  const [showDetail, setShowDetail] = useState(false);
  const images = useImages(project.image);
  const modalIndex = useSlideshow(images, showDetail);
  const thumbSrc = images[0];

  return (
    <>
      {/* Project thumbnail — first image only, click opens modal */}
      <div
        className="group flex w-full cursor-pointer flex-col items-center"
        onClick={() => setShowDetail(true)}
      >
        <div className="relative flex h-[18rem] w-full items-center justify-center overflow-hidden rounded-lg border border-[#e4e4e4] sm:h-[20rem]">
          <img
            src={thumbSrc}
            alt={project.title}
            className="z-10 h-full w-full object-cover transition-transform duration-[0.6s] ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 z-[11] bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
          <span className="absolute z-[12] flex size-[5rem] items-center justify-center rounded-full bg-card font-heading text-[1.2rem] font-bold text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:size-[7rem] sm:text-[1.5rem]">
            View
          </span>
        </div>
        <p className="mt-3 text-center font-semibold">{project.title}</p>
      </div>

      {/* Detail modal — portaled to body to escape carousel overflow */}
      {showDetail && createPortal(
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center font-sans font-semibold"
          onClick={() => setShowDetail(false)}
        >
          <div className="absolute inset-0 bg-black/50" />
          <Card
            className={cn(
              "relative z-10 mx-4 w-full gap-0 rounded-[0.5rem] bg-card p-0",
              "max-w-[90vw] sm:max-w-[30rem] lg:max-w-[50rem]"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader className="relative p-0">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 z-10 font-sans text-foreground"
                onClick={() => setShowDetail(false)}
              >
                <X className="size-5" />
              </Button>
              <div className="relative w-full overflow-hidden rounded-t-[0.5rem]">
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={project.title}
                    className={cn(
                      "w-full transition-opacity duration-700 ease-in-out",
                      i === 0 ? "relative" : "absolute inset-0",
                      i === modalIndex ? "opacity-100" : "opacity-0"
                    )}
                  />
                ))}
              </div>
              <h2 className="px-6 pt-4 text-center text-[smaller] font-semibold uppercase tracking-wide sm:text-[medium] lg:text-[large]">
                {project.title}
              </h2>
            </CardHeader>
            <CardContent className="px-4 py-4 sm:px-6">
              <p className="text-left text-[0.6rem] leading-[200%] text-foreground min-[351px]:text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem]">
                {project.description}
              </p>
              {project.techstack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techstack.split(", ").map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-[0.6rem] font-normal sm:text-[0.7rem]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex gap-4 px-4 pb-6 sm:px-6">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-foreground no-underline transition-opacity duration-[0.6s] hover:cursor-pointer hover:opacity-80"
                >
                  <Code className="size-4" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground no-underline transition-opacity duration-[0.6s] hover:cursor-pointer hover:opacity-80"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              )}
            </CardFooter>
          </Card>
        </div>,
        document.body
      )}
    </>
  );
}
