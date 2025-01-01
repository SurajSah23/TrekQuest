import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Adventures from './components/Adventures';
import Destinations from './components/Destinations';
import Features from './components/Features';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Adventures />
      <Destinations />
      <Features />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
