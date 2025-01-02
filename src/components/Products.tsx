import { GalleryHorizontal } from "lucide-react";

const Products = () => {
  const products = [
    { name: "Café de Especialidad", description: "Blend exclusivo" },
    { name: "Pasteles Artesanales", description: "Recetas originales" },
    { name: "Bebidas Signature", description: "Creaciones únicas" },
    { name: "Postres Premium", description: "Dulces momentos" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-nomada-dark to-black" id="products">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-12">
          <GalleryHorizontal className="w-8 h-8 text-nomada-gold" />
          <h2 className="text-4xl text-nomada-gold text-center">Nuestros Productos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-xl bg-black/30 border border-nomada-gold/10 p-6 backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-nomada-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-xl text-nomada-gold mb-2">{product.name}</h3>
              <p className="text-nomada-beige/80">{product.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-nomada-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;