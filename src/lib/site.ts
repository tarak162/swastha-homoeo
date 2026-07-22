export const siteConfig = {
  name: "Swastha Homoeopathy",
  shortName: "Swastha",
  description:
    "Holistic homeopathy clinic in Hyderabad — personalized care with safe, gentle remedies.",
  phone: "+91 8328171337",
  phoneTel: "+918328171337",
  email: "swasthahomoeopathy@gmail.com",
  addressLines: ["2189, Old MIG", "BHEL, Hyderabad"],
  hours: "Monday – Saturday, 10:30am – 1:00pm and 5:00pm – 8:00pm",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15222.047924280867!2d78.3068972!3d17.4830569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9319dffcbda1%3A0x193160cf557089dc!2sSwastha%20Homoeopathy!5e0!3m2!1sen!2sin!4v1694782726617!5m2!1sen!2sin",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctor", href: "/doctor" },
  { label: "Blogs", href: "/blogs" },
  { label: "Healing Stories", href: "/healing-stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type ServiceItem = {
  title: string;
  image: string;
  lines: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Respiratory conditions",
    image: "/swastha/services/respiratory.png",
    lines: [
      "Allergies and hay fever",
      "Asthma",
      "Bronchitis",
      "Sinusitis",
      "Coughs and colds",
    ],
  },
  {
    title: "Digestive disorders",
    image: "/swastha/services/digestive-1.png",
    lines: [
      "Irritable bowel syndrome (IBS)",
      "Gastritis",
      "Acid reflux",
      "Food intolerances",
      "Diarrhea and constipation",
    ],
  },
  {
    title: "Skin conditions",
    image: "/swastha/services/icon-skin-6.jpg",
    lines: ["Eczema", "Acne", "Psoriasis", "Dermatitis", "Urticaria (hives)"],
  },
  {
    title: "Musculoskeletal issues",
    image: "/swastha/services/skeletal.png",
    lines: [
      "Arthritis",
      "Rheumatism",
      "Back pain",
      "Joint pain",
      "Sports injuries",
    ],
  },
  {
    title: "Neurological disorders",
    image: "/swastha/services/nueral.png",
    lines: [
      "Migraines and headaches",
      "Neuralgia",
      "Sciatica",
      "Restless leg syndrome",
      "Sleep disorders",
    ],
  },
  {
    title: "Mental and emotional health",
    image: "/swastha/services/mental-health.png",
    lines: [
      "Anxiety disorders",
      "Depression",
      "Panic attacks",
      "Stress-related disorders",
      "Obsessive-compulsive disorder (OCD)",
    ],
  },
  {
    title: "Women's health",
    image: "/swastha/services/woman-health.png",
    lines: [
      "Menstrual disorders (e.g. irregular periods, PMS)",
      "Menopausal symptoms",
      "Pregnancy-related issues (e.g. morning sickness)",
      "Polycystic ovary syndrome (PCOS)",
    ],
  },
  {
    title: "Children's health",
    image: "/swastha/services/children-health.png",
    lines: [
      "Behavioral issues (e.g. ADHD, autism)",
      "Common childhood illnesses (e.g. colic, teething)",
      "Skin conditions (e.g. diaper rash)",
    ],
  },
  {
    title: "Immune system support",
    image: "/swastha/services/immune.png",
    lines: [
      "Boosting the immune system",
      "Allergy management",
      "Recurrent infections",
    ],
  },
  {
    title: "Urinary tract issues",
    image: "/swastha/services/Urinary-tract.png",
    lines: ["Urinary tract infections (UTIs)", "Kidney stones"],
  },
  {
    title: "Eye and ear issues",
    image: "/swastha/services/eye-ear.png",
    lines: ["Conjunctivitis (pink eye)", "Ear infections and earaches"],
  },
];

export type HeroSlide = {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  body: string;
  bullets?: { label: string; text: string }[];
  cta: { label: string; href: string };
  ctas?: { label: string; href: string }[];
};

export const heroSlides: HeroSlide[] = [
  {
    id: "welcome",
    image: "/swastha/slide/homeo-bg-2.jpeg",
    title: "Natural Healing. Lasting Results.",
    subtitle:
      "Experience the gentle power of homoeopathy — personalised remedies crafted for your unique constitution, treating the root cause, not just the symptoms.",
    body: "Available online via Google Meet and in-clinic.",
    ctas: [
      { label: "Book Appointment", href: "/book" },
      { label: "Learn More", href: "/about" },
    ],
    cta: { label: "Book Appointment", href: "/book" },
  },
  {
    id: "why",
    image: "/swastha/slide/homeo-bg-1.jpeg",
    title: "Why Swastha?",
    bullets: [
      {
        label: "Expertise",
        text: "Experienced practitioners with deep understanding of holistic medicine.",
      },
      {
        label: "Personalization",
        text: "Tailored treatment reflecting your physical, emotional, and mental needs.",
      },
      {
        label: "Holistic healing",
        text: "We focus on root causes and your body's innate healing capacity.",
      },
    ],
    body: "",
    cta: { label: "Services", href: "/services" },
  },
  {
    id: "about-homeo",
    image: "/swastha/slide/homeo-bg-3.jpeg",
    title: "About homoeopathy",
    body: `Homeopathy has a legacy dating back to the late 18th century when it was founded by Samuel Hahnemann. His work, "Organon of the Medical Art," laid the foundation for this holistic approach to healthcare. Over the years, homeopathy spread across Europe, North America, and other regions. People choose homeopathy for its holistic approach, individualized treatments, and emphasis on treating the whole person.`,
    cta: { label: "About us", href: "/about" },
  },
];
