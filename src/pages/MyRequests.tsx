
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const MyRequests = () => {
  const requests = [
    {
      id: "A221",
      type: "Standard",
      date: "3/16/2025",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Dashboard All Requests
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 bg-gray-100 p-4 font-semibold text-gray-700">
              <div>Request Number</div>
              <div>Request type</div>
              <div>Date</div>
              <div>Actions (View Request Details)</div>
            </div>
            
            {requests.map((request) => (
              <div key={request.id} className="grid grid-cols-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                <div className="text-gray-900">{request.id}</div>
                <div className="text-gray-600">({request.type.toLowerCase()})</div>
                <div className="text-gray-600">{request.date}</div>
                <div>
                  <Button variant="link" className="text-blue-600 p-0">
                    {">>"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequests;
