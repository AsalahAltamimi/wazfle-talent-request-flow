
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          TALENT ACQUISITION MADE EASY
        </h1>
        <p className="text-xl text-blue-600 mb-12 max-w-2xl mx-auto">
          Fill your requirements or select a hiring package, then complete your purchase.
        </p>
        <Link to="/new-request">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full">
            POST A REQUEST
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
