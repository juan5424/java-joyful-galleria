import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative p-4">
      <img
        src="/lovable-uploads/340f2485-9b81-43a7-a493-b6dbda845ad9.png"
        alt="Nomada Coffee Logo"
        className="w-64 md:w-80 mb-8 animate-fadeIn"
      />
      
      <div className="flex gap-6 mt-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <a href="#" className="text-nomada-gold hover:text-nomada-beige transition-colors">
          <Facebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-nomada-gold hover:text-nomada-beige transition-colors">
          <Instagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-nomada-gold hover:text-nomada-beige transition-colors">
          <Twitter className="w-6 h-6" />
        </a>
        <a href="#" className="text-nomada-gold hover:text-nomada-beige transition-colors">
          <Mail className="w-6 h-6" />
        </a>
        <a href="#" className="text-nomada-gold hover:text-nomada-beige transition-colors">
          <MapPin className="w-6 h-6" />
        </a>
      </div>

      <div className="flex gap-4 mt-12 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
        <img src="/lovable-uploads/65499582-2886-41ff-b5a1-361cd105d87f.png" alt="Coffee Art" className="w-32 h-32 rounded-full object-cover" />
      </div>
    </section>
  );
};

export default Hero;