import Link from "next/link";

import { siteConfig } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Healing Stories", href: "/healing-stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Book", href: "/book" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.addressLines.join(", ")}
              <br />
              <a className="font-medium text-primary hover:underline" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phone}
              </a>
              <br />
              <a
                className="font-medium text-primary hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Hours
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.hours}</p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
              Explore
            </p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link className="text-muted-foreground hover:text-foreground hover:underline" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
