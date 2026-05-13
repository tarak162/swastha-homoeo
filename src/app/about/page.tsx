import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";

export const metadata: Metadata = {
  title: "About Swastha Homoeopathy | Holistic Clinic in Hyderabad",
  description:
    "Learn about Swastha Homoeopathy — a premier holistic clinic in BHEL Hyderabad dedicated to natural, personalised healing.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <AboutSection />
    </div>
  );
}
