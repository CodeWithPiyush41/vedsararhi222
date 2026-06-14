import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Clock, MapPin, ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-muted/30">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
        
        <div className="container relative z-10 px-4 py-20 md:py-32 flex flex-col items-center text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-semibold tracking-wider uppercase mb-4"
          >
            The Essence of the Vedas, The Foundation of Life
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 max-w-4xl leading-tight"
          >
            Authentic Vedic Rituals & Spiritual Guidance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl"
          >
            20+ Years of Experience in Hindu Rituals, Weddings, Griha Pravesh, Namkaran, Havan, and Vedic Ceremonies
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 h-14">
                Book a Puja
              </Button>
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 border-primary text-primary hover:bg-primary/10 gap-2">
                <FaWhatsapp className="w-5 h-5" /> Contact on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-y border-border py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">20+ Years</h3>
                <p className="text-muted-foreground">Experience</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">500+</h3>
                <p className="text-muted-foreground">Ceremonies</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Pan India</h3>
                <p className="text-muted-foreground">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" alt="Pandit Ji performing puja" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-serif font-bold mb-2">Pandit Ji</h3>
                <p className="text-white/90">Vedic Scholar & Priest</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">Preserving Sanatan Dharma Through Sacred Rituals</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Welcome to VedSarathi. I am dedicated to performing authentic Hindu rituals strictly according to Vedic traditions. Every ceremony is an opportunity to connect with the divine and bring peace, prosperity, and blessings to your life.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you are stepping into a new home, uniting in marriage, or seeking spiritual harmony through a Havan, I provide comprehensive guidance and perform rituals with utmost purity and devotion.
              </p>
              <Link href="/about">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  Read Full Profile <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Sacred Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Authentic Vedic ceremonies performed with proper rituals, mantras, and devotion to bring auspiciousness to your special moments.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vivah Sanskar", desc: "Traditional Vedic wedding ceremonies with complete rituals.", img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80" },
              { title: "Griha Pravesh", desc: "Purify and bless your new home with Vastu Shanti and Havan.", img: "https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&fit=crop&q=80" },
              { title: "Namkaran Sanskar", desc: "Auspicious naming ceremony for newborns based on astrology.", img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80" },
              { title: "Havan & Yagya", desc: "Sacred fire rituals for peace, prosperity, and spiritual growth.", img: "https://images.unsplash.com/photo-1603525167098-b80c6c70b809?auto=format&fit=crop&q=80" }
            ].map((service, i) => (
              <Card key={i} className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.desc}</p>
                  <Link href="/services" className="text-primary font-medium text-sm flex items-center hover:underline">
                    Learn More <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services">
              <Button size="lg" className="bg-primary hover:bg-primary/90">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Section Placeholder */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-2">VedSarathi on YouTube</h2>
              <p className="text-muted-foreground">Watch our latest videos on Vedic rituals and Sanatan Dharma.</p>
            </div>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <FaYoutube className="mr-2" /> Subscribe Channel
              </Button>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center shadow-md relative group cursor-pointer overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800`} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white relative z-10 group-hover:scale-110 transition-transform shadow-lg">
                  <FaYoutube className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="container px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to Book a Sacred Ceremony?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your requirements, choose an auspicious date, and make your ceremony memorable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 text-lg px-8 h-14">
                Schedule a Consultation
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="border-background text-background hover:bg-background/10 text-lg px-8 h-14 gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
