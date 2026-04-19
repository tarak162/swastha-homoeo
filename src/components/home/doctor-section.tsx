import Image from "next/image";

export function DoctorSection() {
  return (
    <section id="doctor" className="scroll-mt-24 border-b border-border/40 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Doctor
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,280px),1fr] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-[220px] lg:mx-0">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-sm">
              <Image
                src="/swastha/female-doc.png"
                alt="Dr. S. Dhanalakshmi"
                fill
                className="object-cover object-top"
                sizes="220px"
              />
            </div>
            <div className="mt-4 text-center lg:text-left">
              <p className="font-heading text-lg font-semibold text-foreground">S Dhanalakshmi</p>
              <p className="text-sm text-muted-foreground">M.D (Homoeo)</p>
            </div>
          </div>
          <div className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              Dr. S. Dhanalakshmi completed her BHMS (Bachelor of Homeopathic Medicine and Surgery) from
              Maharaja Institute of Medical Sciences, Vizianagaram and her M.D. from Dr. Gururaju
              Government Homoeopathic Medical College, Gudivada.
            </p>
            <p className="mt-4">
              She provides holistic treatment to her patients and takes care of their complete wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
