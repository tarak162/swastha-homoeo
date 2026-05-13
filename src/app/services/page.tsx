import type { Metadata } from "next";
import { ServicesSection } from "@/components/home/services-section";

export const metadata: Metadata = {
  title: "Homoeopathy Treatments | Swastha Homoeopathy Hyderabad",
  description:
    "Explore personalised homoeopathic treatments for skin, digestion, respiratory, skeletal and chronic conditions at Swastha Homoeopathy Hyderabad.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <ServicesSection />
    </div>
  );
}
