import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Fondo con gradiente y efectos */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Efecto de vapor de café */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-20 bg-nomada-beige rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.6,
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>

      {/* Overlay con gradiente */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-60"
      />

      {/* Contenido principal */}
      <div className="relative z-10">
        <img
          src="/lovable-uploads/340f2485-9b81-43a7-a493-b6dbda845ad9.png"
          alt="Nomada Coffee Logo"
          className="w-64 md:w-80 mb-8 animate-fadeIn drop-shadow-2xl hover:scale-105 transition-transform duration-300"
        />
        
        {/* Línea decorativa con efecto brillante */}
        <div className="relative w-32 h-0.5 mx-auto my-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nomada-gold to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" />
        </div>
        
        {/* Social Icons con efectos mejorados */}
        <div 
          className="flex gap-6 mt-8 animate-fadeIn bg-black/30 px-8 py-4 rounded-full backdrop-blur-sm border border-nomada-gold/20"
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

        {/* Decorative coffee beans */}
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-40 h-40 rounded-full border border-nomada-gold/30 animate-spin-slow" />
        </div>
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 opacity-20">
          <div className="w-40 h-40 rounded-full border border-nomada-gold/30 animate-spin-slow-reverse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;