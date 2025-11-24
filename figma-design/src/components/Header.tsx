import { Phone, Mail, Clock, Instagram } from 'lucide-react';
import logo from 'figma:asset/0611a530df6601fe0b6dea9573bbbc7206bd46fd.png';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="La Pastry Ville" className="h-16 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[--color-charcoal] hover:text-[--color-burgundy] transition-colors">
              Home
            </a>
            <a href="#about" className="text-[--color-charcoal] hover:text-[--color-burgundy] transition-colors">
              About
            </a>
            <a href="#products" className="text-[--color-charcoal] hover:text-[--color-burgundy] transition-colors">
              Products
            </a>
            <a href="#gallery" className="text-[--color-charcoal] hover:text-[--color-burgundy] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-[--color-charcoal] hover:text-[--color-burgundy] transition-colors">
              Contact
            </a>
          </nav>

          {/* Instagram Link */}
          <a 
            href="https://instagram.com/lapastryville" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[--color-burgundy] hover:text-[--color-burgundy-dark] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline">@lapastryville</span>
          </a>
        </div>
      </div>
    </header>
  );
}