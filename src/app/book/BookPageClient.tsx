"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  AlertCircle,
  Clock3,
  HeartPulse,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type BookingType = {
  id: "new-patient" | "follow-up" | "urgent";
  title: string;
  duration: string;
  description: string;
  icon: LucideIcon;
};

const bookingTypes: BookingType[] = [
  {
    id: "new-patient",
    title: "New Patient Consultation",
    duration: "60 mins",
    description:
      "Comprehensive first-time consultation with complete case history and guidance.",
    icon: Stethoscope,
  },
  {
    id: "follow-up",
    title: "Follow-up Consultation",
    duration: "15 mins",
    description:
      "Review progress, refine treatment, and continue your personalized care plan.",
    icon: HeartPulse,
  },
  {
    id: "urgent",
    title: "Urgent Consultation",
    duration: "15 mins",
    description:
      "Priority slot for immediate concerns requiring quick medical attention.",
    icon: ShieldAlert,
  },
];

function CalSkeleton() {
  return (
    <div className="w-full min-h-[650px] space-y-4 px-6 py-10">
      <div className="h-4 w-40 animate-pulse rounded bg-muted" />
      <div className="h-4 w-full animate-pulse rounded bg-muted" />
      <div className="h-4 w-[85%] animate-pulse rounded bg-muted" />
      <div className="h-4 w-[70%] animate-pulse rounded bg-muted" />
      <div className="mt-6 grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-10 animate-pulse rounded bg-muted" />
        ))}
      </div>
    </div>
  );
}

function CalEmbed({ calLink }: { calLink: string }) {
  const [ready, setReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setReady(false);

    void (async () => {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#16a34a" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      timerRef.current = setTimeout(() => setReady(true), 300);
    })();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [calLink]);

  return (
    <div className="relative w-full min-h-[650px]">
      {!ready && (
        <div className="absolute inset-0 z-10 bg-background">
          <CalSkeleton />
        </div>
      )}

      <Cal
        calLink={calLink}
        style={{
          width: "100%",
          minHeight: "650px",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

export default function BookPageClient() {
  const [selectedType, setSelectedType] = useState<BookingType["id"] | null>(null);

  const selectedBooking = useMemo(
    () => bookingTypes.find((item) => item.id === selectedType) ?? null,
    [selectedType]
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Book an Appointment
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Choose a consultation type and pick a convenient slot.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bookingTypes.map((item) => {
          const Icon = item.icon;
          const active = selectedType === item.id;

          return (
            <Card
              key={item.id}
              className={cn(
                "border-border/60 transition-all duration-200",
                active && "border-primary/60 bg-primary/5 shadow-md ring-1 ring-primary/30"
              )}
            >
              <CardHeader>
                <div className="mb-1 inline-flex size-10 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-1.5 text-sm">
                  <Clock3 className="size-4" aria-hidden />
                  {item.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <Button
                  className="mt-5 w-full"
                  variant={active ? "default" : "outline"}
                  onClick={() => setSelectedType(item.id)}
                >
                  {active ? "Selected" : "Book Now"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-8">
        {!selectedBooking ? (
          <div className="flex items-center gap-2 rounded-xl border border-dashed border-border/70 bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
            <AlertCircle className="size-4 shrink-0" aria-hidden />
            Select a consultation type to load available slots.
          </div>
        ) : (
          <Card className="w-full overflow-hidden border-border/60">
            <CardHeader className="border-b border-border/60">
              <CardTitle className="text-xl">{selectedBooking.title}</CardTitle>
              <CardDescription>
                Showing live availability for {selectedBooking.duration.toLowerCase()} appointments.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <CalEmbed key={selectedBooking.id} calLink={`swasthahomoeo/${selectedBooking.id}`} />
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
