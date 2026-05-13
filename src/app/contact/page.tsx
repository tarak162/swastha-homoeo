import type { Metadata } from "next";
import { ContactSection } from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "Contact Swastha Homoeopathy | BHEL Hyderabad",
  description:
    "Get in touch with Swastha Homoeopathy at BHEL Hyderabad. Call +91 8328171337 or book an appointment online.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <ContactSection />
    </div>
  );
}
