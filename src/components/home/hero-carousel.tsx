"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const n = heroSlides.length;

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n) % n);
    },
    [n]
  );

  useEffect(() => {
    const t = window.setInterval(() => go(1), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [go]);

  const slide = heroSlides[index];

  return (
    <section id="hero" className="relative min-h-[min(85vh,720px)] overflow-hidden">
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "z-0 opacity-100" : "z-0 opacity-0 pointer-events-none"
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20"
            aria-hidden
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-[min(85vh,720px)] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <div className="max-w-xl rounded-2xl border border-border/40 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {slide.title}
          </h1>
          {slide.bullets && slide.bullets.length > 0 ? (
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {slide.bullets.map((b) => (
                <li key={b.label}>
                  <span className="font-semibold text-foreground">{b.label}:</span> {b.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{slide.body}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href={slide.cta.href}>{slide.cta.label}</Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              )}
              aria-label={`Slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:left-auto sm:right-6 sm:translate-x-0">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full bg-background/90 shadow-md"
          onClick={() => go(-1)}
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-5" />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="rounded-full bg-background/90 shadow-md"
          onClick={() => go(1)}
          aria-label="Next slide"
        >
          <ChevronRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}
