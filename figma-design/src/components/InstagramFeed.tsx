import { Instagram, Heart, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock Instagram posts - In a real implementation, these would come from Instagram API
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTc0MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Fresh croissants just out of the oven! 🥐✨',
    likes: 342,
    comments: 28
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1723985007381-b3dd779fb8ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwYXUlMjBjaG9jb2xhdCUyMGJha2VyeXxlbnwxfHx8fDE3NjQwMDQ1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Pain au chocolat perfection 🍫 Order yours today!',
    likes: 289,
    comments: 19
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1584966164218-42b0c3225e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5uYW1vbiUyMHJvbGxzJTIwYmFraW5nfGVufDF8fHx8MTc2NDAwNDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Cinnamon rolls made with love 💕',
    likes: 456,
    comments: 34
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1681589211939-cbb7402afbc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzkyMjA2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Today\'s macaron flavors: Raspberry, Pistachio, Vanilla 🌈',
    likes: 512,
    comments: 42
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1648412009969-de91a17f4340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnQlMjBkZXNzZXJ0fGVufDF8fHx8MTc2NDAwNDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Lemon tart with fresh zest 🍋 Pure sunshine!',
    likes: 378,
    comments: 25
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1659022262772-ed2cc9e7c359?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjcm9pc3NhbnQlMjBtb3JuaW5nfGVufDF8fHx8MTc2NDAwNDU2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Perfect morning pairing ☕️🥐',
    likes: 423,
    comments: 31
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYzOTU5NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Chocolate decadence 🍰 Available for order!',
    likes: 567,
    comments: 48
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1681329142517-6daaa56d3670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJ0JTIwYmFrZXJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjM5OTU5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Seasonal fruit tarts 🍓 Limited time!',
    likes: 398,
    comments: 36
  }
];

export function InstagramFeed() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-[--color-burgundy]" />
            <h2 className="text-[--color-burgundy]">@lapastryville</h2>
          </div>
          <p className="text-[--color-charcoal] max-w-2xl mx-auto opacity-90">
            Follow us on Instagram for daily updates, behind-the-scenes content, and exclusive specials!
          </p>
          <a 
            href="https://instagram.com/lapastryville" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
          >
            <span className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </span>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/lapastryville"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <ImageWithFallback 
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <div className="flex items-center gap-6 mb-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <p className="text-center text-sm line-clamp-2">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        {/* User Generated Content Section */}
        <div className="mt-16 bg-[--color-cream] rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-[--color-burgundy] mb-4">Share Your La Pastry Ville Moment</h3>
          <p className="text-[--color-charcoal] opacity-90 mb-6">
            Tag us in your photos with <span className="text-[--color-burgundy]">#LaPastryVille</span> or 
            <span className="text-[--color-burgundy]"> #LPVPastries</span> for a chance to be featured!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-[--color-burgundy]">#LaPastryVille</span>
            <span className="bg-white px-4 py-2 rounded-full text-[--color-burgundy]">#LPVPastries</span>
            <span className="bg-white px-4 py-2 rounded-full text-[--color-burgundy]">#ArtisanBakery</span>
            <span className="bg-white px-4 py-2 rounded-full text-[--color-burgundy]">#FrenchPastry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
