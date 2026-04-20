"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site";
import { preloadImageUrls } from "@/lib/preload-images";
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
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const t = window.setInterval(() => go(1), INTERVAL_MS);
    return () => window.clearInterval(t);
  }, [go]);

  useEffect(() => {
    const other = heroSlides.filter((_, i) => i !== 0).map((s) => s.image);
    return preloadImageUrls(other);
  }, []);

  const slide = heroSlides[index];
  const isFirstSlide = index === 0;

  return (
    <section id="hero" className="relative h-[520px] overflow-hidden sm:h-[560px]">
      <div className="absolute inset-0">
        <Image
          key={slide.id}
          src={slide.image}
          alt=""
          fill
          priority={isFirstSlide}
          fetchPriority={isFirstSlide ? "high" : "low"}
          sizes="100vw"
          quality={80}
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 sm:py-14">
        <div className="flex h-[360px] max-w-2xl flex-col rounded-2xl border border-border/40 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:h-[390px] sm:max-w-3xl sm:p-8">
          <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {slide.title}
          </h1>
          <div className="mt-4 flex-1">
            {slide.bullets && slide.bullets.length > 0 ? (
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {slide.bullets.map((b) => (
                  <li key={b.label}>
                    <span className="font-semibold text-foreground">{b.label}:</span> {b.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{slide.body}</p>
            )}
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
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
                "h-2 rounded-full transition-all motion-reduce:transition-none",
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
