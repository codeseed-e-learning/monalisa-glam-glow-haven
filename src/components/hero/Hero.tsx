import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  // Array of image paths for the carousel
  const images: string[] = [
    '/images/hero/hero-Photoroom.png',
    '/images/hero/hero2.png',
    '/images/hero/hero2.png'
  ];

  return (
    <section className="relative md:px-20 bg-gradient-to-r from-rose-50 to-white py-20 md:py-5">
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
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={800}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                  type: 'bullets',
                }}
                className="w-full h-[500px] rounded-2xl overflow-hidden"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={img} 
                      className="w-full h-full object-cover"
                      alt={`Hero image ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Swiper Controls */}
              <div className="swiper-button-prev after:text-white after:text-xl !left-4" />
              <div className="swiper-button-next after:text-white after:text-xl !right-4" />
              <div className="swiper-pagination !bottom-4" />

              {/* Review Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg p-4 shadow-lg z-10">
                <div className="bg-rose-100 rounded-lg px-4 py-3">
                  <p className="text-rose-800 font-semibold">100+ 5-star reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 h-20 w-20 rounded-full bg-rose-200 opacity-40" />
        <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-rose-100 opacity-60" />
      </div>
    </section>
  );
};

export default Hero;