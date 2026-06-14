import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Priya & Arjun Mehta",
    location: "Mumbai, Maharashtra",
    ceremony: "Vivah Sanskar",
    rating: 5,
    text: "Pandit Ji made our wedding ceremony absolutely divine. He explained every ritual with such depth that both our families, including those unfamiliar with Vedic traditions, were deeply moved. The chanting was pure, the atmosphere was sacred, and the entire ceremony ran perfectly. We could not have imagined a more beautiful beginning to our married life.",
  },
  {
    name: "Kavita Sharma",
    location: "Delhi, NCR",
    ceremony: "Griha Pravesh Puja",
    rating: 5,
    text: "When we moved into our new home, we wanted it blessed with the right energy. Pandit Ji performed the Griha Pravesh with such sincerity and thoroughness. Our home has felt peaceful and blessed ever since. The entire family felt a spiritual upliftment that we still talk about months later.",
  },
  {
    name: "Suresh & Meena Iyer",
    location: "Bangalore, Karnataka",
    ceremony: "Satyanarayan Katha",
    rating: 5,
    text: "We arranged the Satyanarayan Katha for our daughter's success, and Pandit Ji conducted it exactly as prescribed in the scriptures. His Sanskrit pronunciation is flawless, his explanations insightful, and his demeanor is that of a true sage. Our whole family felt immense peace and positivity after the ceremony.",
  },
  {
    name: "Rahul Gupta",
    location: "Varanasi, UP",
    ceremony: "Namkaran Sanskar",
    rating: 5,
    text: "The naming ceremony for our son was handled with such love and precision by Pandit Ji. He calculated the auspicious name based on proper Vedic astrology, explained its meaning, and made the ceremony a deeply joyful celebration. Our son is growing up healthy and happy — we are certain the blessings from this ceremony have played a part.",
  },
  {
    name: "Anita Desai",
    location: "Pune, Maharashtra",
    ceremony: "Havan & Yagya",
    rating: 5,
    text: "We organized a Navgrah Havan at home and Pandit Ji was exceptional. He arrived prepared with all the required samagri, and the Havan was conducted with complete dedication. The positive energy in our home was palpable for days afterward. Highly recommend VedSarathi for anyone seeking authentic Vedic rituals.",
  },
  {
    name: "Dr. Vikram Nair",
    location: "Chennai, Tamil Nadu",
    ceremony: "Religious Consultation",
    rating: 5,
    text: "I had many questions about Vastu and the best time to start a new business venture. Pandit Ji's guidance was extraordinary — rooted in Jyotisha, deeply practical, and genuinely caring. His consultation gave us the confidence to move forward, and our business has flourished since. VedSarathi is a true blessing.",
  },
  {
    name: "Sunita & Rajesh Agarwal",
    location: "Jaipur, Rajasthan",
    ceremony: "Mundan Sanskar",
    rating: 5,
    text: "The Mundan ceremony for our grandson was performed beautifully. Pandit Ji knew exactly how to keep a toddler calm and the ceremony auspicious. He involved the entire family meaningfully, and the grandparents were overwhelmed with gratitude. A truly memorable and sacred experience.",
  },
  {
    name: "Pooja Bhattacharya",
    location: "Kolkata, West Bengal",
    ceremony: "Vastu Puja",
    rating: 5,
    text: "After moving into our new office, we noticed things were not going smoothly. Pandit Ji conducted a thorough Vastu Puja, identifying specific energies and addressing them through proper rituals and remedies. Within weeks, the atmosphere changed completely — the team became more harmonious and business improved significantly.",
  },
  {
    name: "Amit Tiwari",
    location: "Lucknow, UP",
    ceremony: "Muhurat Guidance",
    rating: 5,
    text: "Pandit Ji provided us with muhurat timings for our daughter's engagement, new business, and home construction — all in one consultation. His calculations were detailed, his reasoning was explained clearly, and everything has gone according to his guidance. Extremely reliable, knowledgeable, and humble.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
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
            ॐ Devotee Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-4"
          >
            Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Blessings shared by devotees whose sacred moments we have had the honor of serving.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Ceremonies Performed" },
              { value: "20+", label: "Years of Experience" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "15+", label: "Cities Served" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="text-4xl font-serif font-bold">{stat.value}</p>
                <p className="text-sm opacity-80 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-border bg-card hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary/60 transition-colors" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground font-serif">{t.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
                      <span className="inline-block mt-2 text-xs bg-primary/10 text-primary rounded-full px-3 py-0.5 font-medium">
                        {t.ceremony}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30 border-t border-border text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Join Hundreds of Satisfied Devotees
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Your sacred ceremony deserves the same devotion, authenticity, and care that every one of our devotees has experienced.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Your Ceremony Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
