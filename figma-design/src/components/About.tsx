import { UtensilsCrossed, Clock, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[--color-burgundy] mb-6">About La Pastry Ville</h2>
          <p className="text-[--color-charcoal] opacity-90">
            Welcome to La Pastry Ville, where French tradition meets artisan craftsmanship. 
            Operating from our dark kitchen, we focus entirely on what matters most: creating 
            exceptional pastries and baked goods that delight your senses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-[--color-cream] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[--color-burgundy] rounded-full mb-4">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[--color-burgundy] mb-3">Artisan Quality</h3>
            <p className="text-[--color-charcoal] opacity-80">
              Every pastry is handcrafted using traditional French techniques and the finest ingredients.
            </p>
          </div>

          <div className="text-center p-8 bg-[--color-cream] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[--color-burgundy] rounded-full mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[--color-burgundy] mb-3">Fresh Daily</h3>
            <p className="text-[--color-charcoal] opacity-80">
              Baked fresh every morning and delivered to ensure maximum freshness and flavor.
            </p>
          </div>

          <div className="text-center p-8 bg-[--color-cream] rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[--color-burgundy] rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-[--color-burgundy] mb-3">Made with Love</h3>
            <p className="text-[--color-charcoal] opacity-80">
              Passion and dedication in every bite, bringing you authentic French bakery experience.
            </p>
          </div>
        </div>

        {/* Dark Kitchen Info */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-[--color-beige] rounded-lg text-center">
          <h3 className="text-[--color-burgundy] mb-4">Dark Kitchen Excellence</h3>
          <p className="text-[--color-charcoal] opacity-90">
            As a dark kitchen operation, we dedicate all our resources to perfecting our craft without the 
            overhead of a traditional storefront. This allows us to maintain exceptional quality while focusing 
            entirely on what we do best—creating artisan pastries. Follow us on Instagram for availability and ordering information.
          </p>
        </div>
      </div>
    </section>
  );
}