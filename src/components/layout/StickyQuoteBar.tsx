import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function StickyQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.96)] px-4 py-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <p className="min-w-0 flex-1 truncate text-xs text-[var(--color-nord-light)] sm:text-sm">Need a project-fit battery architecture?</p>
        <Button href="/contact" aria-label="Request a custom quote">
          Request Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
