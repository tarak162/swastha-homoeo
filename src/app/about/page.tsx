import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";

export const metadata: Metadata = {
  title: "About Swastha Homoeopathy | Holistic Clinic in Hyderabad",
  description:
    "Learn about Swastha Homoeopathy — a premier holistic clinic in BHEL Hyderabad dedicated to natural, personalised healing.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
        Swastha Homoeo, also known as Swastha Homoeopathy, is a trusted homoeo clinic in BHEL Hyderabad.
      </p>
      <AboutSection />
    </div>
  );
}
