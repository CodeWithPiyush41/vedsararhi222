import { motion } from "framer-motion";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { Play, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["All", "Vivah Sanskar", "Havan & Yagya", "Griha Pravesh", "Katha", "Teachings", "Namkaran"];

const videos = [
  {
    title: "Complete Vivah Sanskar — Full Wedding Ceremony Rituals Explained",
    thumbnail: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800",
    duration: "1:24:30",
    views: "45K",
    category: "Vivah Sanskar",
    date: "Dec 2024",
  },
  {
    title: "Navgrah Havan — Step by Step Guide with Full Mantras",
    thumbnail: "https://images.unsplash.com/photo-1584286595398-a59c3f9a1f0c?auto=format&fit=crop&q=80&w=800",
    duration: "58:14",
    views: "32K",
    category: "Havan & Yagya",
    date: "Nov 2024",
  },
  {
    title: "Griha Pravesh Puja — Vastu Shanti Rituals for New Home",
    thumbnail: "https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&fit=crop&q=80&w=800",
    duration: "42:07",
    views: "28K",
    category: "Griha Pravesh",
    date: "Oct 2024",
  },
  {
    title: "Satyanarayan Katha — Complete with Meaning and Prasad Vidhi",
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    duration: "1:12:45",
    views: "61K",
    category: "Katha",
    date: "Sep 2024",
  },
  {
    title: "Significance of Yagya in Modern Times — Sanatan Dharma",
    thumbnail: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&q=80&w=800",
    duration: "22:18",
    views: "18K",
    category: "Teachings",
    date: "Aug 2024",
  },
  {
    title: "Namkaran Sanskar — How to Name Your Child the Vedic Way",
    thumbnail: "https://images.unsplash.com/photo-1519817650390-64a9db67cf0f?auto=format&fit=crop&q=80&w=800",
    duration: "35:55",
    views: "24K",
    category: "Namkaran",
    date: "Jul 2024",
  },
  {
    title: "16 Samskaras of Hinduism — Full Explanation by Pandit Ji",
    thumbnail: "https://images.unsplash.com/photo-1603525167098-b80c6c70b809?auto=format&fit=crop&q=80&w=800",
    duration: "48:30",
    views: "53K",
    category: "Teachings",
    date: "Jun 2024",
  },
  {
    title: "Sudarshana Homa — Removing Negative Energies from Home",
    thumbnail: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=80&w=800",
    duration: "51:22",
    views: "21K",
    category: "Havan & Yagya",
    date: "May 2024",
  },
  {
    title: "Saptapadi — Seven Sacred Vows of Hindu Marriage Explained",
    thumbnail: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&q=80&w=800",
    duration: "29:40",
    views: "37K",
    category: "Vivah Sanskar",
    date: "Apr 2024",
  },
];

export default function YoutubePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? videos
    : videos.filter((v) => v.category === activeCategory);

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
            ॐ Vedic Wisdom on Video
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-4"
          >
            VedSarathi on YouTube
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Watch Pandit Ji explain Vedic rituals, ceremonies, and Sanatan Dharma in depth. Subscribe to never miss a video.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <FaYoutube className="w-5 h-5" /> Subscribe to Channel
              </Button>
            </a>
            <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 gap-2">
                <Bell className="w-4 h-4" /> Turn on Notifications
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Embed */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground">Featured Video</h2>
            <p className="text-muted-foreground mt-2">Watch our most popular explanation of Vivah Sanskar rituals</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="VedSarathi — Complete Vivah Sanskar Explained"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`youtube-filter-${cat}`}
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

      {/* Videos Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wide">{video.category}</span>
                      <h3 className="font-serif font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{video.views} views</span>
                        <span>{video.date}</span>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <FaYoutube className="w-5 h-5" /> View All Videos on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <FaYoutube className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Never Miss a Video
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Subscribe to the VedSarathi YouTube channel and turn on notifications to receive our latest videos on Vedic rituals, ceremonies, and Sanatan Dharma teachings.
            </p>
            <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <FaYoutube className="w-5 h-5" /> Subscribe Now — It is Free
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
