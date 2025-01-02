import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Fondo dinámico con gradientes */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-nomada-dark via-[#2C1810] to-[#1A0F09]"
      >
        {/* Círculos decorativos con gradientes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-nomada-gold/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-nomada-beige/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Patrón de granos de café */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-12 rounded-full border border-nomada-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Efecto de luz radial */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo con efecto de brillo */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nomada-gold/20 to-transparent animate-shine" />
          <h1 className="text-6xl md:text-8xl font-bold text-nomada-gold mb-4 tracking-tighter">
            NÓMADA
          </h1>
          <p className="text-nomada-beige/80 text-xl md:text-2xl tracking-wide">
            COFFEE CREW
          </p>
        </div>

        {/* Línea decorativa animada */}
        <div className="relative w-32 h-0.5 mx-auto my-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nomada-gold to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shine" />
        </div>

        {/* Texto descriptivo con animación */}
        <p 
          className="text-nomada-beige/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          Descubre el arte del café en cada taza, donde la pasión se encuentra con la perfección
        </p>

        {/* Social Icons con efectos mejorados */}
        <div 
          className="flex gap-8 justify-center animate-fadeIn"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Instagram, href: "#", label: "Instagram" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Mail, href: "#", label: "Email" },
            { icon: MapPin, href: "#", label: "Ubicación" }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.href}
              aria-label={item.label}
              className="group relative p-3 bg-black/30 rounded-full border border-nomada-gold/20 backdrop-blur-sm hover:scale-110 transition-all duration-300"
            >
              <item.icon className="w-6 h-6 text-nomada-gold group-hover:text-nomada-beige transition-colors" />
              <div className="absolute inset-0 bg-nomada-gold/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="w-48 h-48 border border-nomada-gold/10 rounded-full animate-spin-slow opacity-20" />
      </div>
      <div className="absolute right-0 bottom-1/4">
        <div className="w-32 h-32 border border-nomada-beige/10 rounded-full animate-spin-slow-reverse opacity-20" />
      </div>
    </section>
  );
};

export default Hero;