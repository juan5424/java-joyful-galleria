import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Delivery from "@/components/Delivery";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Menu />
      <Location />
      <Delivery />
    </div>
  );
};

export default Index;