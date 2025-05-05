
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-r from-rose-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Reveal Your <span className="text-rose-600">Natural Beauty</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-lg">
              Experience the art of transformation at Monalisa Beauty Parlor. 
              Our expert stylists are dedicated to bringing out your unique beauty.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigate("/appointments")}
                className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-8 py-6 text-lg"
              >
                Book an Appointment
              </Button>
              <Button 
                onClick={() => navigate("/about")}
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50 rounded-full px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Beauty Services" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg p-4 shadow-lg">
                <div className="bg-rose-100 rounded-lg px-4 py-3">
                  <p className="text-rose-800 font-semibold">100+ 5-star reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 h-20 w-20 rounded-full bg-rose-200 opacity-40"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-rose-100 opacity-60"></div>
    </section>
  );
};

export default Hero;
