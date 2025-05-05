
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-50 to-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-rose-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-3">
          <Button 
            onClick={() => navigate("/")}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white"
          >
            Return to Home
          </Button>
          <Button 
            onClick={() => navigate(-1)}
            variant="outline" 
            className="w-full border-rose-600 text-rose-600 hover:bg-rose-50"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
