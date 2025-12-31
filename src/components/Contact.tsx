import { Phone, Clock, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 ambient-glow" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to have you. Drop by or give us a call!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card animate-fade-up">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                  <a
                    href="tel:+918866557838"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    +91 88665 57838
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Opening Hours</p>
                  <p className="text-foreground font-semibold">
                    Open Daily
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Closes at 9:00 PM
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-semibold">
                    Vadodara, Gujarat
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Follow us on</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@thecavecafe</span>
              </a>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border/50 shadow-card animate-fade-up stagger-2">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Quick Actions
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Ready to experience The Cave Cafe? Reach out to us directly or message us on Instagram.
            </p>

            <div className="space-y-4">
              <a href="tel:+918866557838" className="block">
                <Button variant="hero" size="xl" className="w-full">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="heroOutline" size="xl" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  Message on Instagram
                </Button>
              </a>
            </div>

            {/* Services */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">Available Services</p>
              <div className="flex flex-wrap gap-2">
                {["Dine-in", "Takeaway", "Delivery"].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground border border-border/50"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
