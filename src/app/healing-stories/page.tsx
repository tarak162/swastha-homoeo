import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

export const metadata = {
  title: "Healing Stories | Swastha Homoeopathy Hyderabad",
  description:
    "Read patient testimonials and healing stories from Swastha Homoeopathy’s online homeopathy clinic in Hyderabad.",
};

export default function HealingStoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Healing Stories
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Real stories from our patients who found relief and healing through homeopathy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
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
    </div>
  );
}
