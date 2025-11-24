import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock Instagram Stories highlights
const storyHighlights = [
  {
    id: 1,
    title: 'New Items',
    image: 'https://images.unsplash.com/photo-1751151856149-5ebf1d21586a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnklMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTc0MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Specials',
    image: 'https://images.unsplash.com/photo-1681589211939-cbb7402afbc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzkyMjA2OHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    title: 'Process',
    image: 'https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBiYWtlcnl8ZW58MXx8fHwxNzYzOTIwODk2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Reviews',
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYzOTU5NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    title: 'Menu',
    image: 'https://images.unsplash.com/photo-1761594606868-1c577b10f69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwYXN0cmllcyUyMGRpc3BsYXl8ZW58MXx8fHwxNzYzOTk1OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function InstagramStories() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[--color-burgundy]">Story Highlights</h3>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {storyHighlights.map((story) => (
            <a
              key={story.id}
              href="https://instagram.com/lapastryville"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-center group cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 mb-2 group-hover:scale-110 transition-transform">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden">
                  <ImageWithFallback 
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[--color-charcoal] text-sm">{story.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
