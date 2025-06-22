
import Navbar from "@/components/Navbar";
import PackagesSection from "@/components/PackagesSection";

const NewRequest = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Select Your Hiring Package
          </h1>
          <PackagesSection />
        </div>
      </div>
    </div>
  );
};

export default NewRequest;
