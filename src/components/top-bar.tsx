import { Clock, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function TopBar() {
  return (
    <div className="border-b border-border/40 bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-1 px-4 py-2 text-xs sm:flex-row sm:text-sm sm:px-6">
        <p className="flex items-center gap-1.5 text-center sm:text-left">
          <Clock className="size-3.5 shrink-0 opacity-90" aria-hidden />
          <span>{siteConfig.hours}</span>
        </p>
        <a
          className="flex items-center gap-1.5 font-medium hover:underline"
          href={`tel:${siteConfig.phoneTel}`}
        >
          <Phone className="size-3.5 shrink-0 opacity-90" aria-hidden />
          Call {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
