
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Appointment",
    description: "Select your preferred service and choose an available time slot that works for you.",
  },
  {
    number: "02",
    title: "Consultation",
    description: "Meet with our expert stylists to discuss your beauty goals and expectations.",
  },
  {
    number: "03",
    title: "Treatment",
    description: "Relax and enjoy as our professionals work their magic to transform your look.",
  },
  {
    number: "04",
    title: "Final Touch",
    description: "We'll make sure you're completely satisfied with your new stunning appearance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple four-step process ensures you receive the best beauty service experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-600 font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-rose-50 to-white p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Why Choose Monalisa?</h3>
              <p className="text-gray-600">We're committed to excellence in every beauty service</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-rose-600 mr-2 h-5 w-5" />
                <span className="text-gray-700">Licensed Professionals</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-rose-600 mr-2 h-5 w-5" />
                <span className="text-gray-700">Premium Products</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-rose-600 mr-2 h-5 w-5" />
                <span className="text-gray-700">Personalized Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-rose-600 mr-2 h-5 w-5" />
                <span className="text-gray-700">Clean Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
