
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-rose-600">Monalisa</Link>
            <p className="mt-4 text-gray-600">Experience luxury beauty services at Monalisa Beauty Parlor.</p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-rose-600 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-rose-600 transition">About</Link></li>
              <li><Link to="/transitions" className="text-gray-600 hover:text-rose-600 transition">Transitions</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-rose-600 transition">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600">Hair Styling</span></li>
              <li><span className="text-gray-600">Facial Treatment</span></li>
              <li><span className="text-gray-600">Makeup Services</span></li>
              <li><span className="text-gray-600">Nail Care</span></li>
              <li><span className="text-gray-600">Massage Therapy</span></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>123 Beauty Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-3">Email: info@monalisa.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Monalisa Beauty Parlor. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/login" className="text-gray-500 hover:text-rose-600 transition text-sm">Login</Link>
            <Link to="/register" className="text-gray-500 hover:text-rose-600 transition text-sm">Register</Link>
            <Link to="/appointments" className="text-gray-500 hover:text-rose-600 transition text-sm">Book Appointment</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
