import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/lib/testimonials";

export const metadata = {
  title: "Healing Stories | Swastha Homoeopathy Hyderabad",
  description:
    "Read patient testimonials and healing stories from Swastha Homoeopathy’s online homeopathy clinic in Hyderabad.",
};

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Swastha+Homoeopathy/@17.483062,78.3043223,17z/data=!4m8!3m7!1s0x3bcb9319dffcbda1:0x193160cf557089dc!8m2!3d17.4830569!4d78.3068972!9m1!1b1!16s%2Fg%2F11vb5d04hk?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D";

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

      <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-border/60 pt-10 text-center">
        <h2 className="font-heading text-xl font-semibold text-foreground">
          Want to read more stories?
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          We are proud to have helped many patients find lasting relief. You can read all of our reviews or share your own experience on Google Maps.
        </p>
        <Button asChild className="mt-2">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="size-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
