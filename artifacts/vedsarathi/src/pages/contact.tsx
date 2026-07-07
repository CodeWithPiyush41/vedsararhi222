import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  email: z.string().email("Invalid email address.").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service."),
  date: z.string().optional(),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("access_key", "fa261c3d-41a9-476a-b786-1c63b321aaee");
      formData.append("name", values.name);
      formData.append("email", values.email || "");
      formData.append("phone", values.phone);
      formData.append("service", values.service);
      formData.append("date", values.date || "");
      formData.append("message", values.message || "");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Request Submitted Successfully",
          description: "Pandit Ji will contact you shortly to confirm the details.",
        });
        form.reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <section className="bg-muted/50 py-16 border-b border-border">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to schedule a sacred ceremony, ask for spiritual guidance, or inquire about auspicious dates.
          </p>
        </div>
      </section>

      <section className="container px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              We provide authentic Vedic puja services across India. Contact us via phone, email, or WhatsApp for quick responses.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+91 98833 14639</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">WhatsApp</h3>
                  <p className="text-muted-foreground">+91 98833 14639</p>
                  <a href="https://wa.me/919883314639" target="_blank" rel="noopener noreferrer" className="text-primary text-sm hover:underline">
                    Chat with us →
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Email</h3>
                  <p className="text-muted-foreground">vedsarathi28@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">Pan India (Based in New Delhi)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">Availability</h3>
                  <p className="text-muted-foreground">24/7 for Bookings & Queries</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-muted rounded-lg border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Google Maps Embed Area</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Book a Puja</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Rajesh Kumar" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98833 14639" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="rajesh@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select Service *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a ceremony" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="vivah">Vivah Sanskar (Wedding)</SelectItem>
                          <SelectItem value="griha-pravesh">Griha Pravesh</SelectItem>
                          <SelectItem value="namkaran">Namkaran Sanskar</SelectItem>
                          <SelectItem value="havan">Havan & Yagya</SelectItem>
                          <SelectItem value="satyanarayan">Satyanarayan Katha</SelectItem>
                          <SelectItem value="vastu">Vastu Puja</SelectItem>
                          <SelectItem value="mundan">Mundan Sanskar</SelectItem>
                          <SelectItem value="other">Other / General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date (Optional)</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details or Questions</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your requirements, preferred language, or specific rituals..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg h-12">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
