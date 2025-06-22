
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Wazfle
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Overview
            </Link>
            <Link 
              to="/new-request" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/new-request') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              New Request
            </Link>
            <Link 
              to="/my-requests" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/my-requests') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              My Requests
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </Link>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white">
            POST A REQUEST
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
