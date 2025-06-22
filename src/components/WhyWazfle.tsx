
const WhyWazfle = () => {
  const benefits = [
    {
      title: "Money-Back Guarantee",
      description: "100% satisfaction guaranteed or your money back"
    },
    {
      title: "Expert Recruitment Team",
      description: "Professional recruiters with industry expertise"
    },
    {
      title: "Fast & Seamless Process",
      description: "Quick turnaround times with minimal effort required"
    },
    {
      title: "Extensive Talent Network",
      description: "Access to a vast pool of qualified candidates"
    },
    {
      title: "All Levels Covered",
      description: "From junior to senior level positions"
    }
  ];

  return (
    <div className="py-16 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Why Choose Wazfle?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWazfle;
