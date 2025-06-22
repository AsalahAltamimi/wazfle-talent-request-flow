
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  useEffect(() => {
    const packageData = localStorage.getItem('selectedPackage');
    if (packageData) {
      setSelectedPackage(JSON.parse(packageData));
    }
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if this is for a special request (no package data stored)
    const urlParams = new URLSearchParams(window.location.search);
    const isSpecialRequest = urlParams.get('special') === 'true';
    
    if (isSpecialRequest) {
      navigate("/dashboard/special-request-form");
    } else if (selectedPackage) {
      navigate("/dashboard/standard-request-form");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />
      <div className="py-16">
        <div className="max-w-md mx-auto px-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Create Account
              </CardTitle>
              <CardDescription>
                Join Wazfle to start hiring talent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Enter your company name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Create Account
                </Button>
              </form>
              <div className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
