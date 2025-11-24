import logoMain from 'figma:asset/8d75c335afe90ad083ed2a7c0c855223600c5203.png';
import { Instagram } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-[--color-cream] to-[--color-beige] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <img src={logoMain} alt="La Pastry Ville" className="w-64 md:w-96 h-auto" />
          </div>

          {/* Tagline */}
          <p className="text-[--color-burgundy] mb-6 italic">
            French-Inspired Artisan Pastries, Delivered Fresh Daily
          </p>

          <p className="text-[--color-charcoal] max-w-2xl mx-auto mb-10 opacity-90">
            Experience the authentic taste of French pastry crafted with passion and precision. 
            From our dark kitchen to your doorstep, we bring you handmade delights baked fresh every day.
          </p>

          {/* Instagram CTA */}
          <div className="inline-flex items-center gap-2 text-[--color-burgundy] bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full">
            <Instagram className="w-5 h-5" />
            <span>Follow us on Instagram for daily treats & specials</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}