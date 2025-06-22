
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyWazfle from "@/components/WhyWazfle";
import HowItWorks from "@/components/HowItWorks";
import PackagesSection from "@/components/PackagesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />
      <HeroSection />
      <WhyWazfle />
      <HowItWorks />
      <PackagesSection />
    </div>
  );
};

export default Index;
