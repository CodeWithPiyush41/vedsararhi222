import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Tag, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type Article = {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  fullContent: string;
};

const articles: Article[] = [
  {
    title: "Importance of Griha Pravesh Puja — Why Blessing Your New Home Matters",
    excerpt: "Moving into a new home is one of life's most significant milestones. The Griha Pravesh Puja purifies energies, invites divine blessings, and ensures prosperity for all who reside there.",
    category: "Puja & Rituals",
    readTime: "6 min read",
    date: "December 10, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `Moving into a new home is one of life's most significant milestones. In Sanatan Dharma, a house is not merely a physical structure — it is a living space that absorbs and reflects energy. The Griha Pravesh Puja is not merely a tradition; it is a profound Vedic ritual designed to purify the energies of your new space, invite divine blessings, and ensure prosperity, health, and harmony for all who will reside there.

**What is Griha Pravesh?**

Griha Pravesh literally translates to "entering the home." According to Vastu Shastra and Vedic scriptures, every home accumulates energies from its environment, construction workers, materials, and the land upon which it stands. These energies can be positive or negative. The Griha Pravesh Puja systematically purifies these energies through sacred mantras, Havan (fire ritual), and the invocation of Vastu Devta — the deity presiding over the dwelling.

**The Three Types of Griha Pravesh**

The scriptures describe three types: Apoorva (entering a new home for the first time), Sapoorva (re-entering after an absence), and Dwandwah (entering after reconstruction. Each has its own rituals and significance.

**Key Rituals Performed**

The ceremony begins with Ganapati Puja to remove obstacles. This is followed by Vastu Shanti Havan — offerings into the sacred fire with specific herbs and ghee to pacify any negative energies in the space. The Navagraha Puja invokes the nine planetary deities for their blessings. The Kalash Sthapana (establishment of the sacred pot) consecrates the main entrance. Finally, the family steps into the home for the first time while specific Vedic mantras are chanted, often with the lady of the house carrying a pot of rice or a lamp.

**Choosing the Right Muhurat**

The timing of the Griha Pravesh is critically important. Pandit Ji consults the Hindu Panchang to determine an auspicious muhurat based on the tithi (lunar day), nakshatra (star), and the householder's janam kundali. Certain months, like Chaitra and Vaishakh, are traditionally favored. Avoid Ashada and Bhadrapada.

**Benefits**

A properly performed Griha Pravesh Puja clears negative energies, establishes positive Vastu in the home, and invokes the blessings of Lakshmi (prosperity), Ganesha (obstacle removal), and the ancestors. Families regularly report improved harmony, health, and abundance following the ceremony.

Contact VedSarathi to schedule your Griha Pravesh Puja with Pandit Ramgopal Ji in Kolkata or anywhere in India.`,
  },
  {
    title: "Hindu Wedding Rituals Explained — A Complete Guide to Vivah Sanskar",
    excerpt: "From Var Mala to Saptapadi, each ritual in a Hindu wedding carries deep spiritual significance. This guide explains every stage of a Vedic wedding and why performing it correctly matters.",
    category: "Vivah Sanskar",
    readTime: "10 min read",
    date: "November 25, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `The Hindu wedding ceremony — Vivah Sanskar — is one of the most elaborate and meaningful rituals in Sanatan Dharma. A Hindu wedding is not merely the union of two individuals; it is the union of two souls, two families, and two spiritual lineages. Every element of the ceremony — from the placement of the sacred fire to the seven vows — carries profound meaning.

**Var Mala (Jaimala)**

The ceremony begins with the exchange of flower garlands between the bride and groom, symbolizing mutual acceptance. This is a joyful, celebratory moment as both families welcome the union.

**Kanyadaan**

One of the most emotionally moving moments of any Hindu wedding, Kanyadaan is when the father gives his daughter's hand to the groom. The bride's hands are placed in the groom's, and sacred water is poured. This is considered one of the highest forms of "dan" (gifting) a father can perform in his lifetime.

**Vivah Homa**

A sacred fire — Agni — is kindled at the center of the ceremony. Agni is the divine witness to the marriage and the messenger to the gods. The couple makes offerings together into the fire, symbolizing their shared responsibilities.

**Saptapadi — The Seven Sacred Steps**

The heart of the Vivah Sanskar. The couple takes seven steps together around the sacred fire, each step representing a vow: food, strength, prosperity, happiness, progeny, health, and friendship. These seven vows bind the couple spiritually and are the moment at which, according to Hindu law, the marriage is complete.

**Sindoor Daan & Mangalsutra**

The groom applies sindoor (vermilion) in the parting of the bride's hair and ties the Mangalsutra — a sacred necklace — around her neck. Both are symbols of her status as a married woman and are deeply auspicious.

**Aashirvaad**

The ceremony concludes with blessings from all elders, priests, and family members. The couple seeks blessings by touching the feet of their parents and in-laws.

**Why Authenticity Matters**

A Vivah Sanskar performed with the correct mantras, proper Havan, and all sixteen steps blesses the couple for their entire married life. Many couples who opt for simplified ceremonies miss key elements whose absence can create subtle imbalances. Pandit Ramgopal Ji performs the complete Vivah Sanskar with full explanations in both Sanskrit and the local language so the couple and their families are fully engaged throughout.`,
  },
  {
    title: "Namkaran Sanskar Guide — The Sacred Art of Naming Your Child",
    excerpt: "In Sanatan Dharma, a child's name is a vibration that shapes identity and destiny. The Namkaran Sanskar selects the name through Vedic astrology and gives it with mantras and blessings.",
    category: "Samskara",
    readTime: "7 min read",
    date: "November 5, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `In Sanatan Dharma, a child's name is not merely a label — it is a vibration, an energy that travels with the child through their entire life. The Namkaran Sanskar is the sacred ceremony through which a name is selected according to Vedic astrology and formally given to the child with mantras, prayers, and blessings.

**When is Namkaran Performed?**

According to the scriptures, Namkaran is traditionally performed on the 11th day after birth, though it can be done up to the first year. The 11th day holds special significance as the mother is considered to have recovered sufficiently and the child has been fully named in the divine register.

**How is the Name Chosen?**

Pandit Ji begins by casting the child's horoscope (janam kundali) based on the exact time, date, and place of birth. The birth nakshatra (lunar mansion) determines the auspicious syllable (akshar) with which the name should begin. For example, a child born in Rohini nakshatra might receive a name starting with "O" or "V." The name should also be harmonious with the child's lagna (ascendant) and the family tradition.

**The Ceremony**

The Namkaran Puja begins with Ganapati Vandana. A horoscope is formally prepared. The family gathers and the priest whispers the chosen name into the child's right ear three times. The name is then announced publicly to the assembled family with joyful chanting. Offerings are made to the Navagraha for the child's health, intelligence, and long life.

**The Significance of the Name**

Vedic scholars teach that sound is sacred — "Shabda Brahman." The name we call a child repeatedly throughout their life becomes their most powerful mantra. A correctly chosen name, beginning with an auspicious syllable aligned with the child's nakshatra, creates a subtle positive resonance in their energy field throughout their life.

**Names to Avoid**

Names of deceased relatives (in some traditions), names with harsh or inauspicious meanings, names with excessive soft or sibilant sounds for boys, and names that are difficult to pronounce clearly should all be avoided. Pandit Ji provides guidance on all of these.

Contact VedSarathi to schedule a Namkaran Sanskar for your newborn with Pandit Ramgopal Ji.`,
  },
  {
    title: "Benefits of Havan — The Ancient Science Behind Sacred Fire Rituals",
    excerpt: "Havan is one of the oldest Vedic practices. Beyond its spiritual dimensions, modern research validates the air-purifying and healing properties of Havan smoke.",
    category: "Havan & Yagya",
    readTime: "8 min read",
    date: "October 18, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `Havan — the offering of ghee, herbs, and grains into a sacred fire — is one of the oldest Vedic practices, mentioned extensively in the Rigveda. The term comes from the Sanskrit root "hu" meaning "to offer." A Havan is not merely a ritual; it is an act of purification, prayer, and cosmic reciprocity.

**The Spiritual Significance**

In the Vedic worldview, Agni — fire — is not merely a physical element but a divine deity, the messenger between humans and the gods. When we offer into the fire with the correct mantras, those offerings reach the intended deities. The Rigveda states: "Agnir hotaa kavikratu, satyaschitrashravashtamah." Agni is the Hota (the one who receives offerings) who carries our prayers upward.

**Types of Havan**

The most commonly performed Havans include: Ganapati Havan (for removing obstacles), Navgrah Havan (for planetary peace), Mahamrityunjaya Havan (for health and longevity), Sudarshana Havan (for protection from negative energies), Lakshmi Havan (for prosperity), and Vastu Shanti Havan (for home purification).

**The Scientific Basis**

Modern research, particularly from Indian scientific institutions, has studied the properties of Havan smoke. The specific herbs used — including guggul, camphor, sandalwood, neem, and ashwagandha — release compounds with demonstrated antimicrobial properties. Studies have shown that Havan smoke significantly reduces airborne bacteria in enclosed spaces. The combination of ghee with herbs creates specific organic compounds that are beneficial to respiratory health when inhaled in small quantities.

**The Samagri (Materials)**

The quality of the Havan depends greatly on the purity of the samagri. Pandit Ji uses only certified organic samagri from trusted Vedic sources — pure cow ghee, unrefined grains, authentic herbs, and untreated wood.

**How Long Does a Havan Take?**

A simple Ganapati Havan takes about 45 minutes. A complete Navgrah Havan takes 2-3 hours. A full Yajna for special occasions can take an entire day.

Whether you wish to purify your new home, seek blessings for health, or mark a special occasion with divine presence, Pandit Ramgopal Ji performs all types of Havan across Kolkata and throughout India.`,
  },
  {
    title: "Satyanarayan Katha Significance — Understanding the Divine Story of Lord Vishnu",
    excerpt: "The Satyanarayan Katha is among the most beloved Hindu ceremonies. This article unpacks the five chapters, their moral teachings, and the correct method of performing this sacred ceremony.",
    category: "Katha",
    readTime: "9 min read",
    date: "September 30, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `The Satyanarayan Katha is among the most beloved Hindu religious ceremonies, performed at joyous occasions from housewarming to weddings, from business inaugurations to the birth of a child. But what is the actual significance of the Katha, and why does it hold such special power?

**Who is Satyanarayan?**

Satyanarayan is a form of Lord Vishnu — the preserver of the universe. "Satya" means truth, "Narayan" is another name for Vishnu. Satyanarayan is thus the Lord who embodies and upholds eternal truth. The Katha teaches that those who uphold truth and devotion are always protected and blessed.

**The Five Chapters (Adhyayas)**

The Satyanarayan Katha consists of five chapters, each containing a different story that illustrates the power and grace of Lord Satyanarayan:

1. **The First Adhyaya** — Narada Muni asks Lord Vishnu how ordinary humans can be liberated from suffering. Vishnu describes the Satyanarayan Vrat.

2. **The Second Adhyaya** — A poor Brahmin performs the Katha and is blessed with wealth and a son.

3. **The Third Adhyaya** — A merchant and woodcutter perform the Katha and receive blessings, but then neglect it. They suffer consequences, repent, and are restored.

4. **The Fourth Adhyaya** — King Angadha's story, showing that forgetting the Lord leads to suffering, but sincere repentance brings restoration.

5. **The Fifth Adhyaya** — A merchant delays offering the prasad. His wife and daughters suffer, he repents, and Lord Satyanarayan restores everything.

**The Central Teachings**

Each story teaches the same lesson: the Lord rewards sincere devotion and punishes those who make promises to God and then forget them. The Katha reinforces the importance of keeping one's word, remaining grateful, and maintaining regular worship.

**The Prasad**

The prasad of Satyanarayan Katha — made from bananas, milk, sugar, wheat flour, and ghee — is sacred and should not be refused. According to the fifth chapter, disrespecting the prasad brings misfortune.

Pandit Ramgopal Ji performs Satyanarayan Katha with full explanation of each chapter in both Sanskrit and Bengali/Hindi, ensuring all present are fully engaged in the divine story.`,
  },
  {
    title: "Vastu Tips for New Homes — Aligning Your Space with Vedic Principles",
    excerpt: "Vastu Shastra is the ancient science of architecture. Whether you are constructing a new home or moving into one, these Vedic tips will help you create a space aligned with positive energy.",
    category: "Vastu Shastra",
    readTime: "11 min read",
    date: "September 12, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `Vastu Shastra is the ancient Indian science of architecture and spatial arrangement, rooted in the belief that the physical environment profoundly influences well-being, relationships, and prosperity. The word "Vastu" comes from the Sanskrit root meaning "dwelling" or "building." Shastra means "science" or "sacred teaching."

**The Five Elements**

Vastu is based on balancing the five elements — Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu), and Space (Akasha) — within the home. When these elements are in balance, the home becomes a place of health, harmony, and abundance.

**Key Vastu Guidelines for New Homes**

**Main Entrance:** The main door should ideally face East or North — directions associated with positive energy. The entrance should be well-lit, clean, and free of obstacles. Avoid having a main door facing South or Southwest.

**Kitchen:** The kitchen represents the fire element and should be in the Southeast corner of the home (the direction of Agni). The cook should face East while cooking. Never place the kitchen in the Northeast or North, as these are water directions.

**Master Bedroom:** Should ideally be in the Southwest corner. The head of the bed should point South or West. Avoid placing a mirror directly facing the bed.

**Pooja Room (Prayer Room):** The most auspicious corner for the prayer room is the Northeast (Ishaan kona). This corner should be kept especially clean and peaceful. The deity images should face East or West.

**Children's Room:** Best suited to the West or Northwest. Studying while facing East or North improves concentration.

**Toilets & Bathrooms:** Best placed in the Northwest or West. Never in the Northeast — this is considered highly inauspicious as it blocks the flow of divine energy.

**Colors and Remedies**

If your home has Vastu doshas (imbalances) due to construction that cannot be changed, remedies exist: specific colors for walls, placement of crystals, Vastu yantras, and appropriate plants. Pandit Ji provides personalized Vastu consultations for any home configuration.

**Vastu for Businesses**

The same principles apply to offices and commercial spaces. The owner should sit facing East or North. The cash box should be in the South and should open toward the North. The entrance should invite customers with good lighting and welcoming energy.

For a detailed Vastu consultation or a Vastu Shanti Havan, contact Pandit Ramgopal Ji.`,
  },
  {
    title: "Sanatan Dharma Teachings — Understanding the Eternal Way of Life",
    excerpt: "Sanatan Dharma encompasses far more than 'Hinduism' — it is an eternal system of spiritual truths. Pandit Ji shares the foundational teachings of Dharma, Karma, and Moksha.",
    category: "Teachings",
    readTime: "12 min read",
    date: "August 20, 2024",
    author: "Pandit Ramgopal Ji",
    fullContent: `Sanatan Dharma is often translated as "Hinduism" but the term encompasses something far more profound — an eternal, universal system of spiritual truths and righteous living that transcends any single religion, nation, or era.

**What Does "Sanatan Dharma" Mean?**

"Sanatan" means eternal, beginningless, and endless. "Dharma" is one of the most complex Sanskrit words — it encompasses righteousness, duty, cosmic order, virtue, and the natural law that upholds the universe. Sanatan Dharma is therefore "the eternal righteous order" — a way of living in harmony with the divine laws of existence.

**The Four Purusharthas — Life's Goals**

Sanatan Dharma teaches that human life has four legitimate aims:

1. **Dharma** — Righteous living according to one's duty and the cosmic order
2. **Artha** — Prosperity, wealth, and material well-being, acquired through ethical means
3. **Kama** — Legitimate desires, pleasure, and love
4. **Moksha** — Liberation — freedom from the cycle of birth and death

A life well-lived balances all four, with Dharma as the foundation that guides the pursuit of the other three.

**Karma — The Law of Cause and Effect**

Perhaps the most widely misunderstood concept in Vedic philosophy. Karma is not fate or punishment — it is the cosmic law of cause and effect. Every action (karma) creates a corresponding reaction. This operates across multiple lifetimes. Understanding karma empowers us: we are not victims of fate; we are co-creators of our destiny through every thought, word, and deed.

**The Atman and Brahman**

The deepest teaching of Sanatan Dharma is the relationship between Atman (the individual soul) and Brahman (the universal consciousness). The Upanishads famously declare "Aham Brahmasmi" — "I am Brahman." At the deepest level, the individual soul and the universal divine are not separate. Moksha is the direct realization of this truth.

**Practical Dharma Today**

Living Dharma in the modern world means: speaking truth even when it is difficult, performing one's duties with full dedication, treating all living beings with compassion (Ahimsa), maintaining personal purity through regular worship and sadhana, supporting one's family and community, and honoring the divine in all its forms.

**Daily Practices**

Sanatan Dharma offers specific daily practices (nitya karma) that maintain one's connection to the divine: morning prayers, Surya Namaskar, recitation of mantras, offering water to the sun, maintaining a clean and sacred home environment, and regular participation in community worship.

Pandit Ramgopal Ji offers spiritual guidance consultations to help devotees understand these teachings and apply them to their daily lives. Contact VedSarathi to schedule a session.`,
  },
];

const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

function renderFullContent(content: string) {
  const paragraphs = content.split("\n\n");
  return paragraphs.map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**") && para.split("\n").length === 1) {
      return <h3 key={i} className="text-xl font-serif font-bold text-foreground mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
    }
    const processedPara = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return (
      <p
        key={i}
        className="text-muted-foreground leading-loose mb-4 text-base"
        dangerouslySetInnerHTML={{ __html: processedPara }}
      />
    );
  });
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  if (openArticle) {
    return (
      <div className="w-full">
        <div className="bg-muted/30 border-b border-border py-6">
          <div className="container px-4">
            <button
              onClick={() => setOpenArticle(null)}
              className="flex items-center gap-2 text-primary hover:underline font-medium mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </button>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
              <span className="bg-primary/10 text-primary rounded-full px-3 py-0.5 font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3" /> {openArticle.category}
              </span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {openArticle.readTime}</span>
              <span>{openArticle.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight max-w-3xl">
              {openArticle.title}
            </h1>
            <p className="text-muted-foreground mt-3 text-sm">By {openArticle.author}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="container px-4 py-12 max-w-3xl mx-auto"
        >
          <div className="prose-like">
            {renderFullContent(openArticle.fullContent)}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Need Guidance from Pandit Ramgopal Ji?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Contact VedSarathi to book a ceremony, consultation, or Vastu guidance session in Kolkata or anywhere in India.
              </p>
              <a href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>

          <button
            onClick={() => setOpenArticle(null)}
            className="mt-8 flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-24 bg-muted/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]" />
        <div className="container px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            ॐ Vedic Knowledge
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-4"
          >
            Blog & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Insights, explanations, and guidance on Vedic rituals, Sanatan Dharma, and Hindu traditions — written with devotion by Pandit Ramgopal Ji.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-5 bg-background border-b border-border sticky top-20 z-30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article — text-only, large */}
      {activeCategory === "All" && (
        <section className="py-12 bg-background border-b border-border">
          <div className="container px-4 max-w-4xl mx-auto">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
              Featured
            </span>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 font-semibold flex items-center gap-1">
                <Tag className="w-3 h-3" /> {articles[0].category}
              </span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {articles[0].readTime}</span>
              <span>{articles[0].date}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {articles[0].excerpt}
            </p>
            <Button
              onClick={() => setOpenArticle(articles[0])}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Read Full Article <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      )}

      {/* Articles List — clean text cards, no photos */}
      <section className="py-12 bg-muted/20">
        <div className="container px-4 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            <div className="flex flex-col gap-5">
              {(activeCategory === "All" ? filtered.slice(1) : filtered).map((article, i) => (
                <motion.div
                  key={article.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <Card className="border-border bg-card hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 font-semibold flex items-center gap-1">
                          <Tag className="w-3 h-3" /> {article.category}
                        </span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                        <span>{article.date}</span>
                      </div>
                      <h3
                        className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors"
                        onClick={() => setOpenArticle(article)}
                      >
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">By {article.author}</p>
                        <button
                          onClick={() => setOpenArticle(article)}
                          className="flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
                        >
                          Read Full Blog <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay Connected with Vedic Wisdom</h2>
          <p className="opacity-90 text-lg mb-8">
            Receive our latest articles on Hindu rituals, auspicious dates, and Sanatan Dharma teachings directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-background text-primary hover:bg-background/90 font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
