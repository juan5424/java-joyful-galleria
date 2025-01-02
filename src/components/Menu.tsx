import { Coffee, IceCreamBowl, Sandwich, GlassWater } from "lucide-react";

const Menu = () => {
  const menuSections = [
    {
      category: "BEBIDAS CALIENTES",
      icon: <Coffee className="w-6 h-6 text-nomada-gold mb-2" />,
      items: [
        { name: "Espresso", price: "$35" },
        { name: "Cortado", price: "$42" },
        { name: "Macciato", price: "$42" },
        { name: "Capuccino 8 oz", price: "$55" },
        { name: "Americano", price: "$40" },
        { name: "Latte", price: "$50" },
      ]
    },
    {
      category: "BEBIDAS FRÍAS",
      icon: <GlassWater className="w-6 h-6 text-nomada-gold mb-2" />,
      items: [
        { name: "Frappé", price: "$65" },
        { name: "Cold Brew", price: "$55" },
        { name: "Limonada", price: "$45" },
        { name: "Té Helado", price: "$45" },
      ]
    },
    {
      category: "DELI",
      icon: <Sandwich className="w-6 h-6 text-nomada-gold mb-2" />,
      items: [
        { name: "Sandwich de Jamón", price: "$75" },
        { name: "Croissant", price: "$45" },
        { name: "Bagel", price: "$65" },
        { name: "Pan de Plátano", price: "$40" },
      ]
    },
    {
      category: "POSTRES",
      icon: <IceCreamBowl className="w-6 h-6 text-nomada-gold mb-2" />,
      items: [
        { name: "Pastel de Zanahoria", price: "$65" },
        { name: "Brownie", price: "$45" },
        { name: "Cheesecake", price: "$70" },
        { name: "Galletas", price: "$35" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-nomada-dark" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-nomada-gold text-center mb-12">Menú</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuSections.map((section) => (
            <div 
              key={section.category} 
              className="animate-fadeIn bg-black/20 p-6 rounded-lg border border-nomada-gold/10 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-4">
                {section.icon}
                <h3 className="text-2xl text-nomada-beige ml-2">{section.category}</h3>
              </div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="flex justify-between text-white hover:bg-white/5 p-2 rounded-md transition-colors"
                  >
                    <span>{item.name}</span>
                    <span className="text-nomada-gold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;