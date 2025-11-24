import { Instagram, Facebook, Twitter } from 'lucide-react';
import logoInverse from 'figma:asset/0d905b68ba766941a97967897b026c6ca6ea9d5c.png';

export function Footer() {
  return (
    <footer className="bg-[--color-burgundy] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logoInverse} alt="La Pastry Ville" className="h-20 w-auto mb-4" />
            <p className="opacity-90 max-w-md">
              French-inspired artisan bakery bringing you handcrafted pastries and breads, 
              baked fresh daily from our dark kitchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="opacity-90 hover:opacity-100 transition-opacity">Home</a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">About</a>
              </li>
              <li>
                <a href="#products" className="opacity-90 hover:opacity-100 transition-opacity">Products</a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">Follow Us</h4>
            <p className="opacity-90 mb-4">@lapastryville</p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/lapastryville" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center opacity-90">
          <p>© 2025 La Pastry Ville. All rights reserved. | Artisan Bakery</p>
        </div>
      </div>
    </footer>
  );
}