import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

export function HealingStoriesSection() {
    const topTestimonials = testimonials.slice(0, 3);

    return (
        <section id="healing-stories" className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        Healing Stories
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                        Discover how our patients have found relief and healing through personalized homeopathic care.
                        These stories reflect the transformative power of natural medicine.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topTestimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                                <CardDescription className="flex items-center gap-2">
                                    {testimonial.rating && (
                                        <span className="text-yellow-500">
                                            {"★".repeat(parseInt(testimonial.rating))}
                                        </span>
                                    )}
                                    {testimonial.date}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground">"{testimonial.review}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button asChild size="lg">
                        <Link href="/healing-stories">View all healing stories</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}