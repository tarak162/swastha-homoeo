import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site";

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-muted/20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Homeopathic doctors aim to treat a wide range of diseases and health conditions. Homeopathy
            works on the principle of individualized treatment: your specific symptoms and constitution
            guide care. It focuses on the totality of symptoms and supports the body&apos;s self-healing
            mechanisms.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="overflow-hidden border-border/60 shadow-sm">
              <CardHeader className="pb-2">
                <div className="relative mx-auto size-[120px]">
                  <Image
                    src={s.image}
                    alt=""
                    width={120}
                    height={120}
                    className="object-contain"
                    sizes="120px"
                    loading="lazy"
                    decoding="async"
                    quality={75}
                  />
                </div>
                <CardTitle className="text-center text-base sm:text-lg">{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {s.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
