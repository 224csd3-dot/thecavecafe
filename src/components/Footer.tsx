import { Instagram, Phone, MapPin } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/the_cave_cafe_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
const PHONE_NUMBER = "+918866557838";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-gradient mb-2 sm:mb-3">
              The Cave Cafe
            </h3>
            <p className="text-muted-foreground max-w-md text-sm sm:text-base leading-relaxed">
              Vadodara's favorite destination for great food, cozy vibes, and 
              unforgettable moments. Join us for your next celebration or casual hangout.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Home", "About", "Menu", "Reviews", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm touch-manipulation"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm touch-manipulation cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  +91 88665 57838
                </button>
              </li>
              <li className="flex items-start gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5" />
                <span>2nd Floor, Midway Height, Sayajiganj, Vadodara 390001</span>
              </li>
              <li>
                <button
                  onClick={() => window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer')}
                  className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm touch-manipulation cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  @THE_CAVE_CAFE
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Services & Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm">
              {["Dine-in", "Takeaway", "Delivery"].map((service) => (
                <span
                  key={service}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border/30"
                >
                  {service}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm text-center">
              © {currentYear} The Cave Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
