import { Star, UtensilsCrossed, Flag, PartyPopper } from "lucide-react";

const highlights = [
  {
    icon: Star,
    title: "4.9 Google Rating",
    description: "Consistently rated excellent by our guests",
  },
  {
    icon: UtensilsCrossed,
    title: "Dine-in • Takeaway • Delivery",
    description: "Enjoy your way, anytime",
  },
  {
    icon: Flag,
    title: "LGBTQ+ Friendly",
    description: "A safe space for everyone",
  },
  {
    icon: PartyPopper,
    title: "Celebration & Party Friendly",
    description: "Make your special moments memorable",
  },
];

const TrustHighlights = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-warm relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group p-4 sm:p-5 md:p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow active:scale-[0.98] animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-0.5 sm:mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustHighlights;
