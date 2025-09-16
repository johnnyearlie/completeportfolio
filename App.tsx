import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Experience } from './components/Experience.tsx';
import { Music } from './components/Music.tsx';
import { Photography } from './components/Photography.tsx';
import { Dog } from './components/Dog.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Music />
        <Photography />
        <Dog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
