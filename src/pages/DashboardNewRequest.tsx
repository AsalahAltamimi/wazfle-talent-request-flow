
import DashboardLayout from "@/components/DashboardLayout";
import PackagesSection from "@/components/PackagesSection";

const DashboardNewRequest = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Select Your Hiring Package</h1>
          <p className="text-gray-600 mt-2">Choose the package that best fits your hiring needs</p>
        </div>
        <PackagesSection />
      </div>
    </DashboardLayout>
  );
};

export default DashboardNewRequest;
