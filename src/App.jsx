// Ganti yang tadinya "../" jadi "./"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;