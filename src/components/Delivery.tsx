import { Truck } from "lucide-react";
import { Button } from "./ui/button";

const Delivery = () => {
  return (
    <section className="py-20 bg-nomada-dark" id="delivery">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Truck className="w-16 h-16 text-nomada-gold mx-auto mb-6" />
          <h2 className="text-4xl text-nomada-gold mb-6">Servicio a Domicilio</h2>
          <p className="text-white mb-8">
            Disfruta de nuestro café en la comodidad de tu hogar. Hacemos entregas en toda la ciudad.
          </p>
          <Button className="bg-nomada-gold hover:bg-nomada-beige text-black">
            Ordenar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;