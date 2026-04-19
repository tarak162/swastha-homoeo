import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-muted/20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Contact
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-4 py-3">
              <MapPin className="size-4 text-primary" aria-hidden />
              <span className="text-sm font-medium">Our location</span>
            </div>
            <iframe
              title="Swastha Homoeopathy on Google Maps"
              src={siteConfig.mapEmbedUrl}
              className="aspect-[4/3] min-h-[280px] w-full border-0 lg:min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    className="mt-1 text-sm text-primary hover:underline"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    className="mt-1 text-sm text-primary hover:underline"
                    href={`tel:${siteConfig.phoneTel}`}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Address: </span>
              {siteConfig.addressLines.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
