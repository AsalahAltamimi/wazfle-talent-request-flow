
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

const PackagesSection = () => {
  const [quantities, setQuantities] = useState({
    junior: '',
    medium: '',
    experienced: ''
  });

  const packages = [
    {
      id: 'junior',
      title: 'Junior or technician',
      subtitle: 'Non-bachelor or bachelor with less than 2 years experience.',
      price: '$600',
      priceDetail: '/per candidate',
      features: [
        'Draft JD',
        'Post job on website such as LinkedIn- or any other relevant platform based on the targeted country.',
        'HR screening call',
        'Technical Interview',
        'Proposed the best 5 candidate for the final client\'s decision'
      ],
      highlighted: false
    },
    {
      id: 'medium',
      title: 'Medium level',
      subtitle: '3-7 years experience',
      price: '$1000',
      priceDetail: '/per candidate',
      features: [
        'Draft JD',
        'Post job on website such as LinkedIn- or any other relevant platform based on the targeted country.',
        'HR screening call',
        'Technical Interview',
        'Proposed the best 5 candidate for the final client\'s decision'
      ],
      highlighted: true
    },
    {
      id: 'experienced',
      title: 'Experienced',
      subtitle: 'above 8 years experience',
      price: '$2000',
      priceDetail: '/per candidate',
      features: [
        'Draft JD',
        'Post job on website such as LinkedIn- or any other relevant platform based on the targeted country.',
        'HR screening call',
        'Technical Interview',
        'Proposed the best 5 candidate for the final client\'s decision'
      ],
      highlighted: false
    }
  ];

  const handleQuantityChange = (packageId: string, value: string) => {
    setQuantities(prev => ({
      ...prev,
      [packageId]: value
    }));
  };

  return (
    <div className="py-16 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Standard Request Section */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-8 mb-6">
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-8">
                Standard request
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div 
                    key={pkg.id}
                    className={`bg-white rounded-lg p-6 border-2 transition-all hover:shadow-lg ${
                      pkg.highlighted 
                        ? 'border-purple-500 shadow-lg' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-blue-600 mb-1">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {pkg.subtitle}
                      </p>
                    </div>
                    
                    <ul className="text-sm space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {pkg.priceDetail}
                      </div>
                    </div>
                    
                    <Input
                      placeholder="Add number here"
                      value={quantities[pkg.id as keyof typeof quantities]}
                      onChange={(e) => handleQuantityChange(pkg.id, e.target.value)}
                      className="mb-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Special Request Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 h-fit">
              <h2 className="text-xl font-bold text-center text-blue-600 mb-6">
                Special request
              </h2>
              
              <div className="text-sm text-gray-700 mb-6 leading-relaxed">
                If you have any additional requirements such as attestation, background check, Visa process, outsourcing or if you have multiple requirements between categories, fill it here and our team will send you a proposal along with technical interview CV.
                <br /><br />
                Fill out the information and your contact details.
              </div>
              
              <Link to="/special-request">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Continue
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
