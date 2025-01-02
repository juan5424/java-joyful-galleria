import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Fondo con gradiente y overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-nomada-dark via-black to-nomada-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/65499582-2886-41ff-b5a1-361cd105d87f.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Efecto de partículas/granos de café */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-2 h-2 bg-nomada-gold rounded-full animate-pulse" style={{ top: '20%', left: '20%' }} />
        <div className="absolute w-2 h-2 bg-nomada-gold rounded-full animate-pulse" style={{ top: '60%', left: '70%' }} />
        <div className="absolute w-2 h-2 bg-nomada-gold rounded-full animate-pulse" style={{ top: '80%', left: '30%' }} />
        <div className="absolute w-2 h-2 bg-nomada-gold rounded-full animate-pulse" style={{ top: '40%', left: '80%' }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <img
          src="/lovable-uploads/340f2485-9b81-43a7-a493-b6dbda845ad9.png"
          alt="Nomada Coffee Logo"
          className="w-64 md:w-80 mb-8 animate-fadeIn drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        
        {/* Línea decorativa */}
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-nomada-gold to-transparent mx-auto my-6" />
        
        {/* Social Icons con efectos mejorados */}
        <div 
          className="flex gap-6 mt-8 animate-fadeIn bg-black/30 px-8 py-4 rounded-full backdrop-blur-sm"
          style={{ animationDelay: "0.2s" }}
        >
          {[
            { icon: Facebook, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "#" },
            { icon: MapPin, href: "#" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-nomada-gold hover:text-nomada-beige transition-colors transform hover:scale-110 duration-300"
            >
              <item.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Imagen circular con efecto */}
        <div 
          className="flex gap-4 mt-12 animate-fadeIn"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-nomada-gold to-nomada-beige rounded-full opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
            <img 
              src="/lovable-uploads/65499582-2886-41ff-b5a1-361cd105d87f.png" 
              alt="Coffee Art" 
              className="relative w-32 h-32 rounded-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;