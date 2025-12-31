import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const menuData = {
  starters: {
    title: "Starters",
    items: [
      { name: "Peri Peri Nachos", price: 140 },
      { name: "Cheese Balls", price: 160 },
      { name: "Momos Fry", price: 180 },
      { name: "Paneer Chilli", price: 200 },
      { name: "Chole Kulcha", price: 200 },
      { name: "Pav Bhaji", price: 220 },
      { name: "Paneer Butter Masala", price: 220 },
      { name: "Paneer Bhurji", price: 220 },
      { name: "Dal Makhani with Kulcha", price: 240 },
      { name: "Dal Makhani with Tadka", price: 260 },
    ],
  },
  maggie: {
    title: "Maggie",
    items: [
      { name: "Masala Maggie", price: 120 },
      { name: "Classic Maggie", price: 140 },
      { name: "Veg. Cheese Maggie", price: 140 },
      { name: "Schewan Cheese Maggie", price: 160 },
      { name: "Corn Cheese Chilli Maggie", price: 180 },
      { name: "Tandoori Paneer Maggie", price: 180 },
      { name: "Makhani Paneer Maggie", price: 180 },
      { name: "Exotic Maggie", price: 200 },
    ],
  },
  pasta: {
    title: "Pasta",
    items: [
      { name: "Arabita", price: 220 },
      { name: "Alfredo", price: 240 },
      { name: "Mexican Pasta", price: 240 },
      { name: "Pink Sauce", price: 250 },
      { name: "Italian Pasta", price: 260 },
      { name: "Cheese Sauce", price: 260 },
      { name: "Pesto Sauce", price: 260 },
      { name: "Putanesta", price: 280 },
    ],
  },
  pizza: {
    title: "Pizza",
    items: [
      { name: "Margherite Pizza", price: 180 },
      { name: "Pickanto Pizza", price: 200 },
      { name: "Tandoori Paneer Pizza", price: 220 },
      { name: "Makhni Paneer Pizza", price: 220 },
      { name: "Indian Style Pizza", price: 220 },
      { name: "Peri Peri Pizza", price: 220 },
      { name: "Veggie Veg Pizza", price: 240 },
      { name: "American Style Pizza", price: 240 },
      { name: "American Corn Pizza", price: 240 },
      { name: "Mushroom Pepperoni Pizza", price: 240 },
      { name: "Mexican Reacor Pizza", price: 260 },
      { name: "Broccoli Corn Pizza", price: 280 },
      { name: "Double Cheese Pizza", price: 300 },
      { name: "The Cave Cafe Special Pizza", price: 320 },
    ],
  },
  sandwich: {
    title: "Premium Sandwich",
    items: [
      { name: "Cheese Chutney", price: 160 },
      { name: "Chilli Cheese Corn", price: 180 },
      { name: "Chilli Cheese Onion", price: 180 },
      { name: "Veg. Cheese", price: 180 },
      { name: "Tandoori Paneer", price: 180 },
      { name: "Makhani Paneer", price: 180 },
      { name: "Veg. Club", price: 180 },
      { name: "American Club", price: 220 },
      { name: "Russian Club", price: 250 },
      { name: "Cheese Junglee", price: 250 },
    ],
  },
  burger: {
    title: "Burger",
    items: [
      { name: "Aloo Patty Burger", price: 140 },
      { name: "Veg Classic Burger", price: 140 },
      { name: "Tandoori Burger", price: 160 },
      { name: "Makhani Paneer Burger", price: 180 },
      { name: "American Burger", price: 200 },
      { name: "Monster Burger", price: 240 },
    ],
  },
  garlicBread: {
    title: "Garlic Bread",
    items: [
      { name: "Cheese Garlic Bread", price: 140 },
      { name: "Cheese Chilli Corn Garlic Bread", price: 160 },
      { name: "Olives Jalapeno Corn Garlic Bread", price: 180 },
      { name: "Greek Style Garlic Bread", price: 200 },
    ],
  },
  flaps: {
    title: "Flaps",
    items: [
      { name: "Veg. Flap", price: 140 },
      { name: "Tandoori Flap", price: 160 },
      { name: "Makhani Panner Flap", price: 180 },
      { name: "American Flap", price: 240 },
      { name: "Russian Flap", price: 260 },
      { name: "Jungle Flap", price: 260 },
    ],
  },
};

const combos = [
  {
    name: "Combo 1",
    price: 350,
    items: ["Tandoori Paneer Pizza", "Masala Fries", "Coke"],
  },
  {
    name: "Combo 2",
    price: 350,
    items: ["Makhani Paneer Pizza", "Cheese Garlic Bread", "Coke"],
  },
  {
    name: "Combo 3",
    price: 500,
    items: ["Chilli Cheese Sandwich", "Peri Peri Fries", "Tandoori Burger", "Red Wine"],
  },
];

const MenuCategory = ({ title, items }: { title: string; items: { name: string; price: number }[] }) => (
  <div className="bg-gradient-card rounded-xl sm:rounded-2xl border border-border/50 p-4 sm:p-6 hover:border-primary/30 transition-all duration-300">
    <h3 className="font-display text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 pb-2 border-b border-border/50">
      {title}
    </h3>
    <div className="space-y-2 sm:space-y-3">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-2">
          <span className="text-foreground text-sm sm:text-base">{item.name}</span>
          <span className="text-primary font-semibold text-sm sm:text-base shrink-0">₹{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back</span>
          </Link>
          <span className="font-display text-lg sm:text-xl font-bold text-gradient">
            The Cave Cafe
          </span>
          <button
            onClick={() => window.location.href = 'tel:+918866557838'}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors touch-manipulation"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
            Full Menu
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
            Our Delicious Offerings
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Explore our complete menu featuring pizzas, pastas, sandwiches, burgers, and more!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {Object.values(menuData).map((category) => (
            <MenuCategory key={category.title} title={category.title} items={category.items} />
          ))}
        </div>

        {/* Combos Section */}
        <div className="bg-gradient-warm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/20">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center text-foreground mb-6 sm:mb-8">
            Special Combos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {combos.map((combo) => (
              <div
                key={combo.name}
                className="bg-gradient-card rounded-xl border border-border/50 p-4 sm:p-5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-primary">{combo.name}</h3>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                    ₹{combo.price}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {combo.items.map((item, index) => (
                    <li key={index} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Party Notice */}
        <div className="mt-8 sm:mt-12 text-center bg-gradient-card rounded-xl sm:rounded-2xl border border-primary/20 p-6 sm:p-8">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2">
            All Types of Decoration and Group Parties
          </h3>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Contact us to plan your special celebrations at The Cave Cafe!
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.location.href = 'tel:+918866557838'}
            className="touch-manipulation"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call to Book: 88665 57838
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Menu;
