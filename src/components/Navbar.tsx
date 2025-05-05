
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookAppointment = () => {
    navigate("/appointments");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-rose-600">Monalisa</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-rose-600 transition">
              Home
            </Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-rose-600 transition">
              About
            </Link>
            <Link to="/transitions" className="font-medium text-gray-800 hover:text-rose-600 transition">
              Transitions
            </Link>
            <Link to="/contact" className="font-medium text-gray-800 hover:text-rose-600 transition">
              Contact
            </Link>
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleBookAppointment}
              className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-6"
            >
              Book an Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-gray-800 hover:text-rose-600 transition px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-medium text-gray-800 hover:text-rose-600 transition px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/transitions"
                className="font-medium text-gray-800 hover:text-rose-600 transition px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Transitions
              </Link>
              <Link
                to="/contact"
                className="font-medium text-gray-800 hover:text-rose-600 transition px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                onClick={() => {
                  handleBookAppointment();
                  setIsMenuOpen(false);
                }}
                className="bg-rose-600 hover:bg-rose-700 text-white mt-2 rounded-full"
              >
                Book an Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
