
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emma Wilson",
    role: "Regular Client",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    quote: "The stylists at Monalisa truly understand my hair needs. I always leave feeling beautiful and confident. Their attention to detail is impeccable!",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "First-time Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I was nervous about trying a new salon, but the team at Monalisa made me feel right at home. My facial was relaxing and the results were amazing!",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Parker",
    role: "Bridal Client",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "They did an incredible job with my bridal makeup and hair. Everything stayed perfect throughout the entire day, even through tears and dancing!",
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
