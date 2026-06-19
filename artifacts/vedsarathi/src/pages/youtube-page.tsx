import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { Play, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  {
    id: "BmcNXEpYGvE",
    title: "Shree Mad Bhagwat Katha",
    category: "Bhagwat Katha",
  },
  {
    id: "l5sE6xcVoIQ",
    title: "Bhagwat Katha — Krishna Katha",
    category: "Bhagwat Katha",
  },
  {
    id: "aUEcnV05wQY",
    title: "Sundarkand — Sacred Recitation",
    category: "Katha",
  },
  {
    id: "3UH1RJVwn3w",
    title: "Krishna Janam Utsav — Celebration",
    category: "Festival",
  },
  {
    id: "7sBY7T3wTIc",
    title: "Navaratri Pujan — Jai Mata Di",
    category: "Festival",
  },
  {
    id: "k1IVqgfKG3c",
    title: "Saligrama & Tulsi — Vedic Significance",
    category: "Teachings",
  },
  {
    id: "kQ-xVvAVGDw",
    title: "Saligrama, Tulsi & Bhagwat Katha",
    category: "Teachings",
  },
];

export default function YoutubePage() {
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
            Watch Pandit Ramgopal Ji explain Vedic rituals, Katha, and Sanatan Dharma. Subscribe to never miss a video.
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
            <p className="text-muted-foreground mt-2">Shree Mad Bhagwat Katha by Pandit Ramgopal Ji</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <iframe
                src="https://www.youtube.com/embed/BmcNXEpYGvE"
                title="Shree Mad Bhagwat Katha — VedSarathi"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-foreground">All Videos</h2>
            <p className="text-muted-foreground mt-2">From the VedSarathi YouTube channel</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="group overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <span className="text-xs text-primary font-semibold uppercase tracking-wide">{video.category}</span>
                      <h3 className="font-serif font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
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
              Subscribe to the VedSarathi YouTube channel and turn on notifications to receive the latest videos on Vedic rituals, Katha, and Sanatan Dharma.
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
