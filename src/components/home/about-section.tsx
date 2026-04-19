import Image from "next/image";

import { siteConfig } from "@/lib/site";

const points = [
  "A highly qualified professional with an M.D.",
  "Custom homeopathic remedy kits for patients to take home, tailored to their specific health needs.",
  "Your total healthcare will be taken care of.",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            About us
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {siteConfig.name} is a premier homeopathy clinic dedicated to providing holistic and natural
            healthcare solutions to our patients. Located in Hyderabad, we specialize in offering
            personalized homeopathic treatments that address a wide range of health conditions and
            promote overall well-being. With an experienced and compassionate homeopathic practitioner,
            we are committed to helping our patients achieve optimal health through safe, gentle, and
            effective homeopathic remedies.
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
              Uniqueness with SWASTHA
            </h3>
            <p className="mt-2 text-sm italic text-muted-foreground">
              Patients choose SWASTHA Homeopathy Clinic because
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
