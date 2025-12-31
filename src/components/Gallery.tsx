import heroCafe from "@/assets/hero-cafe.jpg";
import foodPizza from "@/assets/food-pizza.jpg";
import foodSandwich from "@/assets/food-sandwich.jpg";
import celebration from "@/assets/celebration.jpg";
import cafeVibe from "@/assets/cafe-vibe.jpg";
import coffeeImg from "@/assets/coffee.jpg";

const galleryItems = [
  { image: heroCafe, category: "Cafe Vibe", caption: "Cozy evenings await" },
  { image: foodPizza, category: "Food & Drinks", caption: "Our signature pizza" },
  { image: celebration, category: "Celebrations", caption: "Making memories together" },
  { image: cafeVibe, category: "Cafe Vibe", caption: "Your Instagram-worthy spot" },
  { image: foodSandwich, category: "Food & Drinks", caption: "Gourmet delights" },
  { image: coffeeImg, category: "Food & Drinks", caption: "Perfect brew every time" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-gradient-warm relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Moments at The Cave
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the experiences that await you
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              } animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${index === 0 ? "aspect-square md:aspect-auto md:h-full" : "aspect-square"}`}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>
                  <p className="text-foreground font-semibold mt-1">
                    {item.caption}
                  </p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-xl transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Follow us for more delicious moments
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-amber-glow transition-colors font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @thecavecafe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
