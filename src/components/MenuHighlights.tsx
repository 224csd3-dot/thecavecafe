import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import foodPizza from "@/assets/food-pizza.jpg";
import foodSandwich from "@/assets/food-sandwich.jpg";
import coffeeImg from "@/assets/coffee.jpg";

const menuItems = [
  {
    name: "Paneer Pizza",
    description: "Our signature pizza loaded with fresh paneer and veggies",
    image: foodPizza,
    tag: "Bestseller",
  },
  {
    name: "Gourmet Sandwiches",
    description: "Artisan bread with premium fillings and house sauces",
    image: foodSandwich,
    tag: "Popular",
  },
  {
    name: "Signature Coffee",
    description: "Expertly crafted coffee drinks for the perfect sip",
    image: coffeeImg,
    tag: "Must Try",
  },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-warm relative">
      {/* Decorative elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-32 sm:w-48 h-32 sm:h-48 bg-amber/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 animate-fade-up">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3 mb-3 sm:mb-4">
            Popular Picks
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Carefully prepared dishes that have won the hearts of our customers
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-gradient-card rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 active:scale-[0.98] transition-all duration-500 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {item.tag}
                </span>
              </div>
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up px-4">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
            Want to see our full menu? Get in touch!
          </p>
          <a href="#contact">
            <Button variant="hero" size="default" className="sm:px-6">
              Contact for Full Menu
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
