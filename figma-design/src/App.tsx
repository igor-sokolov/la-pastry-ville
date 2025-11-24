import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { InstagramStories } from './components/InstagramStories';
import { InstagramFeed } from './components/InstagramFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <InstagramStories />
        <About />
        <Products />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}