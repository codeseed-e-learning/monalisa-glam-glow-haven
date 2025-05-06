
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PricingItem {
  name: string;
  price: number;
}

interface PricingCardProps {
  category: string;
  items: PricingItem[];
}

const PricingCard = ({ category, items }: PricingCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="bg-rose-600 text-white py-3 px-6">
        <h3 className="text-xl font-semibold">{category} Services</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-rose-600 font-semibold">₹{item.price}</span>
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
  );
};

export default PricingCard;
