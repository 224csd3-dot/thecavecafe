import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold text-gradient mb-3">
              The Cave Cafe
            </h3>
            <p className="text-muted-foreground max-w-md">
              Vadodara's favorite destination for great food, cozy vibes, and 
              unforgettable moments. Join us for your next celebration or casual hangout.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Reviews", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918866557838"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 88665 57838
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Vadodara, Gujarat
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4" />
                  @thecavecafe
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Services & Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-3 text-sm">
              {["Dine-in", "Takeaway", "Delivery"].map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border/30"
                >
                  {service}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} The Cave Cafe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
