import Image from "next/image";

export function DoctorSection() {
  return (
    <section id="doctor" className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Doctor
        </h2>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-start md:gap-10 lg:gap-12">
          <div className="mx-auto w-full max-w-[180px] shrink-0 md:mx-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-sm">
              <Image
                src="/swastha/female-doc.png"
                alt="Dr. S. Dhanalakshmi"
                fill
                className="object-cover object-top"
                sizes="180px"
                loading="lazy"
                decoding="async"
                quality={80}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-heading text-lg font-semibold text-foreground">S Dhanalakshmi</p>
              <p className="text-sm text-muted-foreground">M.D (Homoeo)</p>
            </div>
          </div>
          <div className="self-start pt-1 text-sm leading-relaxed text-muted-foreground sm:text-base md:flex-1">
            <p>
              Dr. S. Dhanalakshmi completed her BHMS (Bachelor of Homeopathic Medicine and Surgery) from
              Maharaja Institute of Medical Sciences, Vizianagaram and her M.D. from Dr. Gururaju
              Government Homoeopathic Medical College, Gudivada.
            </p>
            <p className="mt-4">
              She brings over 12 years of clinical experience in homeopathic care, treating patients
              across respiratory, digestive, skin, and chronic lifestyle-related concerns with a
              personalized approach.
            </p>
            <p className="mt-4">
              Her consultations focus on understanding each patient in depth, including physical symptoms,
              emotional well-being, and long-term health goals, so treatment plans can be tailored to the
              individual rather than just the condition.
            </p>
            <p className="mt-4">
              Known for her compassionate and attentive care, she supports patients through every stage of
              recovery and preventive wellness, helping families build lasting health with safe, gentle
              homeopathic remedies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
