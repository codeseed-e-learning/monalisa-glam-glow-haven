import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rohini Shinde",
    role: "Regular Client",
    image: "https://i.pinimg.com/736x/fe/fb/00/fefb00d045dc23407889fbf62c9a827e.jpg",
    quote: "The team at Monalisa understands Indian skin perfectly! My facials and hair treatments are always spot on.",
    rating: 5
  },
  {
    id: 2,
    name: "Sakshi Patil",
    role: "Bridal Client",
    image: "https://i.pinimg.com/736x/4a/4b/3e/4a4b3e1d5565a2f7b40c8804a7882f3e.jpg",
    quote: "My wedding makeup and hair were absolutely stunning! They truly understand Indian bridal beauty standards.",
    rating: 5
  },
  {
    id: 3,
    name: "Riya Singh",
    role: "First-time Client",
    image: "https://i.pinimg.com/736x/15/42/78/154278c5c0493ec219301b3b85cebce5.jpg",
    quote: "I loved the traditional Indian head massage and facial treatment. It was so relaxing and rejuvenating!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-rose-100"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-rose-500 text-rose-500" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-rose-600 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-rose-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-rose-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-rose-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-rose-600" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-rose-600" : "bg-rose-200"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;