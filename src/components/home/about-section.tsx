import Image from "next/image";

import { siteConfig } from "@/lib/site";

const points = [
  "M.D. qualified homoeopathic doctor with extensive training",
  "12+ years of clinical experience in treating diverse health conditions",
  "Personalised treatment plans tailored to each patient's unique needs",
  "Custom remedy kits prepared specifically for your condition",
  "Holistic care addressing physical, emotional, and mental wellbeing",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Why Choose Swastha?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            At {siteConfig.name}, we combine clinical expertise with compassionate care to deliver real, lasting results. Our holistic approach treats the root causes of illness, not just symptoms, helping you achieve optimal health and wellbeing.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:mx-0">
            <Image
              src="/swastha/swastha-logo-2.png"
              alt="Swastha Homoeopathy"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) min(100vw, 28rem), 50vw"
              loading="lazy"
              decoding="async"
              quality={80}
            />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              What Sets Us Apart
            </h3>
            <p className="mt-2 text-sm italic text-muted-foreground">
              Our commitment to your health is reflected in every aspect of our care
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
