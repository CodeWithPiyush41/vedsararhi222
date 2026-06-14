import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "vivah",
    title: "Vivah Sanskar (Wedding Ceremony)",
    desc: "A complete Vedic wedding ceremony including Kanyadaan, Panigrahan, Saptapadi, and Sindoor Daan, performed with authentic mantras and full devotion.",
    benefits: ["Authentic Vedic Mantras", "Complete guidance on Samagri", "Detailed explanation of rituals", "Auspicious Muhurat selection"],
    icon: "🌸"
  },
  {
    id: "griha-pravesh",
    title: "Griha Pravesh Puja",
    desc: "Purify your new home and seek blessings for peace, prosperity, and happiness with Vastu Shanti, Navagraha Shanti, and Havan.",
    benefits: ["Vastu Dosha Nivarana", "Positive energy flow", "Navagraha blessings", "Complete Havan ceremony"],
    icon: "🏠"
  },
  {
    id: "namkaran",
    title: "Namkaran Sanskar",
    desc: "The sacred naming ceremony for your newborn based on astrological calculations (Nakshatra) to ensure a bright and prosperous future.",
    benefits: ["Astrological name selection", "Blessings for health & intellect", "Graha Shanti", "Family bonding ritual"],
    icon: "👶"
  },
  {
    id: "satyanarayan",
    title: "Satyanarayan Katha",
    desc: "A powerful puja dedicated to Lord Vishnu to express gratitude, seek blessings for success, and overcome obstacles in life.",
    benefits: ["Removal of obstacles", "Fulfillment of desires", "Family harmony", "Spiritual upliftment"],
    icon: "📖"
  },
  {
    id: "havan",
    title: "Havan and Yagya",
    desc: "Sacred fire rituals performed to purify the environment, seek divine blessings, and eliminate negative energies from your surroundings.",
    benefits: ["Environmental purification", "Spiritual cleansing", "Health and prosperity", "Divine connection"],
    icon: "🔥"
  },
  {
    id: "mundan",
    title: "Mundan Sanskar",
    desc: "The traditional first haircut ceremony for a child, seeking blessings for a long life, good health, and sharp intellect.",
    benefits: ["Purity and hygiene", "Intellectual growth", "Long life blessings", "Removal of past karma"],
    icon: "✂️"
  },
  {
    id: "vastu",
    title: "Vastu Puja",
    desc: "Remedial rituals to correct Vastu Doshas in residential or commercial spaces, ensuring the flow of positive cosmic energy.",
    benefits: ["Correction of structural flaws", "Enhanced prosperity", "Better health", "Business growth"],
    icon: "🧭"
  },
  {
    id: "festival",
    title: "Festival Pujas",
    desc: "Specialized pujas for major Hindu festivals like Diwali (Lakshmi Puja), Navratri, Ganesh Chaturthi, Maha Shivaratri, and Janmashtami.",
    benefits: ["Authentic festival rituals", "Maximized spiritual benefits", "Convenient at-home service", "Community blessings"],
    icon: "🪔"
  },
  {
    id: "consultation",
    title: "Religious Consultations",
    desc: "Personalized guidance on spiritual practices, daily pujas, fasting rules (Vrat Katha), and resolving spiritual dilemmas.",
    benefits: ["Expert spiritual advice", "Clarity on traditions", "Customized daily routines", "Dharma teachings"],
    icon: "🧘"
  },
  {
    id: "muhurat",
    title: "Muhurat Guidance",
    desc: "Finding the most auspicious time (Shubh Muhurat) for significant life events like weddings, starting a business, or buying property.",
    benefits: ["Astrologically sound dates", "Avoidance of negative periods", "Success in endeavors", "Panchang analysis"],
    icon: "📅"
  }
];

export default function Services() {
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <section className="bg-muted/50 py-16 border-b border-border">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Sacred Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Vedic rituals and ceremonies performed with utmost purity, devotion, and adherence to Sanatan Dharma.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 border-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
                
                <div className="mt-6 mb-8 pl-14">
                  <h4 className="font-semibold text-foreground mb-2">Benefits & Inclusions:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pl-14">
                  <Link href={`/contact?service=${service.id}`}>
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Book This Puja
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
