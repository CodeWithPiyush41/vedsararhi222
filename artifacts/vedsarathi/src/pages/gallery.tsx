import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/panditji-temple-puja.jpeg",
    alt: "Pandit Ramgopal Ji performing Puja at Temple",
    category: "Puja",
  },
  {
    src: "/satyanarayan-katha.jpeg",
    alt: "Satyanarayan Katha — Live Ceremony by Pandit Ramgopal Ji",
    category: "Katha",
  },
  {
    src: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800",
    alt: "Vivah Sanskar — Sacred Wedding Ceremony",
    category: "Wedding",
  },
  {
    src: "https://images.unsplash.com/photo-1605371924599-2d0365da26f5?auto=format&fit=crop&q=80&w=800",
    alt: "Griha Pravesh — Home Blessing Ceremony",
    category: "Griha Pravesh",
  },
  {
    src: "https://images.unsplash.com/photo-1584286595398-a59c3f9a1f0c?auto=format&fit=crop&q=80&w=800",
    alt: "Havan — Sacred Fire Ritual",
    category: "Havan",
  },
  {
    src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    alt: "Temple Puja — Sacred Offerings",
    category: "Puja",
  },
  {
    src: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?auto=format&fit=crop&q=80&w=800",
    alt: "Vedic Ritual Ceremony",
    category: "Ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1603525167098-b80c6c70b809?auto=format&fit=crop&q=80&w=800",
    alt: "Satyanarayan Katha",
    category: "Katha",
  },
  {
    src: "https://images.unsplash.com/photo-1519817650390-64a9db67cf0f?auto=format&fit=crop&q=80&w=800",
    alt: "Namkaran — Naming Ceremony",
    category: "Namkaran",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
    alt: "Spiritual Guidance Session",
    category: "Consultation",
  },
  {
    src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&q=80&w=800",
    alt: "Festival Puja — Diwali Celebration",
    category: "Festival",
  },
  {
    src: "https://images.unsplash.com/photo-1584646098378-0e16a85ac7bd?auto=format&fit=crop&q=80&w=800",
    alt: "Puja Thali — Sacred Offerings",
    category: "Puja",
  },
  {
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&q=80&w=800",
    alt: "Yagya — Vedic Fire Sacrifice",
    category: "Havan",
  },
  {
    src: "https://images.unsplash.com/photo-1561625116-a57f7e6e02e3?auto=format&fit=crop&q=80&w=800",
    alt: "Vedic Pandit Performing Rituals",
    category: "Ceremony",
  },
];

const categories = ["All", "Wedding", "Havan", "Griha Pravesh", "Puja", "Namkaran", "Ceremony", "Festival", "Katha", "Consultation"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

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
            ॐ Sacred Moments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-foreground mt-4 mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into the sacred ceremonies and spiritual moments we have been honored to be a part of.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-background border-b border-border py-6 sticky top-20 z-30">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat}`}
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

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((image, index) => (
                <motion.div
                  key={image.alt}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted shadow-md hover:shadow-xl"
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                  data-testid={`gallery-image-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <span className="text-primary text-xs font-semibold">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={() => setSelectedImage(null)}
              data-testid="lightbox-close"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
                style={{ maxHeight: "80vh" }}
              />
              <div className="mt-4 text-center">
                <p className="text-white font-medium">{galleryImages[selectedImage].alt}</p>
                <span className="text-primary text-sm">{galleryImages[selectedImage].category}</span>
              </div>
            </motion.div>

            <div className="absolute left-4 right-4 flex justify-between top-1/2 -translate-y-1/2 pointer-events-none">
              <button
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0); }}
              >
                &#8592;
              </button>
              <button
                className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors"
                onClick={(e) => { e.stopPropagation(); setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : 0); }}
              >
                &#8594;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
