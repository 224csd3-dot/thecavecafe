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
    <section id="menu" className="py-20 md:py-32 bg-gradient-warm relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Popular Picks
          </h2>
          <p className="text-muted-foreground text-lg">
            Carefully prepared dishes that have won the hearts of our customers
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-gradient-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                {/* Tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {item.tag}
                </span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Want to see our full menu? Get in touch!
          </p>
          <a href="#contact">
            <Button variant="hero" size="lg">
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
