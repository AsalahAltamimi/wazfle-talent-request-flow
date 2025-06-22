
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPayment = () => {
  const navigate = useNavigate();

  const handleOnlinePayment = () => {
    // After successful payment, redirect to thank you page
    navigate('/dashboard/thank-you');
  };

  const handleBankTransfer = () => {
    // After uploading receipt, redirect to thank you page
    navigate('/dashboard/thank-you');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment</h1>
          <p className="text-gray-600 mt-2">Complete your payment for the hiring request</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">Choose Your Payment Method</h3>
          <p className="text-blue-800 text-sm">
            Please select ONE of the following payment options to complete your request:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-600">
                <CreditCard className="mr-2 h-5 w-5" />
                Option 1: Online Payment
              </CardTitle>
              <CardDescription>
                Pay securely with your credit or debit card (Recommended)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <Button 
                onClick={handleOnlinePayment}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Pay $49.99
              </Button>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-600 font-bold">OR</span>
              </div>
            </div>
          </div>

          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-700">
                <Upload className="mr-2 h-5 w-5" />
                Option 2: Bank Transfer
              </CardTitle>
              <CardDescription>
                Upload your bank transfer receipt after making the payment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <Button variant="outline">
                    Choose File
                  </Button>
                  <p className="mt-2 text-sm text-gray-500">
                    Upload your payment receipt (PNG, JPG, PDF)
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reference">Reference / Notes</Label>
                <Input id="reference" placeholder="Transaction reference or additional notes" />
              </div>
              <Separator />
              <div className="space-y-2 text-sm text-gray-600">
                <h4 className="font-medium">Bank Details:</h4>
                <p>Account Name: Wazfle Ltd</p>
                <p>Account Number: 1234567890</p>
                <p>Sort Code: 12-34-56</p>
                <p className="font-semibold text-blue-600">Amount: $49.99</p>
              </div>
              <Button 
                onClick={handleBankTransfer}
                variant="outline" 
                className="w-full"
              >
                Submit Receipt
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-gray-500 mt-6">
          <p>Choose only one payment method to complete your request</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPayment;
