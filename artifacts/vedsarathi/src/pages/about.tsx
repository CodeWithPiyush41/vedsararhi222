import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, BookOpen, Heart, Star, Users, Globe } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-24 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/oriental-tiles.png')]" />
        <div className="container px-4 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm"
          >
            ॐ Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-6"
          >
            About VedSarathi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A sacred journey spanning two decades, devoted to preserving and sharing the timeless wisdom of the Vedas with every devotee we serve.
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80"
                  alt="Pandit Ji — Vedic Priest"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-bold">Pandit Shri Ramesh Sharma Ji</h3>
                  <p className="text-white/80 mt-1">Vedic Scholar & Spiritual Guide</p>
                  <p className="text-primary font-semibold mt-1">20+ Years of Sacred Service</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl hidden md:block">
                <p className="text-4xl font-serif font-bold">500+</p>
                <p className="text-sm font-medium opacity-90">Ceremonies Performed</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-primary font-semibold tracking-widest uppercase text-sm">Introduction</span>
              <h2 className="text-4xl font-serif font-bold text-foreground mt-3 mb-6">
                Devoted to Sanatan Dharma for Over Two Decades
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Pandit Shri Ramesh Sharma Ji was born into a lineage of Vedic scholars in Varanasi, the spiritual capital of India. From a young age, he devoted himself to the study of Sanskrit, the Vedas, the Puranas, and traditional Vedic ritual practices under the tutelage of renowned Acharyas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                With more than 20 years of dedicated practice, he has performed hundreds of sacred ceremonies — from intimate home pujas to grand wedding celebrations — across India. His approach blends ancient accuracy with compassionate guidance, ensuring every devotee understands the meaning and significance of each ritual.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Pandit Ji believes that performing rituals correctly is an act of love — love for the divine, love for one's ancestors, and love for future generations. This philosophy is the heart of VedSarathi.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Our Principles</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mt-3">Spiritual Values & Commitment</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: BookOpen, title: "Vedic Authenticity", desc: "Every ritual is performed strictly according to the Vedic scriptures — no shortcuts, no modern dilutions. Just pure, authentic tradition." },
              { icon: Heart, title: "Devotion & Care", desc: "We approach each ceremony as a sacred responsibility. Your most important life moments deserve the deepest reverence and care." },
              { icon: ShieldCheck, title: "Trusted Guidance", desc: "We explain every step, every mantra, and every ritual's significance so you feel fully connected to your ceremony — not just an observer." },
              { icon: Star, title: "Excellence in Service", desc: "From selecting auspicious muhurtas to procuring puja samagri, we handle every detail with precision and integrity." },
              { icon: Users, title: "Community & Seva", desc: "VedSarathi conducts free community havans and spiritual camps to make Vedic wisdom accessible to all, regardless of means." },
              { icon: Globe, title: "Pan-India Presence", desc: "We serve devotees across India and extend our services to the Indian diaspora abroad through virtual guidance and ceremony support." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-border bg-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="uppercase tracking-widest text-sm font-semibold opacity-80">Our Mission</span>
            <h2 className="text-4xl font-serif font-bold mt-4 mb-6">
              Preserving the Sacred Heritage of Bharat
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              In an era of rapid change, VedSarathi stands as a steadfast guardian of Sanatan Dharma. Our mission is to ensure that the wisdom of the Vedas — passed down through thousands of years — continues to guide, uplift, and bring peace to the lives of every Hindu household.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Through authentic ritual performance, scripture education, and community outreach, we are committed to being a true Sarathi (guide) on your Vedic journey — just as Lord Krishna guided Arjuna, we strive to guide every devotee toward a life of dharma, peace, and prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Begin Your Sacred Journey</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Whether you have questions about a ceremony or are ready to schedule one, we would be honored to guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Our Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book a Puja
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
