import { Phone, Clock, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 ambient-glow" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
            Visit Us Today
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We'd love to have you. Drop by or give us a call!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50 shadow-card animate-fade-up">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Call Us</p>
                  <a
                    href="tel:+918866557838"
                    className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors touch-manipulation"
                  >
                    +91 88665 57838
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Opening Hours</p>
                  <p className="text-foreground font-semibold text-sm sm:text-base">
                    Open Daily
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Closes at 9:00 PM
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Location</p>
                  <p className="text-foreground font-semibold text-sm sm:text-base">
                    Vadodara, Gujarat
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Follow us on</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors touch-manipulation text-sm sm:text-base"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>@thecavecafe</span>
              </a>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50 shadow-card animate-fade-up stagger-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Quick Actions
            </h3>
            
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              Ready to experience The Cave Cafe? Reach out to us directly or message us on Instagram.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+918866557838" className="block">
                <Button variant="hero" size="lg" className="w-full text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </Button>
              </a>
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="heroOutline" size="lg" className="w-full text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Message on Instagram
                </Button>
              </a>
            </div>

            {/* Services */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/50">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">Available Services</p>
              <div className="flex flex-wrap gap-2">
                {["Dine-in", "Takeaway", "Delivery"].map((service) => (
                  <span
                    key={service}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-secondary text-xs sm:text-sm text-foreground border border-border/50"
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
