import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Tag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Importance of Griha Pravesh Puja — Why Blessing Your New Home Matters",
    excerpt: "Moving into a new home is one of life's most significant milestones. The Griha Pravesh Puja is not merely a tradition — it is a profound Vedic ritual designed to purify the energies of your new space, invite divine blessings, and ensure prosperity, health, and harmony for all who will reside there. Learn what makes this ceremony indispensable.",
    category: "Puja & Rituals",
    readTime: "6 min read",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Hindu Wedding Rituals Explained — A Complete Guide to Vivah Sanskar",
    excerpt: "The Hindu wedding ceremony — Vivah Sanskar — is one of the most elaborate and meaningful rituals in Sanatan Dharma. From Var Mala to Saptapadi, each ritual carries deep spiritual significance. This guide explains every stage of a Vedic wedding, its meaning, and why performing it correctly matters for the couple's entire life together.",
    category: "Vivah Sanskar",
    readTime: "10 min read",
    date: "November 25, 2024",
    image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Namkaran Sanskar Guide — The Sacred Art of Naming Your Child",
    excerpt: "In Sanatan Dharma, a child's name is not merely a label — it is a vibration that shapes the child's identity, energy, and destiny. The Namkaran Sanskar is the sacred ceremony through which a name is selected according to Vedic astrology and given with mantras and blessings. Discover the process, the significance, and how to choose the right name.",
    category: "Samskara",
    readTime: "7 min read",
    date: "November 5, 2024",
    image: "https://images.unsplash.com/photo-1519817650390-64a9db67cf0f?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Benefits of Havan — The Ancient Science Behind Sacred Fire Rituals",
    excerpt: "Havan — the offering of ghee, herbs, and grains into a sacred fire — is one of the oldest Vedic practices, mentioned extensively in the Rigveda. Beyond its spiritual dimensions, modern research increasingly validates the air-purifying, healing properties of Havan smoke. This article explores both the spiritual and scientific dimensions of this extraordinary practice.",
    category: "Havan & Yagya",
    readTime: "8 min read",
    date: "October 18, 2024",
    image: "https://images.unsplash.com/photo-1584286595398-a59c3f9a1f0c?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Satyanarayan Katha Significance — Understanding the Divine Story of Lord Vishnu",
    excerpt: "The Satyanarayan Katha is among the most beloved Hindu religious ceremonies, performed at joyous occasions from housewarming to weddings. But what is the actual story of the Katha, and why does it hold such special power? This article unpacks the five chapters of the Katha, their moral teachings, and the correct method of performing this sacred ceremony.",
    category: "Katha",
    readTime: "9 min read",
    date: "September 30, 2024",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Vastu Tips for New Homes — Aligning Your Space with Vedic Principles",
    excerpt: "Vastu Shastra is the ancient Indian science of architecture and spatial arrangement, rooted in the belief that the physical environment profoundly influences well-being, relationships, and prosperity. Whether you are constructing a new home or moving into one, these Vedic Vastu tips will help you create a living space that is aligned with positive energy and divine grace.",
    category: "Vastu Shastra",
    readTime: "11 min read",
    date: "September 12, 2024",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
  {
    title: "Sanatan Dharma Teachings — Understanding the Eternal Way of Life",
    excerpt: "Sanatan Dharma is often translated as 'Hinduism' but the term encompasses something far more profound — an eternal, universal system of spiritual truths and righteous living that transcends any single religion. In this introductory piece, Pandit Ji shares the foundational teachings of Sanatan Dharma: Dharma, Karma, Moksha, and how these principles apply to daily modern life.",
    category: "Teachings",
    readTime: "12 min read",
    date: "August 20, 2024",
    image: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&q=80&w=800",
    author: "Pandit Ramesh Sharma Ji",
  },
];

const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

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
            Insights, explanations, and guidance on Vedic rituals, Sanatan Dharma, and Hindu traditions — written with devotion for devotees.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`blog-filter-${cat}`}
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

      {/* Featured Article */}
      {activeCategory === "All" && (
        <section className="py-12 bg-background">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{articles[0].category}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{articles[0].readTime}</span>
                  <span>{articles[0].date}</span>
                </div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4 leading-tight">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-4">
                  {articles[0].excerpt}
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Read Full Article <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 bg-muted/20">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card
                  className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  data-testid={`blog-card-${i}`}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3" /> {article.category}
                      </span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-foreground text-lg mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="text-xs font-medium text-foreground">{article.author}</p>
                        <p className="text-xs text-muted-foreground">{article.date}</p>
                      </div>
                      <button className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                        Read <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              data-testid="newsletter-email"
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
