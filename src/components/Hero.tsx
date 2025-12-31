import { Star, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCafe from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="The Cave Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      {/* Ambient Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 bg-amber/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20 md:pt-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 mb-4 sm:mb-6 animate-fade-up">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
            <span className="text-foreground font-medium text-sm sm:text-base">
              4.9 Rating • 467+ Happy Customers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-up stagger-1 px-2">
            Vadodara's Favorite{" "}
            <span className="text-gradient">Cafe Experience</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-up stagger-2 px-4">
            Where great food meets cozy vibes. Perfect for celebrations, dates,
            or just unwinding with friends. Experience the magic at just{" "}
            <span className="text-primary font-semibold">₹200-400</span> per
            person.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-up stagger-3 px-4">
            <a href="#menu" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto sm:px-8">
                View Menu
              </Button>
            </a>
            <a href="tel:+918866557838" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto sm:px-6">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">+91 88665 57838</span>
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-up stagger-4 px-4">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              <span>Vadodara, Gujarat</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Open Now • Closes at 9 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on small mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden xs:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-1.5 sm:pt-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
