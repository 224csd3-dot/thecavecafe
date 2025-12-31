import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    text: "Amazing atmosphere! The ambiance is perfect for a cozy evening with friends. The food was outstanding and the staff were incredibly welcoming.",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "Perfect place to celebrate! We had our anniversary here and it was magical. The decoration, food, and service exceeded our expectations.",
    author: "Rahul M.",
    rating: 5,
  },
  {
    text: "Outstanding food and service. The paneer pizza is to die for! This has become our go-to spot for weekend hangouts.",
    author: "Sneha P.",
    rating: 5,
  },
  {
    text: "Cozy vibes and great coffee. The Cave Cafe truly lives up to its name - it's like a hidden gem in Vadodara!",
    author: "Amit K.",
    rating: 5,
  },
];

const keywords = [
  "Party",
  "Experience",
  "Atmosphere",
  "Couples",
  "Friends",
  "Celebration",
  "Coffee",
  "Ambiance",
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Customer Love
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What People Say
          </h2>
          
          {/* Rating Display */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-4xl font-display font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">/ 5</span>
          </div>
          <p className="text-muted-foreground mt-2">Based on 467+ reviews</p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 absolute inset-0 translate-y-4"
                }`}
              >
                <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-card relative">
                  <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20" />
                  <p className="text-lg md:text-xl text-foreground leading-relaxed text-center mb-6 relative z-10">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.author}</p>
                      <div className="flex gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-primary fill-primary"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up">
          {keywords.map((keyword, index) => (
            <span
              key={keyword}
              className="px-4 py-2 rounded-full bg-secondary border border-border/50 text-sm text-foreground hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
