const Menu = () => {
  const menuItems = [
    { category: "ESPRESSO", items: [
      { name: "Espresso", price: "$35" },
      { name: "Cortado", price: "$42" },
      { name: "Macciato", price: "$42" },
      { name: "Capuccino 8 oz", price: "$55" },
    ]},
    { category: "SPECIALTY", items: [
      { name: "Latte de Butterscotch", price: "$70" },
      { name: "Latte de Baileys", price: "$80" },
      { name: "Chocolate Nómada", price: "$50" },
      { name: "Matcha", price: "$65" },
    ]},
  ];

  return (
    <section className="py-20 bg-nomada-dark" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-nomada-gold text-center mb-12">Menú</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((section) => (
            <div key={section.category} className="animate-fadeIn">
              <h3 className="text-2xl text-nomada-beige mb-6">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between text-white">
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