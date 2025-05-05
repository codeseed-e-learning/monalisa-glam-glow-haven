
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Pricing from "@/components/home/Pricing";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Monalisa Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert team pamper you with our premium beauty services.
          </p>
          <Button 
            onClick={() => navigate("/appointments")}
            className="bg-white text-rose-600 hover:bg-rose-100 rounded-full px-8 py-6 text-lg"
          >
            Book Your Appointment Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
