import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Reviews",
  description: "Patient reviews and testimonials — coming soon.",
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Patient reviews</CardTitle>
          <CardDescription>
            This page will showcase customer reviews and testimonials. Content and a submission flow
            can be added when you are ready.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/book">Book an appointment</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
