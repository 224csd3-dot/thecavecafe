import { Phone, Clock, MapPin, Instagram, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169!2d73.1856!3d22.3119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f0f0f0f0f0%3A0x0!2sThe%20Cave%20Cafe!5e0!3m2!1sen!2sin!4v1704067200000";
const GOOGLE_MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=The+Cave+Cafe,+2nd+floor,+Midway+Height,+opp.+SSG+Hospital,+near+Kala+Ghoda+Circle,+Sayajiganj,+Vadodara,+Gujarat+390001";
const INSTAGRAM_URL = "https://www.instagram.com/the_cave_cafe/";
const PHONE_NUMBER = "+918866557838";

const FULL_ADDRESS = "2nd Floor, Midway Height, Opp. SSG Hospital, Near Kala Ghoda Circle, Dak Bunglaw, Sayajiganj, Vadodara, Gujarat 390001";

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

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Left Column - Info & Actions */}
          <div className="space-y-4 sm:space-y-6">
            {/* Contact Info Card */}
            <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50 shadow-card animate-fade-up">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Call Us</p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `tel:${PHONE_NUMBER}`;
                      }}
                      className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors touch-manipulation cursor-pointer"
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
                    <p className="text-foreground font-semibold text-sm sm:text-base leading-relaxed">
                      {FULL_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Follow Us</p>
                    <button
                      onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
                      className="text-foreground font-semibold text-sm sm:text-base hover:text-primary transition-colors touch-manipulation cursor-pointer text-left"
                    >
                      @thecavecafe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-border/50 shadow-card animate-fade-up stagger-2">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Quick Actions
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </Button>
                
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Instagram
                </Button>

                <Button
                  variant="heroOutline"
                  size="lg"
                  className="w-full text-sm sm:text-base sm:col-span-2"
                  onClick={() => window.open(GOOGLE_MAPS_DIRECTIONS_URL, '_blank', 'noopener,noreferrer')}
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get Directions
                </Button>
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

          {/* Right Column - Map */}
          <div className="animate-fade-up stagger-3">
            <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-border/50 shadow-card h-full">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 px-2">
                Find Us Here
              </h3>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden aspect-square lg:aspect-auto lg:h-[calc(100%-60px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169!2d73.1856!3d22.3119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f0f0f0f0f0%3A0x0!2sThe%20Cave%20Cafe%2C%20Sayajiganj%2C%20Vadodara!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "350px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Cave Cafe Location"
                  className="w-full h-full"
                />
                {/* Map overlay for styling */}
                <div className="absolute inset-0 pointer-events-none border border-primary/20 rounded-lg sm:rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
