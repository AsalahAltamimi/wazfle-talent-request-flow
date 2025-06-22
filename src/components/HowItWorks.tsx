
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Select Your Hiring Package",
      description: "Choose from our standard packages or create a custom request"
    },
    {
      title: "Submit Job Request",
      description: "Fill out the detailed form with your requirements"
    },
    {
      title: "Complete Your Purchase",
      description: "Pay securely online or via bank transfer"
    }
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Hire your team in 3 steps:
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 max-w-xs text-center">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block text-blue-600 mx-4 w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
