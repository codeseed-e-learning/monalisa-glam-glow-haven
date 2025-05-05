
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    category: "Hair",
    items: [
      { name: "Haircut & Styling", price: 45 },
      { name: "Color & Highlights", price: 85 },
      { name: "Hair Treatment", price: 60 },
      { name: "Bridal Hairstyling", price: 120 },
    ]
  },
  {
    category: "Face",
    items: [
      { name: "Classic Facial", price: 55 },
      { name: "Anti-Aging Treatment", price: 80 },
      { name: "Hydrating Facial", price: 65 },
      { name: "Microdermabrasion", price: 90 },
    ]
  },
  {
    category: "Body",
    items: [
      { name: "Massage Therapy", price: 70 },
      { name: "Body Scrub", price: 65 },
      { name: "Waxing Services", price: 40 },
      { name: "Manicure & Pedicure", price: 55 },
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
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-rose-600 text-white py-3 px-6">
                <h3 className="text-xl font-semibold">{service.category} Services</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-gray-800">{item.name}</span>
                      <span className="text-rose-600 font-semibold">${item.price}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate("/appointments")}
                  className="w-full mt-6 bg-rose-600 hover:bg-rose-700 text-white"
                >
                  Book Now
                </Button>
              </div>
            </div>
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
