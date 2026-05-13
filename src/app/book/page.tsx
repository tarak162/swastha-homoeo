import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book Appointment | Swastha Homoeopathy Online Consultation",
  description:
    "Book your online homoeopathy consultation with Dr. S. Dhanalakshmi at Swastha Homoeopathy Hyderabad. Choose a slot and start personalised treatment online.",
};

export default function BookPage() {
  return <BookPageClient />;
}
