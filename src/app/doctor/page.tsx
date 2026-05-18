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
      <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
        Dr. Dhanalakshmi at Swastha Homoeo provides personalised homeopathic and homoeopathic care for patients across Hyderabad.
      </p>
      <DoctorSection />
    </div>
  );
}
