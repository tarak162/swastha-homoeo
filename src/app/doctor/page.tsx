import type { Metadata } from "next";
import { DoctorSection } from "@/components/home/doctor-section";

export const metadata: Metadata = {
  title: "Dr. S. Dhanalakshmi | M.D. Homoeopathy | Swastha Hyderabad",
  description:
    "Meet Dr. S. Dhanalakshmi, M.D. Homoeopathy with 12+ years of clinical experience at Swastha Homoeopathy, BHEL Hyderabad.",
};

export default function DoctorPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <DoctorSection />
    </div>
  );
}
