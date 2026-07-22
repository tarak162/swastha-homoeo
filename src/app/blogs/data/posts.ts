export interface BlogPost {
  slug: string;
  title: string;
  category: "Respiratory & Sinus" | "Women's Health & PCOS" | "Skin & Hair" | "Digestive Care" | "General Wellness";
  summary: string;
  content: string; // HTML string containing formatted article body
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  doctorsTip: string;
  relatedSlugs: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "natural-management-of-pcos-hormonal-imbalance",
    title: "Natural Management of PCOS & Hormonal Imbalance",
    category: "Women's Health & PCOS",
    summary: "Understand how constitutional homoeopathy addresses the root causes of PCOS, irregular cycles, and hormonal imbalance naturally without synthetic hormones.",
    readTime: "6 min read",
    date: "July 18, 2026",
    author: {
      name: "Dr. S. Dhanalakshmi",
      role: "M.D. (Homoeopathy)",
      avatar: "/swastha/female-doc.png",
    },
    coverImage: "/swastha/services/woman-health.png",
    doctorsTip: "Avoid processed sugars and seed oils. Incorporate moderate strength training and yoga. In homoeopathy, we treat the patient, not just the disease; hence, maintaining a daily symptom diary of your cycle helps in identifying the exact constitutional remedy.",
    relatedSlugs: [
      "holistic-approach-to-digestive-health-acid-reflux",
      "homoeopathic-care-for-eczema-skin-allergies"
    ],
    content: `
      <p>Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine disorders affecting women of reproductive age today. While conventional treatments often rely on oral contraceptive pills or synthetic hormones to force regular periods, homoeopathy offers a holistic, gentle alternative that aims to restore the body's natural endocrine balance.</p>
      
      <h2>What is PCOS?</h2>
      <p>PCOS is characterized by hormonal imbalances that prevent ovaries from releasing eggs regularly. This leads to the formation of small, benign fluid-filled sacs (cysts) in the ovaries. Common symptoms include irregular periods, excess hair growth (hirsutism), severe acne, weight gain, and insulin resistance.</p>
      
      <h3>The Root Cause: An Endocrine Disbalance</h3>
      <p>From a homoeopathic perspective, PCOS is not merely a localized disease of the ovaries. It is an expression of an underlying constitutional imbalance. Factors such as chronic stress, genetic predisposition, dietary habits, and emotional health play a critical role in triggering endocrine dysfunction.</p>
      
      <h2>The Homoeopathic Approach</h2>
      <p>Homoeopathy uses natural, highly diluted substances to stimulate the body's self-healing mechanisms. Instead of suppressing symptoms, constitutional homoeopathy seeks to:</p>
      <ul>
        <li><strong>Restore Hormonal Harmony:</strong> Regulate the Hypothalamic-Pituitary-Ovarian (HPO) axis naturally.</li>
        <li><strong>Correct Insulin Sensitivity:</strong> Address weight gain and metabolic slow-down from within.</li>
        <li><strong>Resolve Ovarian Cysts:</strong> Stimulate the body to absorb fluid-filled cysts over time.</li>
        <li><strong>Minimize Side Effects:</strong> Completely free from synthetic hormones, ensuring no long-term dependency.</li>
      </ul>

      <h2>Common Constitutional Remedies</h2>
      <p>In homoeopathy, remedies are customized for each individual based on physical, mental, and emotional characteristics:</p>
      <ul>
        <li><strong>Pulsatilla:</strong> Often indicated for mild, gentle temperaments with delayed or scanty menstruation.</li>
        <li><strong>Sepia:</strong> Suited for women experiencing fatigue, irritability, and pelvic bearing-down sensations.</li>
        <li><strong>Lycopodium:</strong> Useful when there is co-existing digestive issues, bloating, and intense cravings for sweets.</li>
      </ul>
    `
  },
  {
    slug: "constitutional-homoeopathy-for-chronic-sinusitis",
    title: "Constitutional Homoeopathy for Chronic Sinusitis",
    category: "Respiratory & Sinus",
    summary: "Tired of nasal sprays and temporary allergy pills? Discover how constitutional homoeopathy helps reduce susceptibility to sinus infections permanently.",
    readTime: "5 min read",
    date: "July 12, 2026",
    author: {
      name: "Dr. S. Dhanalakshmi",
      role: "M.D. (Homoeopathy)",
      avatar: "/swastha/female-doc.png",
    },
    coverImage: "/swastha/services/respiratory.png",
    doctorsTip: "Steam inhalation with plain water helps thin nasal secretions. Avoid sudden temperature changes (like stepping out of an air-conditioned room into hot sun), which acts as a major trigger for sensitive airways.",
    relatedSlugs: [
      "safe-homoeopathic-solutions-for-pediatric-immunity",
      "natural-management-of-pcos-hormonal-imbalance"
    ],
    content: `
      <p>Chronic sinusitis affects millions globally, causing persistent nasal blockage, head pressure, post-nasal drip, and recurrent allergies. While nasal decongestants offer quick relief, their over-use often leads to rebound congestion. Homoeopathy offers a constitutional approach that strengthens the respiratory immune barrier.</p>
      
      <h2>Understanding Chronic Sinusitis</h2>
      <p>Sinusitis refers to the inflammation of the mucous membranes lining the paranasal sinuses. When these passages get blocked due to allergies or anatomical issues, fluid builds up, inviting bacterial or viral infections. Chronic sinusitis lasts for 12 weeks or more despite treatment.</p>
      
      <h3>Why Do Allergies Trigger Sinusitis?</h3>
      <p>An overreactive immune system treats harmless particles like dust, pollen, or pet dander as threats, releasing histamines. This causes swelling of the nasal mucosa, blocking the narrow sinus drainage channels (ostia).</p>
      
      <h2>How Homoeopathy Breaks the Cycle</h2>
      <p>Rather than acting as simple antihistamines, homoeopathic remedies work by modulating the immune response. The goal is to reduce your hypersensitivity to common environmental triggers over time.</p>
      <ul>
        <li><strong>Reduces Mucosal Swelling:</strong> Promotes natural drainage without drying the nasal passages.</li>
        <li><strong>Alleviates Facial Pain:</strong> Targets the throbbing headache and pressure around the eyes and forehead.</li>
        <li><strong>Reduces Allergen Sensitivity:</strong> Lowers the frequency and severity of cold attacks.</li>
      </ul>

      <h2>Key Homoeopathic Remedies for Sinus Relief</h2>
      <p>Recommending remedies depends strictly on the nature of discharge and location of pain:</p>
      <ul>
        <li><strong>Silicea:</strong> Excellent for individuals highly sensitive to cold air, experiencing chronic blockages.</li>
        <li><strong>Kali Bichromicum:</strong> Indicated for thick, stringy, yellowish nasal discharge with root-of-nose pain.</li>
        <li><strong>Spigelia:</strong> Preferred when the headache is concentrated over the left eye and forehead.</li>
      </ul>
    `
  },
  {
    slug: "safe-homoeopathic-solutions-for-pediatric-immunity",
    title: "Safe Homoeopathic Solutions for Pediatric Immunity",
    category: "General Wellness",
    summary: "Learn how to safely build your child's natural defense system against seasonal infections, colic, and childhood asthma using gentle remedies.",
    readTime: "4 min read",
    date: "July 05, 2026",
    author: {
      name: "Dr. S. Dhanalakshmi",
      role: "M.D. (Homoeopathy)",
      avatar: "/swastha/female-doc.png",
    },
    coverImage: "/swastha/services/children-health.png",
    doctorsTip: "Encourage outdoor play and a diet rich in seasonal fruits. Avoid giving children self-prescribed immunity boosters. A child's immune system matures through mild exposures, and homoeopathy aids this development gently.",
    relatedSlugs: [
      "constitutional-homoeopathy-for-chronic-sinusitis",
      "homoeopathic-care-for-eczema-skin-allergies"
    ],
    content: `
      <p>Parents often struggle with children catching frequent colds, coughs, tonsillitis, or stomach infections as soon as the weather changes. Frequent courses of antibiotics can disrupt the child's gut microbiome and lead to resistance. Homoeopathy offers a safe, sweet-pill alternative that kids love and that effectively builds natural immunity.</p>
      
      <h2>The Developing Immune System</h2>
      <p>A child's immune system is constantly adapting and learning. Frequent viral infections are common, but when a child takes weeks to recover or falls ill every single month, it indicates an under-active or overwhelmed immune defense.</p>
      
      <h3>Why Homoeopathy is Ideal for Children</h3>
      <p>Homoeopathic pills are sweet, easy to administer, and lack any toxic side effects. They do not override the child's natural immune response; instead, they assist and strengthen it.</p>
      
      <h2>Tackling Common Childhood Ailments</h2>
      <p>Homoeopathy has dedicated protocols for a wide range of pediatric health concerns:</p>
      <ul>
        <li><strong>Recurrent Colds & Tonsillitis:</strong> Remedies like <em>Baryta Carb</em> and <em>Calcarea Carb</em> help children who are prone to swollen glands and catch colds at the slightest draft.</li>
        <li><strong>Infantile Colic & Teething Trouble:</strong> Remedies like <em>Chamomilla</em> work wonders for teething trouble, irritability, and abdominal gas.</li>
        <li><strong>Pediatric Asthma & Allergies:</strong> Constitutional treatment helps reduce bronchial hyper-responsiveness.</li>
      </ul>

      <h2>A Note on Safety & Administration</h2>
      <p>Homoeopathic dilutions are prepared through a process of potentization, making them extremely safe and non-toxic. They do not cause drowsiness or interfere with other medications your child might be taking.</p>
    `
  },
  {
    slug: "holistic-approach-to-digestive-health-acid-reflux",
    title: "Holistic Approach to Digestive Health & Acid Reflux",
    category: "Digestive Care",
    summary: "Discover how homoeopathy treats the root cause of IBS, chronic acidity, and bloating rather than just suppressing stomach acid temporarily.",
    readTime: "5 min read",
    date: "June 28, 2026",
    author: {
      name: "Dr. S. Dhanalakshmi",
      role: "M.D. (Homoeopathy)",
      avatar: "/swastha/female-doc.png",
    },
    coverImage: "/swastha/services/digestive-1.png",
    doctorsTip: "Avoid drinking water immediately after meals as it dilutes gastric juices. Chew your food slowly. Since the gut is closely linked to your emotional state (the gut-brain axis), stress management is key in resolving IBS.",
    relatedSlugs: [
      "natural-management-of-pcos-hormonal-imbalance",
      "constitutional-homoeopathy-for-chronic-sinusitis"
    ],
    content: `
      <p>Acidity, bloating, and Irritable Bowel Syndrome (IBS) have become lifestyle epidemics. While antacids provide quick relief by neutralizing stomach acid, long-term use can impair protein digestion and lead to nutrient malabsorption. Homoeopathy offers a holistic solution by regulating digestion and addressing gut-brain sensitivity.</p>
      
      <h2>The Gut-Brain Connection in Digestion</h2>
      <p>Have you ever noticed your stomach acting up when you are anxious or stressed? The gut contains millions of nerve cells (the enteric nervous system) that communicate directly with the brain. This is why stress, anger, or sleep deprivation directly trigger bloating, spasms, and acid reflux.</p>
      
      <h3>Why Antacids Are Only a Band-Aid</h3>
      <p>Antacids block acid production, but acid is necessary to kill pathogens and break down food. Suppressing it long-term can lead to SIBO (Small Intestinal Bacterial Overgrowth), dysbiosis, and chronic indigestion.</p>
      
      <h2>How Homoeopathy Restores Digestive Function</h2>
      <p>Homoeopathic treatment focuses on restoring the natural muscle tone of the lower esophageal sphincter (LES) and balancing digestive secretions:</p>
      <ul>
        <li><strong>Improves Motility:</strong> Relieves constipation, spasms, and bloating naturally.</li>
        <li><strong>Reduces Hypersensitivity:</strong> Calms an overreactive gut lining in IBS patients.</li>
        <li><strong>Addresses Stress Triggers:</strong> Incorporates remedies that calm both the mind and the gut nerves.</li>
      </ul>

      <h2>Indicated Remedies for Digestive Care</h2>
      <ul>
        <li><strong>Nux Vomica:</strong> The premier remedy for sedentary individuals prone to acidity, gas, and a feeling of incomplete bowel movements, often triggered by spicy foods or stress.</li>
        <li><strong>Carbo Vegetabilis:</strong> Ideal for severe bloating, flatulence, and slow digestion where the upper abdomen feels full and tight.</li>
        <li><strong>Arsenicum Album:</strong> Indicated for burning pain in the stomach accompanied by restlessness and temporary relief from warm drinks.</li>
      </ul>
    `
  },
  {
    slug: "homoeopathic-care-for-eczema-skin-allergies",
    title: "Homoeopathic Care for Eczema & Skin Allergies",
    category: "Skin & Hair",
    summary: "Steroid creams only suppress skin conditions temporarily. Learn how homoeopathy heals eczema, hives, and psoriasis from the inside out.",
    readTime: "7 min read",
    date: "June 20, 2026",
    author: {
      name: "Dr. S. Dhanalakshmi",
      role: "M.D. (Homoeopathy)",
      avatar: "/swastha/female-doc.png",
    },
    coverImage: "/swastha/services/icon-skin-6.jpg",
    doctorsTip: "Apply pure coconut oil or shea butter to damp skin immediately after bathing to lock in moisture. Avoid hot water baths as they strip natural lipids, triggering eczema flare-ups.",
    relatedSlugs: [
      "natural-management-of-pcos-hormonal-imbalance",
      "safe-homoeopathic-solutions-for-pediatric-immunity"
    ],
    content: `
      <p>Skin conditions like eczema, psoriasis, and urticaria are external manifestations of internal inflammation. Applying topical steroid creams may clear the skin temporarily, but it often drives the inflammation deeper (sometimes manifesting as respiratory allergies or asthma later). Homoeopathy believes in curing skin allergies from within.</p>
      
      <h2>The Concept of 'Suppression' in Skin Care</h2>
      <p>In homoeopathic philosophy, the skin is the body's largest organ of elimination. When a skin eruption is suppressed with heavy chemical applications, the underlying disease force is forced to find another outlet, often moving to deeper organs. Healing must progress from inside out.</p>
      
      <h3>What Triggers Skin Allergies?</h3>
      <p>An over-reactive immune system, leaky gut, environmental allergens, dry weather, and high stress levels are the primary drivers of eczema and dermatitis flare-ups.</p>
      
      <h2>The Homoeopathic Healing Process</h2>
      <p>Homoeopathic treatment focuses on detoxifying the system, modulating the hyper-immune response, and strengthening the skin barrier:</p>
      <ul>
        <li><strong>Reduces Pruritus (Itching):</strong> Alleviates the intense, sleep-disrupting itching naturally.</li>
        <li><strong>Heals Eruptions:</strong> Promotes dry healing of weeping eczema and controls scaling in psoriasis.</li>
        <li><strong>Prevents Recurrence:</strong> Reduces the genetic and constitutional susceptibility to allergies.</li>
      </ul>

      <h2>Prominent Skin Remedies</h2>
      <ul>
        <li><strong>Graphites:</strong> Extremely useful for dry, rough skin with thick, sticky discharge from eczema cracks.</li>
        <li><strong>Sulphur:</strong> Often indicated for hot, itchy skin that worsens with washing and warmth.</li>
        <li><strong>Apis Mellifica:</strong> Excellent for hives or urticarial rashes that feel stinging, swollen, and are relieved by cold applications.</li>
      </ul>
    `
  }
];
