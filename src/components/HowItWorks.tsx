import Link from "next/link";
import { Calendar, Stethoscope, HeartPulse, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: "Book a Slot",
      description:
        "Choose a convenient time online. New patient, follow-up, or urgent — pick what suits you.",
    },
    {
      number: 2,
      icon: Stethoscope,
      title: "Consult the Doctor",
      description:
        "Meet Dr. Dhanalakshmi via Google Meet. Share your symptoms and health history in detail.",
    },
    {
      number: 3,
      icon: HeartPulse,
      title: "Begin Your Recovery",
      description:
        "Receive a personalised treatment plan and custom remedy kit tailored to your needs.",
    },
  ];

  return (
    <section className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Your Healing Journey
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Getting started with Swastha Homoeopathy is simple and stress-free
          </p>
        </div>

        <div className="mt-14">
          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connecting lines on desktop */}
            <div className="absolute top-20 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Arrow/Connector for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden my-2">
                      <ArrowRight className="size-5 text-primary/50 rotate-90" />
                    </div>
                  )}

                  {/* Step Card */}
                  <Card className="w-full relative">
                    {/* Number Badge */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center size-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>

                    <div className="pt-8 px-6 pb-6 text-center">
                      <Icon className="mx-auto size-10 text-primary mb-4" />
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link href="/book">Book Your First Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
