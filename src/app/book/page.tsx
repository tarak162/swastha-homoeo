import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Book an appointment",
  description: "Schedule a visit at Swastha Homoeopathy — coming soon.",
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-2xl">Book an appointment</CardTitle>
          <CardDescription>
            Online booking will live here — calendar integration, confirmation email, and reminders can
            be wired in next.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild>
            <Link href="/appointments">Manage appointments</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
