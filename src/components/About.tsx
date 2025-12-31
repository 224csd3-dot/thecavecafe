import { Heart, Coffee, Users, Sparkles } from "lucide-react";
import cafeVibe from "@/assets/cafe-vibe.jpg";

const features = [
  {
    icon: Coffee,
    title: "Exceptional Coffee & Food",
    description: "Carefully crafted beverages and dishes that keep you coming back",
  },
  {
    icon: Heart,
    title: "Warm Atmosphere",
    description: "Cozy interiors with ambient lighting perfect for any mood",
  },
  {
    icon: Users,
    title: "Friendly Staff",
    description: "Our team is dedicated to making your experience memorable",
  },
  {
    icon: Sparkles,
    title: "Insta-Worthy Vibes",
    description: "Every corner is designed for that perfect shot",
  },
];

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-48 sm:h-64 md:h-96 bg-primary/5 rounded-l-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src={cafeVibe}
                alt="The Cave Cafe Ambiance"
                className="w-full aspect-[4/5] sm:aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 md:bottom-8 md:-right-8 bg-card p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-card border border-border/50 animate-glow-pulse">
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">467+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Reviews</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up stagger-2 order-1 lg:order-2">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
              More Than Just a Cafe
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              The Cave Cafe isn't just a place to grab a coffee—it's an experience. 
              Nestled in the heart of Vadodara, we've created a sanctuary where friends 
              gather, couples connect, and celebrations come alive. Our customers don't 
              just visit; they return, time and again, drawn by the warmth of our 
              atmosphere and the quality of everything we serve.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
