import { Link } from "wouter";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold text-primary">
              VedSarathi <span className="text-3xl">ॐ</span>
            </Link>
            <p className="text-muted-foreground mt-2">
              Preserving Vedic Traditions Since 2004. Authentic Hindu rituals, spiritual guidance, and ceremonies performed with devotion and purity.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="https://www.facebook.com/share/1A78AKJiN1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/vedsarathi?igsh=aWU2MmxhNjczM2o0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-600 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com/@VedSarathi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-600 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Quick Links</h3>
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Pandit Ji</Link>
            <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Spiritual Blog</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Top Services</h3>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Vivah Sanskar (Wedding)</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Griha Pravesh</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Namkaran Sanskar</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Satyanarayan Katha</Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Havan & Yagya</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Contact Details</h3>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p>+91 98765 43210</p>
                <p className="text-sm opacity-80">Available 24/7 for queries</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>info@vedsarathi.com</p>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p>Pan India Service</p>
                <p className="text-sm opacity-80">Based in Kolkata, West Bengal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 VedSarathi. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="https://panchariyalabs.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Handcrafted by PanchariyaLabs
          </a>
        </div>
      </div>
    </footer>
  );
}
