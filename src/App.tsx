
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NewRequest from "./pages/NewRequest";
import MyRequests from "./pages/MyRequests";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardNewRequest from "./pages/DashboardNewRequest";
import DashboardMyRequests from "./pages/DashboardMyRequests";
import DashboardPayment from "./pages/DashboardPayment";
import StandardRequestForm from "./pages/StandardRequestForm";
import SpecialRequestForm from "./pages/SpecialRequestForm";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/new-request" element={<DashboardNewRequest />} />
          <Route path="/dashboard/my-requests" element={<DashboardMyRequests />} />
          <Route path="/dashboard/payment" element={<DashboardPayment />} />
          <Route path="/dashboard/standard-request-form" element={<StandardRequestForm />} />
          <Route path="/dashboard/special-request-form" element={<SpecialRequestForm />} />
          <Route path="/dashboard/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
