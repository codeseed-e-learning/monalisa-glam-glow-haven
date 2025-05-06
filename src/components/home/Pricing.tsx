
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PricingCard from "./PricingCard";

const services = [
  {
    category: "Hair",
    items: [
      { name: "Haircut & Styling", price: 1200 },
      { name: "Color & Highlights", price: 2500 },
      { name: "Hair Treatment", price: 1800 },
      { name: "Bridal Hairstyling", price: 3500 },
    ]
  },
  {
    category: "Face",
    items: [
      { name: "Classic Facial by Anjali", price: 1500 },
      { name: "Anti-Aging Treatment", price: 2200 },
      { name: "Hydrating Facial by Priya", price: 1800 },
      { name: "Microdermabrasion", price: 2800 },
    ]
  },
  {
    category: "Body",
    items: [
      { name: "Massage Therapy by Deepak", price: 2000 },
      { name: "Body Scrub by Meera", price: 1800 },
      { name: "Waxing Services", price: 1200 },
      { name: "Manicure & Pedicure", price: 1600 },
    ]
  }
];

const Pricing = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Beauty Services & Pricing</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of premium beauty services to enhance your natural beauty
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <PricingCard 
              key={index}
              category={service.category}
              items={service.items}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            * Prices may vary depending on hair length, condition, or additional services
          </p>
          <Button 
            onClick={() => navigate("/contact")}
            variant="outline" 
            className="border-rose-600 text-rose-600 hover:bg-rose-50"
          >
            Contact for Custom Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
