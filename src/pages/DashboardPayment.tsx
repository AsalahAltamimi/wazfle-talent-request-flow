
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Upload } from "lucide-react";

const DashboardPayment = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payment</h1>
          <p className="text-gray-600 mt-2">Complete your payment for the hiring request</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Online Payment
              </CardTitle>
              <CardDescription>
                Pay securely with your credit or debit card
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
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Pay $49.99
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5" />
                Bank Transfer
              </CardTitle>
              <CardDescription>
                Upload your bank transfer receipt
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
                <p>Amount: $49.99</p>
              </div>
              <Button variant="outline" className="w-full">
                Submit Receipt
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPayment;
