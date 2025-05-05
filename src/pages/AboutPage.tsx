
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Master Stylist",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "With over 15 years of experience, Sarah brings her passion and expertise to every client."
  },
  {
    name: "Michael Chen",
    role: "Senior Colorist",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Michael specializes in creating personalized color treatments that enhance natural beauty."
  },
  {
    name: "Emily Rodriguez",
    role: "Makeup Artist",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    bio: "Emily's creative approach to makeup has made her a favorite among bridal clients."
  },
  {
    name: "David Wilson",
    role: "Esthetician",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    bio: "David's facial treatments combine science and luxury for amazing results."
  }
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Monalisa Beauty Parlor</h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover the story behind our passion for beauty and commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2010, Monalisa Beauty Parlor began with a simple mission: to create a sanctuary where clients could enhance their natural beauty while enjoying a luxurious, personalized experience.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Sarah Johnson, envisioned a beauty parlor that combined high-quality services with a warm, welcoming atmosphere. After years working in top salons across the country, she brought her expertise and passion to create Monalisa.
              </p>
              <p className="text-gray-700">
                Today, we've grown into a full-service beauty destination with a team of talented professionals dedicated to helping you look and feel your best.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Monalisa Beauty Parlor Interior" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-5 -right-5 bg-rose-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-semibold">Since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at Monalisa Beauty Parlor
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for perfection in every service, using premium products and advanced techniques.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalization</h3>
              <p className="text-gray-700">
                We recognize that each client is unique, tailoring our services to meet individual needs and preferences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty and transparency, building long-lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our talented professionals are passionate about beauty and dedicated to your satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-rose-600 mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Monalisa Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Visit our beauty parlor today and let our expert team transform your look.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigate("/appointments")}
              className="bg-white text-rose-600 hover:bg-rose-100"
            >
              Book an Appointment
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline" 
              className="border-white text-white hover:bg-rose-500"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
