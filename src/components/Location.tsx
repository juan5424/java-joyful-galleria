import { MapPin, Phone, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-black text-white" id="location">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-nomada-gold text-center mb-12">Ubicación</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-4">
              <MapPin className="text-nomada-gold w-6 h-6" />
              <p>123 Calle Principal, Ciudad</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-nomada-gold w-6 h-6" />
              <p>+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-nomada-gold w-6 h-6" />
              <div>
                <p>Lun - Vie: 7:00 - 20:00</p>
                <p>Sáb - Dom: 8:00 - 21:00</p>
              </div>
            </div>
          </div>
          
          <div className="h-64 bg-nomada-dark rounded-lg animate-fadeIn">
            {/* Map placeholder - would be replaced with actual map integration */}
            <div className="w-full h-full flex items-center justify-center text-nomada-gold">
              Mapa
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;