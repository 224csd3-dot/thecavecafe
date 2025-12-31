import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustHighlights />
      <About />
      <MenuHighlights />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
