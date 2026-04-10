import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function BackToTop() {
  const { visible, scrollToTop } = useScrollToTop();

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-[1000] transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollToTop}
        className="text-foreground hover:text-muted-foreground"
      >
        <ChevronUp className="size-8" />
      </Button>
    </div>
  );
}
