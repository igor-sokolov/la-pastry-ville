import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: 'Croissants',
    description: 'Buttery, flaky, and perfectly golden. Made with premium French butter and laminated to perfection.',
    image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTc0MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Artisan Breads',
    description: 'Traditional French baguettes and rustic loaves, baked fresh with time-honored techniques.',
    image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTIwODk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'French Pastries',
    description: 'A delightful selection of éclairs, tarts, and choux pastries filled with rich creams.',
    image: 'https://images.unsplash.com/photo-1761594606868-1c577b10f69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cmllcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzYzOTk1OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Macarons',
    description: 'Delicate French macarons in various flavors, with the perfect crisp shell and soft center.',
    image: 'https://images.unsplash.com/photo-1681589211939-cbb7402afbc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzkyMjA2OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    name: 'Chocolate Cakes',
    description: 'Rich, decadent chocolate cakes layered with premium ganache and finished with elegance.',
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYzOTU5NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    name: 'Fruit Tarts',
    description: 'Beautiful seasonal fruit tarts with vanilla pastry cream and a buttery shortcrust base.',
    image: 'https://images.unsplash.com/photo-1681329142517-6daaa56d3670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0JTIwYmFrZXJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjM5OTU5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 bg-[--color-cream]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[--color-burgundy] mb-4">Our Artisan Selection</h2>
          <p className="text-[--color-charcoal] max-w-2xl mx-auto opacity-90">
            Discover our range of handcrafted French pastries and baked goods, 
            each made with love and the finest ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <ImageWithFallback 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[--color-burgundy]">{product.name}</h3>
                </div>
                <p className="text-[--color-charcoal] opacity-80 mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-[--color-burgundy] text-white py-2 rounded-full hover:bg-[--color-burgundy-dark] transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}